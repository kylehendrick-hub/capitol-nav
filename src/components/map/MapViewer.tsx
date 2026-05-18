import { useRef, useState, useEffect } from 'react';
import { useMap } from '../../context/MapContext';
import { useNavigation } from '../../context/NavigationContext';
import { useMapInteraction } from '../../hooks/useMapInteraction';
import { BUILDING_MAP } from '../../data/buildings';
import { ROOMS } from '../../data/rooms';
import { OCCUPANTS } from '../../data/occupants';
import { ENTRANCES, WING_LABELS } from '../../data/entrances';
import { Room } from '../../types';
import { Graph } from '../../engine/graph';
import { RouteOverlay } from './RouteOverlay';

interface MapViewerProps {
  graph: Graph;
  compact?: boolean; // compact mode for inline in navigate page
  showBuildingSelector?: boolean;
}

export function MapViewer({ graph, compact = false, showBuildingSelector = true }: MapViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { state: mapState, dispatch: mapDispatch } = useMap();
  const { state: navState } = useNavigation();
  const {
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
    handleTouchMove,
    handleTouchEnd,
    transform,
    resetView,
  } = useMapInteraction(containerRef);

  const [svgContent, setSvgContent] = useState<string>('');
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const building = BUILDING_MAP.get(mapState.currentBuilding);
  const floor = building?.floors.find(f => f.id === mapState.currentFloorId);

  // Rooms on current floor
  const roomsOnFloor = ROOMS.filter(
    r => r.buildingId === mapState.currentBuilding && r.position.floorId === mapState.currentFloorId
  );

  // Load SVG when floor changes
  useEffect(() => {
    if (!floor) return;
    fetch(floor.svgPath)
      .then(r => { if (r.ok) return r.text(); throw new Error(); })
      .then(setSvgContent)
      .catch(() => setSvgContent(''));
  }, [floor]);

  // Close popup when floor/building changes
  useEffect(() => { setSelectedRoom(null); }, [mapState.currentFloorId, mapState.currentBuilding]);

  // Get route nodes on current floor
  const routeNodesOnFloor = navState.route
    ? navState.route.steps
        .filter(s => s.floorId === mapState.currentFloorId)
        .flatMap(s => [s.startNodeId, s.endNodeId])
        .filter((v, i, a) => a.indexOf(v) === i)
        .map(id => graph.getNode(id))
        .filter(Boolean)
    : [];

  const routeFloors = navState.route?.floors || [];

  // Entrances on current floor
  const entrancesOnFloor = ENTRANCES.filter(
    e => e.buildingId === mapState.currentBuilding && e.floorId === mapState.currentFloorId
  );

  // Wing labels for current building/floor
  const wingLabels = WING_LABELS.filter(
    w => w.buildingId === mapState.currentBuilding && (w.floorId === '*' || w.floorId === mapState.currentFloorId)
  );

  // "You Are Here" — check if start room is on this floor
  const youAreHere = navState.startRoom?.buildingId === mapState.currentBuilding &&
    navState.startRoom?.position.floorId === mapState.currentFloorId
    ? navState.startRoom
    : null;

  const handleRoomClick = (room: Room) => {
    setSelectedRoom(prev => prev?.id === room.id ? null : room);
  };

  const getOccupantInfo = (room: Room) => {
    if (room.occupants.length === 0) return null;
    return room.occupants
      .map(id => OCCUPANTS.find(o => o.id === id))
      .filter(Boolean);
  };

  return (
    <div className={compact ? "map-compact" : "page"} style={{ position: 'relative' }}>
      {/* Building selector */}
      {showBuildingSelector && (
        <div className="building-selector">
          {Array.from(BUILDING_MAP.values()).map(b => (
            <button
              key={b.id}
              className={`building-chip ${b.id === mapState.currentBuilding ? 'active' : ''}`}
              onClick={() => { mapDispatch({ type: 'SET_BUILDING', buildingId: b.id, floorId: b.floors[0]?.id || '' }); setSelectedRoom(null); }}
            >
              {b.abbreviation}
            </button>
          ))}
        </div>
      )}

      {/* Map area */}
      <div
        className="map-container"
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={compact ? { minHeight: 280 } : undefined}
      >
        {/* Floor selector */}
        {building && (
          <div className="floor-selector">
            {[...building.floors].reverse().map(f => (
              <button
                key={f.id}
                className={`floor-btn ${f.id === mapState.currentFloorId ? 'active' : ''} ${routeFloors.includes(f.id) ? 'on-route' : ''}`}
                onClick={() => mapDispatch({ type: 'SET_FLOOR', floorId: f.id })}
              >
                {f.level === -1 ? 'B' : f.level === -2 ? 'LL' : f.level === 0 ? 'G' : `${f.level}F`}
              </button>
            ))}
          </div>
        )}

        {/* Zoom controls */}
        <div className="map-controls">
          <button className="map-control-btn" onClick={() => mapDispatch({ type: 'SET_TRANSFORM', transform: { ...transform, scale: Math.min(transform.scale * 1.3, 4) } })}>+</button>
          <button className="map-control-btn" onClick={() => mapDispatch({ type: 'SET_TRANSFORM', transform: { ...transform, scale: Math.max(transform.scale / 1.3, 0.3) } })}>−</button>
          <button className="map-control-btn" onClick={resetView}>⟲</button>
        </div>

        {/* Room info popup */}
        {selectedRoom && (
          <div className="room-popup">
            <button className="room-popup-close" onClick={() => setSelectedRoom(null)}>✕</button>
            <div className="room-popup-header">
              <span className="room-popup-number">{selectedRoom.number}</span>
              <span className="room-popup-building">{BUILDING_MAP.get(selectedRoom.buildingId)?.shortName}</span>
            </div>
            {selectedRoom.label && (
              <div className="room-popup-label">{selectedRoom.label}</div>
            )}
            {(() => {
              const occupants = getOccupantInfo(selectedRoom);
              if (!occupants || occupants.length === 0) return (
                <div className="room-popup-empty">No current occupant</div>
              );
              return occupants.map(occ => occ && (
                <div key={occ.id} className="room-popup-occupant">
                  <div className="room-popup-name">{occ.name}</div>
                  <div className="room-popup-detail">{occ.title} · {occ.party}-{occ.state}</div>
                </div>
              ));
            })()}
            <div className="room-popup-type">{selectedRoom.type}</div>
          </div>
        )}

        {/* Map content */}
        <div
          className="map-inner"
          style={{ transform: `translate(${transform.translateX}px, ${transform.translateY}px) scale(${transform.scale})` }}
        >
          {svgContent ? (
            <div style={{ position: 'relative' }}>
              <div dangerouslySetInnerHTML={{ __html: svgContent }} />

              {/* === MAP LABELS OVERLAY === */}
              {floor && (
                <svg
                  className="labels-overlay-svg"
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
                  viewBox={`0 0 ${floor.bounds.width} ${floor.bounds.height}`}
                >
                  {/* Wing / street labels */}
                  {wingLabels.map((w, i) => (
                    <text
                      key={`wing-${i}`}
                      x={w.x} y={w.y}
                      textAnchor="middle"
                      fill="#94a3b8"
                      fontSize={w.fontSize || 12}
                      fontWeight="700"
                      fontFamily="system-ui, sans-serif"
                      letterSpacing="1"
                    >
                      {w.label}
                    </text>
                  ))}

                  {/* Entrance markers */}
                  {entrancesOnFloor.map(e => (
                    <g key={e.id}>
                      {/* Entrance icon */}
                      <rect
                        x={e.x - 50} y={e.y - 12}
                        width="100" height="24" rx="12"
                        fill="#059669" opacity="0.9"
                      />
                      <text
                        x={e.x} y={e.y + 4}
                        textAnchor="middle"
                        fill="white"
                        fontSize="9"
                        fontWeight="700"
                        fontFamily="system-ui, sans-serif"
                      >
                        🚪 {e.name.replace(' Entrance', '')}
                      </text>
                    </g>
                  ))}

                  {/* "You Are Here" marker */}
                  {youAreHere && (
                    <g>
                      <circle cx={youAreHere.position.x} cy={youAreHere.position.y} r="24" fill="#3b82f6" opacity="0.15">
                        <animate attributeName="r" values="18;28;18" dur="2s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.2;0.05;0.2" dur="2s" repeatCount="indefinite" />
                      </circle>
                      <circle cx={youAreHere.position.x} cy={youAreHere.position.y} r="12" fill="white" />
                      <circle cx={youAreHere.position.x} cy={youAreHere.position.y} r="9" fill="#3b82f6" />
                      <circle cx={youAreHere.position.x - 2} cy={youAreHere.position.y - 2} r="3" fill="white" opacity="0.5" />
                      <rect
                        x={youAreHere.position.x - 40} y={youAreHere.position.y - 30}
                        width="80" height="18" rx="9"
                        fill="#1e40af"
                      />
                      <text
                        x={youAreHere.position.x} y={youAreHere.position.y - 18}
                        textAnchor="middle" fill="white" fontSize="9" fontWeight="700"
                        fontFamily="system-ui, sans-serif"
                      >
                        YOU ARE HERE
                      </text>
                    </g>
                  )}
                </svg>
              )}

              {/* === CLICKABLE ROOM DOTS === */}
              {floor && (
                <svg
                  className="rooms-overlay-svg"
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                  viewBox={`0 0 ${floor.bounds.width} ${floor.bounds.height}`}
                >
                  {roomsOnFloor.map(room => {
                    const isSelected = selectedRoom?.id === room.id;
                    const hasOccupant = room.occupants.length > 0;
                    const isLandmark = room.type === 'other' || room.type === 'committee' || room.type === 'hearing';
                    // Don't show empty room dots — only occupied offices, landmarks, and infrastructure
                    if (!hasOccupant && !isLandmark && room.type === 'office' && !isSelected) return null;
                    const dotSize = isLandmark ? 7 : hasOccupant ? 5 : 4;
                    const color = isSelected ? '#ef4444' : isLandmark ? '#8b5cf6' : hasOccupant ? '#3b82f6' : '#94a3b8';

                    return (
                      <g
                        key={room.id}
                        onClick={(e) => { e.stopPropagation(); handleRoomClick(room); }}
                        style={{ cursor: 'pointer' }}
                      >
                        {isSelected && (
                          <circle cx={room.position.x} cy={room.position.y} r={dotSize + 6} fill={color} opacity="0.2">
                            <animate attributeName="r" values={`${dotSize + 4};${dotSize + 10};${dotSize + 4}`} dur="1.5s" repeatCount="indefinite" />
                          </circle>
                        )}
                        <circle
                          cx={room.position.x} cy={room.position.y}
                          r={isSelected ? dotSize + 2 : dotSize}
                          fill={color} stroke="white"
                          strokeWidth={isSelected ? 2 : 1}
                          opacity={isSelected ? 1 : 0.7}
                        />
                        {/* Room number label for landmarks, selected rooms, and occupied offices */}
                        {(isLandmark || isSelected || hasOccupant) && (
                          <text
                            x={room.position.x} y={room.position.y - dotSize - 4}
                            textAnchor="middle" fill="#334155"
                            fontSize={isLandmark ? 9 : 7} fontWeight="600"
                            fontFamily="system-ui, sans-serif"
                            style={{ pointerEvents: 'none' }}
                          >
                            {room.number}
                          </text>
                        )}
                      </g>
                    );
                  })}
                </svg>
              )}

              {/* === ROUTE OVERLAY === */}
              {floor && (
                <RouteOverlay
                  routeNodes={routeNodesOnFloor}
                  width={floor.bounds.width}
                  height={floor.bounds.height}
                  hasRoute={!!navState.route}
                />
              )}
            </div>
          ) : (
            <div className="empty-state" style={{ minHeight: compact ? 200 : 400 }}>
              <span className="empty-icon">🗺️</span>
              <h3>{building?.shortName || 'Building'}</h3>
              <p>{floor ? `${floor.label} floor plan` : 'Select a floor to view'}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
