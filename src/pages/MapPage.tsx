import { useState } from 'react';
import { useAppGraph } from '../hooks/useAppGraph';
import { useNavigation } from '../context/NavigationContext';
import { MapViewer } from '../components/map/MapViewer';
import { CampusMap } from '../components/map/CampusMap';

export function MapPage() {
  const graph = useAppGraph();
  const { state: navState } = useNavigation();
  const [view, setView] = useState<'campus' | 'floor'>('campus');

  return (
    <div className="page">
      {/* Toggle between campus and floor plan view */}
      <div className="map-view-toggle">
        <button
          className={`map-toggle-btn ${view === 'campus' ? 'active' : ''}`}
          onClick={() => setView('campus')}
        >
          🏛️ Campus
        </button>
        <button
          className={`map-toggle-btn ${view === 'floor' ? 'active' : ''}`}
          onClick={() => setView('floor')}
        >
          📐 Floor Plan
        </button>
      </div>

      {view === 'campus' ? (
        <div className="page-scroll">
          <CampusMap
            route={navState.route}
            startBuildingId={navState.startRoom?.buildingId}
            endBuildingId={navState.endRoom?.buildingId}
          />
          <div className="campus-legend">
            <h3>Capitol Hill Campus</h3>
            <p>Tap "Floor Plan" above to explore individual building layouts. Dashed lines show underground tunnel connections between buildings.</p>
            <div className="campus-legend-items">
              <div className="campus-legend-item">
                <span className="legend-dot" style={{ background: '#f1f5f9', border: '1.5px solid #d1d5db' }}></span>
                Building
              </div>
              <div className="campus-legend-item">
                <span className="legend-dot" style={{ background: '#fef9c3', border: '1.5px solid #eab308' }}></span>
                Capitol
              </div>
              <div className="campus-legend-item">
                <span className="legend-line"></span>
                Tunnel
              </div>
              {navState.route && (
                <div className="campus-legend-item">
                  <span className="legend-line" style={{ borderColor: '#3b82f6', borderStyle: 'dashed' }}></span>
                  Your Route
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <MapViewer graph={graph} />
      )}
    </div>
  );
}
