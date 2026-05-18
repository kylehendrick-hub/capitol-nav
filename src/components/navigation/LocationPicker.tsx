import { useState } from 'react';
import { useGeoLocation } from '../../hooks/useGeoLocation';
import { useNavigation } from '../../context/NavigationContext';
import { useMap } from '../../context/MapContext';
import { ENTRANCES } from '../../data/entrances';
import { ROOMS } from '../../data/rooms';
import { BUILDING_MAP, BUILDINGS } from '../../data/buildings';
import { BuildingId } from '../../types';

interface LocationPickerProps {
  onLocationSet: () => void;
  onClose: () => void;
}

export function LocationPicker({ onLocationSet, onClose }: LocationPickerProps) {
  const geo = useGeoLocation();
  const { dispatch: navDispatch } = useNavigation();
  const { dispatch: mapDispatch } = useMap();
  const [selectedBuilding, setSelectedBuilding] = useState<BuildingId | null>(null);

  const handleDetectLocation = () => {
    geo.detect();
  };

  const handleSelectBuilding = (buildingId: BuildingId) => {
    setSelectedBuilding(buildingId);
  };

  const handleSelectEntrance = (entranceId: string) => {
    const entrance = ENTRANCES.find(e => e.id === entranceId);
    if (!entrance) return;

    // Find or create a room for this entrance
    const entranceRoom = ROOMS.find(
      r => r.buildingId === entrance.buildingId && r.type === 'entrance'
    ) || ROOMS.find(
      r => r.buildingId === entrance.buildingId && r.position.floorId === entrance.floorId
    );

    if (entranceRoom) {
      navDispatch({ type: 'SET_START', room: entranceRoom });
      mapDispatch({
        type: 'SET_BUILDING',
        buildingId: entrance.buildingId,
        floorId: entrance.floorId,
      });
      onLocationSet();
    }
  };

  const activeBuilding = selectedBuilding || geo.buildingId;
  const buildingEntrances = activeBuilding
    ? ENTRANCES.filter(e => e.buildingId === activeBuilding)
    : [];
  const building = activeBuilding ? BUILDING_MAP.get(activeBuilding) : null;

  return (
    <div className="search-modal">
      <div className="search-modal-header">
        <button className="back-btn" onClick={onClose}>←</button>
        <span style={{ fontSize: 16, fontWeight: 600 }}>Where are you right now?</span>
      </div>
      <div className="page-scroll">
        {/* GPS detect button */}
        <div style={{ padding: 16 }}>
          <button className="gps-detect-btn" onClick={handleDetectLocation} disabled={geo.loading}>
            <span>{geo.loading ? '📡 Detecting...' : '📍 Use My Location'}</span>
          </button>

          {geo.error && (
            <div className="gps-error">{geo.error}</div>
          )}

          {geo.buildingId && !geo.error && (
            <div className="gps-result">
              <span className="gps-result-icon">✓</span>
              You're near <strong>{geo.buildingName}</strong>
              {geo.distance > 0 && <span className="gps-result-dist"> (~{geo.distance} ft away)</span>}
            </div>
          )}
        </div>

        {/* Or pick a building */}
        <div className="location-section-title">Or select your building</div>
        <div className="building-pick-grid">
          {BUILDINGS.filter(b => b.chamber === 'house' || b.chamber === 'senate' || b.id === BuildingId.CAPITOL).map(b => (
            <button
              key={b.id}
              className={`building-pick-item ${activeBuilding === b.id ? 'active' : ''}`}
              onClick={() => handleSelectBuilding(b.id)}
            >
              <span className="building-pick-name">{b.shortName}</span>
              <span className="building-pick-abbr">{b.abbreviation}</span>
            </button>
          ))}
        </div>

        {/* Entrances for selected building */}
        {activeBuilding && buildingEntrances.length > 0 && (
          <>
            <div className="location-section-title">
              Which entrance did you come in?
              {building && <span style={{ fontWeight: 400 }}> — {building.shortName}</span>}
            </div>
            <div className="entrance-list">
              {buildingEntrances.map(e => (
                <button
                  key={e.id}
                  className="entrance-item"
                  onClick={() => handleSelectEntrance(e.id)}
                >
                  <div className="entrance-icon">{e.isMain ? '🚪' : '🏛️'}</div>
                  <div className="entrance-info">
                    <div className="entrance-name">{e.name}</div>
                    <div className="entrance-desc">{e.description}</div>
                    <div className="entrance-meta">
                      {e.facing}
                      {e.securityCheckpoint && <span className="entrance-security">🛡️ Security</span>}
                      {e.isMain && <span className="entrance-main">Main entrance</span>}
                    </div>
                  </div>
                  <span className="entrance-arrow">→</span>
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
