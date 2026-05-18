import { Route } from '../../types';
import { formatDuration } from '../../engine/route-builder';
import { BUILDING_MAP } from '../../data/buildings';

interface DirectionsListProps {
  route: Route;
  activeStepIndex: number;
  onStepClick: (index: number) => void;
}

export function DirectionsList({ route, activeStepIndex, onStepClick }: DirectionsListProps) {
  const minutes = Math.ceil(route.totalDuration / 60);
  const feet = Math.round(route.totalDistance * 3.281);
  const displayFeet = feet < 500 ? `${Math.round(feet / 10) * 10}` : `${Math.round(feet / 100) * 100}`;

  return (
    <div className="directions-wrapper">
      {/* Summary */}
      <div className="route-summary">
        <div className="route-stat">
          <div className="stat-value">{minutes}</div>
          <div className="stat-label">min walk</div>
        </div>
        <div className="route-stat">
          <div className="stat-value">{displayFeet}</div>
          <div className="stat-label">feet</div>
        </div>
        <div className="route-stat">
          <div className="stat-value">{route.buildings.length}</div>
          <div className="stat-label">{route.buildings.length === 1 ? 'building' : 'buildings'}</div>
        </div>
      </div>

      {/* Badges */}
      <div style={{ display: 'flex', gap: 8, padding: '8px 16px', flexWrap: 'wrap' }}>
        {route.useTunnel && <span className="route-badge badge-tunnel">🚇 Uses tunnel</span>}
        {route.useSubway && <span className="route-badge badge-subway">🚃 Uses subway</span>}
        {route.accessible && <span className="route-badge badge-accessible">♿ Accessible</span>}
        {route.buildings.map(bId => {
          const b = BUILDING_MAP.get(bId);
          return b ? <span key={bId} className="route-badge" style={{ background: '#edf2f7' }}>{b.abbreviation}</span> : null;
        })}
      </div>

      {/* Steps */}
      <div className="page-scroll">
        <ul className="directions-list">
          {route.steps.map((step, i) => (
            <li
              key={i}
              className={`direction-step ${i === activeStepIndex ? 'active' : ''}`}
              onClick={() => onStepClick(i)}
            >
              <div className="step-icon">{step.icon}</div>
              <div className="step-text">
                <div className="step-instruction">{step.instruction}</div>
                {step.duration > 0 && (
                  <div className="step-meta">
                    {formatDuration(step.duration)}
                    {step.buildingId && ` · ${BUILDING_MAP.get(step.buildingId)?.abbreviation || ''}`}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
