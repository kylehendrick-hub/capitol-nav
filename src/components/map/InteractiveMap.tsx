import { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { BUILDINGS, BUILDING_MAP } from '../../data/buildings';
import { ROOMS } from '../../data/rooms';
import { OCCUPANTS } from '../../data/occupants';
import { ENTRANCES } from '../../data/entrances';
import { BuildingId, Room, Route } from '../../types';
import { Graph } from '../../engine/graph';

// Real-world approximate positions (lat/lng-like for CRS.Simple)
// Y increases upward, X increases rightward
const BUILDING_POSITIONS: Record<string, { bounds: [[number, number], [number, number]]; center: [number, number] }> = {
  [BuildingId.RAYBURN]:        { bounds: [[100, 50],  [170, 180]], center: [135, 115] },
  [BuildingId.LONGWORTH]:      { bounds: [[100, 200], [160, 310]], center: [130, 255] },
  [BuildingId.CANNON]:         { bounds: [[100, 330], [160, 420]], center: [130, 375] },
  [BuildingId.CAPITOL]:        { bounds: [[200, 200], [290, 380]], center: [245, 290] },
  [BuildingId.VISITOR_CENTER]: { bounds: [[195, 390], [240, 470]], center: [218, 430] },
  [BuildingId.RUSSELL]:        { bounds: [[320, 50],  [380, 160]], center: [350, 105] },
  [BuildingId.DIRKSEN]:        { bounds: [[320, 180], [380, 290]], center: [350, 235] },
  [BuildingId.HART]:           { bounds: [[320, 310], [385, 410]], center: [353, 360] },
  [BuildingId.LOC_JEFFERSON]:  { bounds: [[60, 420],  [130, 510]], center: [95, 465] },
  [BuildingId.LOC_ADAMS]:      { bounds: [[20, 420],  [60, 490]],  center: [40, 455] },
  [BuildingId.LOC_MADISON]:    { bounds: [[20, 330],  [58, 415]],  center: [39, 373] },
};

const TUNNEL_LINES: [BuildingId, BuildingId][] = [
  [BuildingId.RAYBURN, BuildingId.CAPITOL],
  [BuildingId.LONGWORTH, BuildingId.CAPITOL],
  [BuildingId.CANNON, BuildingId.CAPITOL],
  [BuildingId.CAPITOL, BuildingId.RUSSELL],
  [BuildingId.CAPITOL, BuildingId.DIRKSEN],
  [BuildingId.DIRKSEN, BuildingId.HART],
  [BuildingId.CAPITOL, BuildingId.VISITOR_CENTER],
  [BuildingId.CANNON, BuildingId.LOC_JEFFERSON],
  [BuildingId.LOC_JEFFERSON, BuildingId.LOC_ADAMS],
  [BuildingId.LOC_ADAMS, BuildingId.LOC_MADISON],
  [BuildingId.RUSSELL, BuildingId.DIRKSEN],
  [BuildingId.LONGWORTH, BuildingId.RAYBURN],
  [BuildingId.LONGWORTH, BuildingId.CANNON],
];

interface InteractiveMapProps {
  onRoomSelect?: (room: Room) => void;
  route?: Route | null;
  graph?: Graph;
  routeBuildings?: BuildingId[];
  startBuildingId?: BuildingId;
  endBuildingId?: BuildingId;
}

export function InteractiveMap({ onRoomSelect, route, graph, routeBuildings, startBuildingId, endBuildingId }: InteractiveMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const leafletMap = useRef<L.Map | null>(null);
  const [activeBuilding, setActiveBuilding] = useState<BuildingId | null>(null);
  const [activeFloor, setActiveFloor] = useState<string>('');
  const markersRef = useRef<L.LayerGroup | null>(null);
  const floorOverlayRef = useRef<L.ImageOverlay | null>(null);
  const buildingRectsRef = useRef<L.LayerGroup | null>(null);
  const routeLayerRef = useRef<L.LayerGroup | null>(null);
  const indoorRouteRef = useRef<L.LayerGroup | null>(null);
  const buildingLayersRef = useRef<Map<string, L.Rectangle>>(new Map());
  // Stable ref for onRoomSelect so room marker effect doesn't re-run when callback identity changes
  const onRoomSelectRef = useRef(onRoomSelect);
  onRoomSelectRef.current = onRoomSelect;
  // Flag to prevent map click from firing right after a building rect click
  const buildingClickedRef = useRef(false);

  // Initialize map
  useEffect(() => {
    if (!mapRef.current || leafletMap.current) return;

    const map = L.map(mapRef.current, {
      crs: L.CRS.Simple,
      minZoom: -1,
      maxZoom: 4,
      zoomControl: false,
      attributionControl: false,
    });

    map.setView([200, 260], 0);
    map.fitBounds([[0, 0], [420, 550]]);

    // Create custom panes with explicit z-index ordering so route lines render above buildings
    map.createPane('buildingPane').style.zIndex = '410';
    map.createPane('routePane').style.zIndex = '420';
    map.createPane('markerPane2').style.zIndex = '430';
    map.createPane('indoorRoutePane').style.zIndex = '440';

    // Add zoom control on the right
    L.control.zoom({ position: 'topright' }).addTo(map);

    // Street labels
    const streetStyle: L.PolylineOptions = { color: '#c7c7cc', weight: 1.5, dashArray: '8 4', opacity: 0.6 };
    L.polyline([[190, 0], [190, 550]], streetStyle).addTo(map);
    L.polyline([[310, 0], [310, 550]], streetStyle).addTo(map);

    L.marker([192, 275], {
      icon: L.divIcon({ className: 'street-label', html: 'INDEPENDENCE AVE', iconSize: [140, 14] })
    }).addTo(map);
    L.marker([308, 275], {
      icon: L.divIcon({ className: 'street-label', html: 'CONSTITUTION AVE', iconSize: [140, 14] })
    }).addTo(map);
    L.marker([200, 5], {
      icon: L.divIcon({ className: 'street-label street-label-v', html: '1ST ST', iconSize: [40, 14] })
    }).addTo(map);

    // Tunnel lines
    const tunnelGroup = L.layerGroup().addTo(map);
    TUNNEL_LINES.forEach(([a, b]) => {
      const ca = BUILDING_POSITIONS[a]?.center;
      const cb = BUILDING_POSITIONS[b]?.center;
      if (ca && cb) {
        L.polyline([ca, cb], { color: '#48bb78', weight: 2, dashArray: '6 4', opacity: 0.5 }).addTo(tunnelGroup);
      }
    });

    // Building rectangles (initial — colors updated by separate effect)
    const bldgGroup = L.layerGroup().addTo(map);
    buildingRectsRef.current = bldgGroup;

    BUILDINGS.forEach(b => {
      const pos = BUILDING_POSITIONS[b.id];
      if (!pos) return;

      const rect = L.rectangle(pos.bounds as L.LatLngBoundsExpression, {
        color: '#c7c7cc',
        weight: 1.5,
        fillColor: '#e8e8ed',
        fillOpacity: 0.85,
        className: 'building-rect',
        pane: 'buildingPane',
      }).addTo(bldgGroup);

      // Store ref for later color updates
      buildingLayersRef.current.set(b.id, rect);

      // Building label
      L.marker(pos.center as L.LatLngExpression, {
        icon: L.divIcon({
          className: 'building-label',
          html: `<div class="bl-name">${b.shortName}</div><div class="bl-abbr">${b.abbreviation}</div>`,
          iconSize: [100, 40],
          iconAnchor: [50, 20],
        }),
      }).addTo(bldgGroup);

      // Click to drill into building — set flag to block the map-level click handler
      rect.on('click', (e: L.LeafletMouseEvent) => {
        L.DomEvent.stopPropagation(e);
        buildingClickedRef.current = true;
        setActiveBuilding(b.id);
        const floor = b.floors.find(f => f.level === 1) || b.floors[0];
        if (floor) setActiveFloor(floor.id);
        map.fitBounds(pos.bounds as L.LatLngBoundsExpression, { padding: [20, 20], maxZoom: 2 });
        // Reset flag after current event loop so the map click handler (if it still fires) is blocked
        setTimeout(() => { buildingClickedRef.current = false; }, 0);
      });
    });

    // Route layer groups (populated by separate effects)
    routeLayerRef.current = L.layerGroup().addTo(map);
    // Markers layer (room dots) — added AFTER route so it renders on top
    markersRef.current = L.layerGroup().addTo(map);
    // Indoor route on top of everything
    indoorRouteRef.current = L.layerGroup().addTo(map);

    // Click on empty space to zoom back out
    map.on('click', (e: L.LeafletMouseEvent) => {
      // If a building rect was just clicked, ignore this event
      if (buildingClickedRef.current) return;

      if (map.getZoom() > 1) {
        // Check if clicked on a building rect
        let hitBuilding = false;
        for (const [_id, pos] of Object.entries(BUILDING_POSITIONS)) {
          const b = L.latLngBounds(pos.bounds[0] as L.LatLngTuple, pos.bounds[1] as L.LatLngTuple);
          if (b.contains(e.latlng)) { hitBuilding = true; break; }
        }
        if (!hitBuilding) {
          setActiveBuilding(null);
          setActiveFloor('');
          map.fitBounds([[0, 0], [420, 550]], { padding: [10, 10] });
        }
      }
    });

    leafletMap.current = map;

    return () => { map.remove(); leafletMap.current = null; };
  }, []); // Only init once

  // Update route line and building colors when route changes
  useEffect(() => {
    if (!leafletMap.current) return;

    // Clear old route line
    if (routeLayerRef.current) routeLayerRef.current.clearLayers();

    // Draw campus-level route line following the ACTUAL building sequence from nodeIds
    if (route && graph && routeLayerRef.current) {
      // Extract the ordered sequence of buildings visited (with deduplication of consecutive same-building)
      const buildingSequence: BuildingId[] = [];
      for (const nodeId of route.nodeIds) {
        const node = graph.getNode(nodeId);
        if (!node) continue;
        if (buildingSequence.length === 0 || buildingSequence[buildingSequence.length - 1] !== node.buildingId) {
          buildingSequence.push(node.buildingId);
        }
      }

      if (buildingSequence.length > 1) {
        const points = buildingSequence
          .map(id => BUILDING_POSITIONS[id]?.center)
          .filter(Boolean) as [number, number][];

        // Glow
        L.polyline(points, { color: '#007aff', weight: 8, opacity: 0.25, lineCap: 'round', lineJoin: 'round', pane: 'routePane' })
          .addTo(routeLayerRef.current);
        // Main line
        L.polyline(points, { color: '#007aff', weight: 4, opacity: 0.9, lineCap: 'round', lineJoin: 'round', pane: 'routePane' })
          .addTo(routeLayerRef.current);
      }
    }

    // Start/end markers using actual start/end building positions
    if (startBuildingId && routeLayerRef.current) {
      const startCenter = BUILDING_POSITIONS[startBuildingId]?.center;
      if (startCenter) {
        L.circleMarker(startCenter as L.LatLngExpression, { radius: 8, fillColor: '#34c759', fillOpacity: 1, color: '#fff', weight: 3, pane: 'routePane' })
          .addTo(routeLayerRef.current);
      }
    }
    if (endBuildingId && routeLayerRef.current) {
      const endCenter = BUILDING_POSITIONS[endBuildingId]?.center;
      if (endCenter) {
        L.circleMarker(endCenter as L.LatLngExpression, { radius: 8, fillColor: '#ff453a', fillOpacity: 1, color: '#fff', weight: 3, pane: 'routePane' })
          .addTo(routeLayerRef.current);
      }
    }

    // Update building rectangle colors
    buildingLayersRef.current.forEach((rect, id) => {
      const isOnRoute = routeBuildings?.includes(id as BuildingId);
      const isStart = id === startBuildingId;
      const isEnd = id === endBuildingId;

      let fillColor = '#e8e8ed';
      let borderColor = '#c7c7cc';
      if (isStart) { fillColor = '#dcfce7'; borderColor = '#34c759'; }
      else if (isEnd) { fillColor = '#fee2e2'; borderColor = '#ff3b30'; }
      else if (isOnRoute) { fillColor = '#dbeafe'; borderColor = '#007aff'; }

      rect.setStyle({ fillColor, color: borderColor, weight: (isStart || isEnd || isOnRoute) ? 2.5 : 1.5 });
    });

  }, [route, graph, routeBuildings, startBuildingId, endBuildingId]);

  // Load floor plan + room markers when active building/floor changes
  useEffect(() => {
    if (!leafletMap.current || !markersRef.current) return;
    const map = leafletMap.current;
    const markers = markersRef.current;
    markers.clearLayers();

    if (floorOverlayRef.current) {
      map.removeLayer(floorOverlayRef.current);
      floorOverlayRef.current = null;
    }

    if (!activeBuilding || !activeFloor) return;

    const building = BUILDING_MAP.get(activeBuilding);
    const floor = building?.floors.find(f => f.id === activeFloor);
    if (!building || !floor) return;

    const pos = BUILDING_POSITIONS[activeBuilding];
    if (!pos) return;

    // Load floor plan SVG as image overlay
    const overlay = L.imageOverlay(floor.svgPath, pos.bounds as L.LatLngBoundsExpression, {
      opacity: 0.7,
      interactive: false,
    }).addTo(map);
    floorOverlayRef.current = overlay;

    // Add room markers
    const roomsOnFloor = ROOMS.filter(
      r => r.buildingId === activeBuilding && r.position.floorId === activeFloor
    );

    const bWidth = pos.bounds[1][1] - pos.bounds[0][1];
    const bHeight = pos.bounds[1][0] - pos.bounds[0][0];

    roomsOnFloor.forEach(room => {
      // Skip empty unoccupied offices
      if (!room.label && room.occupants.length === 0 && room.type === 'office') return;

      // Convert SVG coordinates to map coordinates
      const svgBounds = floor.bounds;
      const latRatio = room.position.y / svgBounds.height;
      const lngRatio = room.position.x / svgBounds.width;
      const lat = pos.bounds[1][0] - latRatio * bHeight; // flip Y
      const lng = pos.bounds[0][1] + lngRatio * bWidth;

      const occ = room.occupants.length ? OCCUPANTS.find(o => o.id === room.occupants[0]) : null;
      const isLandmark = room.type === 'other' || room.type === 'committee' || room.type === 'hearing';
      const hasOccupant = room.occupants.length > 0;

      let dotColor = '#6b7280';
      let dotSize = 6;
      if (isLandmark) { dotColor = '#a78bfa'; dotSize = 8; }
      else if (hasOccupant) { dotColor = '#3b82f6'; dotSize = 7; }
      else if (room.type === 'cafeteria') { dotColor = '#f59e0b'; dotSize = 8; }
      else if (room.type === 'restroom') { dotColor = '#6b7280'; dotSize = 6; }
      else if (room.type === 'elevator') { dotColor = '#6b7280'; dotSize = 6; }
      else if (room.type === 'entrance') { dotColor = '#10b981'; dotSize = 8; }
      else if (room.type === 'tunnel-access') { dotColor = '#f59e0b'; dotSize = 7; }

      const marker = L.circleMarker([lat, lng], {
        radius: dotSize,
        fillColor: dotColor,
        fillOpacity: 0.9,
        color: 'rgba(255,255,255,0.4)',
        weight: 1,
        className: 'room-marker',
        pane: 'markerPane2',
      }).addTo(markers);

      // Room number label (visible at higher zoom)
      if (hasOccupant || isLandmark || room.type === 'cafeteria' || room.type === 'entrance') {
        L.marker([lat, lng], {
          icon: L.divIcon({
            className: 'room-label',
            html: room.number,
            iconSize: [60, 14],
            iconAnchor: [30, -8],
          }),
        }).addTo(markers);
      }

      // Popup with room info
      let popupHtml = `<div class="room-popup-l">`;
      popupHtml += `<div class="rpl-num">${room.number}</div>`;
      popupHtml += `<div class="rpl-bldg">${building.shortName} · ${floor.label}</div>`;
      if (room.label) popupHtml += `<div class="rpl-label">${room.label}</div>`;
      if (occ) {
        popupHtml += `<div class="rpl-occ">${occ.name}</div>`;
        popupHtml += `<div class="rpl-detail">${occ.title} · ${occ.party}-${occ.state}</div>`;
      }
      if (!occ && !room.label && room.type !== 'office') {
        popupHtml += `<div class="rpl-type">${room.type}</div>`;
      }
      popupHtml += `</div>`;

      marker.bindPopup(popupHtml, { className: 'room-popup-wrap', maxWidth: 250 });

      marker.on('click', () => {
        if (onRoomSelectRef.current) onRoomSelectRef.current(room);
      });
    });

    // Add entrance markers
    ENTRANCES.filter(e => e.buildingId === activeBuilding && e.floorId === activeFloor).forEach(ent => {
      const latRatio = ent.y / floor.bounds.height;
      const lngRatio = ent.x / floor.bounds.width;
      const lat = pos.bounds[1][0] - latRatio * bHeight;
      const lng = pos.bounds[0][1] + lngRatio * bWidth;

      L.marker([lat, lng], {
        icon: L.divIcon({
          className: 'entrance-marker',
          html: `<span>${ent.name.replace(' Entrance', '')}</span>`,
          iconSize: [120, 20],
          iconAnchor: [60, 10],
        }),
      }).addTo(markers);
    });

  }, [activeBuilding, activeFloor]); // removed onRoomSelect — using stable ref instead

  // Draw detailed indoor route through hallway nodes on the active floor
  useEffect(() => {
    if (!leafletMap.current || !indoorRouteRef.current) return;
    indoorRouteRef.current.clearLayers();

    if (!route || !graph || !activeBuilding || !activeFloor) return;

    const pos = BUILDING_POSITIONS[activeBuilding];
    const bldg = BUILDING_MAP.get(activeBuilding);
    const floor = bldg?.floors.find(f => f.id === activeFloor);
    if (!pos || !floor) return;

    const bWidth = pos.bounds[1][1] - pos.bounds[0][1];
    const bHeight = pos.bounds[1][0] - pos.bounds[0][0];
    const layer = indoorRouteRef.current;

    const toMap = (node: { x: number; y: number }): [number, number] => {
      return [
        pos.bounds[1][0] - (node.y / floor.bounds.height) * bHeight,
        pos.bounds[0][1] + (node.x / floor.bounds.width) * bWidth,
      ];
    };

    // Separate nodes into current-floor segments and other-floor segments
    const segments: { points: [number, number][]; onFloor: boolean }[] = [];
    let currentSeg: [number, number][] = [];
    let currentOnFloor = false;

    for (let i = 0; i < route.nodeIds.length; i++) {
      const node = graph.getNode(route.nodeIds[i]);
      if (!node) continue;
      // Only draw nodes in this building
      if (node.buildingId !== activeBuilding) {
        if (currentSeg.length > 0) {
          segments.push({ points: [...currentSeg], onFloor: currentOnFloor });
          currentSeg = [];
        }
        continue;
      }

      const onFloor = node.floorId === activeFloor;
      if (currentSeg.length > 0 && onFloor !== currentOnFloor) {
        // Transition: add overlap point for continuity
        currentSeg.push(toMap(node));
        segments.push({ points: [...currentSeg], onFloor: currentOnFloor });
        currentSeg = [toMap(node)];
      } else {
        currentSeg.push(toMap(node));
      }
      currentOnFloor = onFloor;
    }
    if (currentSeg.length > 0) {
      segments.push({ points: currentSeg, onFloor: currentOnFloor });
    }

    // Draw segments
    for (const seg of segments) {
      if (seg.points.length < 2) continue;

      if (seg.onFloor) {
        // ===== ACTIVE FLOOR: solid blue with glow (like Apple Maps) =====
        const p = 'indoorRoutePane';
        // Shadow/glow
        L.polyline(seg.points, {
          color: '#000', weight: 10, opacity: 0.12,
          lineCap: 'round', lineJoin: 'round', pane: p,
        }).addTo(layer);
        // Blue glow
        L.polyline(seg.points, {
          color: '#007aff', weight: 9, opacity: 0.2,
          lineCap: 'round', lineJoin: 'round', pane: p,
        }).addTo(layer);
        // White outline (creates the bordered look)
        L.polyline(seg.points, {
          color: '#fff', weight: 7, opacity: 0.9,
          lineCap: 'round', lineJoin: 'round', pane: p,
        }).addTo(layer);
        // Main blue line
        L.polyline(seg.points, {
          color: '#007aff', weight: 5, opacity: 1,
          lineCap: 'round', lineJoin: 'round', pane: p,
        }).addTo(layer);

        // Direction arrows along the path
        for (let i = 1; i < seg.points.length; i++) {
          const [y1, x1] = seg.points[i - 1];
          const [y2, x2] = seg.points[i];
          const midLat = (y1 + y2) / 2;
          const midLng = (x1 + x2) / 2;
          const angle = Math.atan2(x2 - x1, y2 - y1) * (180 / Math.PI);

          L.marker([midLat, midLng], {
            icon: L.divIcon({
              className: 'route-arrow',
              html: `<svg width="14" height="14" viewBox="0 0 14 14" style="transform:rotate(${-angle}deg)"><path d="M3 10L7 4L11 10" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
              iconSize: [14, 14],
              iconAnchor: [7, 7],
            }),
            interactive: false,
            pane: 'indoorRoutePane',
          }).addTo(layer);
        }
      } else {
        // ===== OTHER FLOOR: gray dashed line (MazeMap pattern) =====
        L.polyline(seg.points, {
          color: '#8e8e93', weight: 4, opacity: 0.4,
          lineCap: 'round', lineJoin: 'round',
          dashArray: '8 8', pane: 'indoorRoutePane',
        }).addTo(layer);
      }
    }

    // Start/end markers
    const routeStart = graph.getNode(route.nodeIds[0]);
    const routeEnd = graph.getNode(route.nodeIds[route.nodeIds.length - 1]);

    if (routeStart && routeStart.buildingId === activeBuilding && routeStart.floorId === activeFloor) {
      const c = toMap(routeStart);
      // Blue dot with white ring (Apple Maps "you are here")
      L.circleMarker(c, { radius: 12, fillColor: '#007aff', fillOpacity: 0.15, color: '#007aff', weight: 2, className: 'start-pulse', pane: 'indoorRoutePane' }).addTo(layer);
      L.circleMarker(c, { radius: 7, fillColor: '#fff', fillOpacity: 1, color: '#fff', weight: 0, pane: 'indoorRoutePane' }).addTo(layer);
      L.circleMarker(c, { radius: 5, fillColor: '#007aff', fillOpacity: 1, color: '#007aff', weight: 0, pane: 'indoorRoutePane' }).addTo(layer);
    }

    if (routeEnd && routeEnd.buildingId === activeBuilding && routeEnd.floorId === activeFloor) {
      const c = toMap(routeEnd);
      // Red destination marker
      L.circleMarker(c, { radius: 12, fillColor: '#ff453a', fillOpacity: 0.15, color: '#ff453a', weight: 2, pane: 'indoorRoutePane' }).addTo(layer);
      L.circleMarker(c, { radius: 7, fillColor: '#fff', fillOpacity: 1, color: '#fff', weight: 0, pane: 'indoorRoutePane' }).addTo(layer);
      L.circleMarker(c, { radius: 5, fillColor: '#ff453a', fillOpacity: 1, color: '#ff453a', weight: 0, pane: 'indoorRoutePane' }).addTo(layer);
    }

    // Floor transition labels at entry/exit points
    const nodesInBuilding = route.nodeIds
      .map(id => graph.getNode(id))
      .filter(n => n && n.buildingId === activeBuilding);

    for (let i = 1; i < nodesInBuilding.length; i++) {
      const prev = nodesInBuilding[i - 1]!;
      const curr = nodesInBuilding[i]!;
      if (prev.floorId !== curr.floorId) {
        const transNode = prev.floorId === activeFloor ? prev : curr;
        const targetFloor = prev.floorId === activeFloor ? curr.floorId : prev.floorId;
        const floorLabel = bldg?.floors.find(f => f.id === targetFloor)?.label || targetFloor;
        const isElevator = transNode.type === 'elevator';
        const icon = isElevator ? '🛗' : '🪜';
        const label = prev.floorId === activeFloor ? `${icon} Go to ${floorLabel}` : `${icon} From ${floorLabel}`;

        L.marker(toMap(transNode), {
          icon: L.divIcon({
            className: 'floor-transition-marker',
            html: `<span>${label}</span>`,
            iconSize: [140, 24],
            iconAnchor: [70, -8],
          }),
          pane: 'indoorRoutePane',
        }).addTo(layer);
      }
    }

  }, [route, graph, activeBuilding, activeFloor]);

  // Floor selector
  const building = activeBuilding ? BUILDING_MAP.get(activeBuilding) : null;

  return (
    <div className="imap-wrap">
      <div ref={mapRef} className="imap" />

      {/* Floor selector when drilled into a building */}
      {building && (
        <div className="floor-picker">
          {building.floors.map(f => (
            <button
              key={f.id}
              className={`fp-btn ${f.id === activeFloor ? 'fp-active' : ''}`}
              onClick={() => setActiveFloor(f.id)}
            >
              {f.level === -1 ? 'B' : f.level === -2 ? 'LL' : f.level === 0 ? 'G' : `${f.level}`}
            </button>
          ))}
        </div>
      )}

      {/* Building name badge */}
      {building && (
        <div className="bldg-badge">
          {building.shortName} — {building.floors.find(f => f.id === activeFloor)?.label || ''}
          <button className="bldg-badge-close" onClick={() => {
            setActiveBuilding(null);
            setActiveFloor('');
            leafletMap.current?.fitBounds([[0, 0], [420, 550]], { padding: [10, 10] });
          }}>Back to campus</button>
        </div>
      )}

      {/* Legend */}
      {!building && (
        <div className="map-legend">
          <span className="ml-item"><span className="ml-dot" style={{ background: '#3b82f6' }} /> Office</span>
          <span className="ml-item"><span className="ml-dot" style={{ background: '#a78bfa' }} /> Committee</span>
          <span className="ml-item"><span className="ml-dot" style={{ background: '#10b981' }} /> Entrance</span>
          <span className="ml-item"><span className="ml-dot" style={{ background: '#f59e0b' }} /> Tunnel</span>
        </div>
      )}
    </div>
  );
}
