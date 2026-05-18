import { useNavigation } from '../context/NavigationContext';
import { useMap } from '../context/MapContext';
import { useAppGraph } from '../hooks/useAppGraph';
import { usePathfinding } from '../hooks/usePathfinding';
import { NavigateForm } from '../components/navigation/NavigateForm';
import { CampusMap } from '../components/map/CampusMap';
import { BUILDING_MAP } from '../data/buildings';
import { formatDuration } from '../engine/route-builder';

interface NavigatePageProps {
  onNavigateTo: (tab: string) => void;
}

export function NavigatePage({ onNavigateTo }: NavigatePageProps) {
  const { state, dispatch } = useNavigation();
  const { dispatch: mapDispatch } = useMap();
  const graph = useAppGraph();
  const { computeRoute } = usePathfinding(graph);

  const handleRouteRequest = () => {
    if (!state.startRoom || !state.endRoom) return;
    const route = computeRoute(state.startRoom, state.endRoom, {
      accessible: state.options.accessible,
      avoidOutdoor: state.options.preferIndoor,
    });
    if (route) {
      dispatch({ type: 'SET_ROUTE', route });
    } else {
      alert('No route found. Try different options.');
    }
  };

  const handleStepClick = (index: number) => {
    dispatch({ type: 'SET_STEP', index });
    const step = state.route?.steps[index];
    if (step) {
      mapDispatch({ type: 'SET_BUILDING', buildingId: step.buildingId, floorId: step.floorId });
      onNavigateTo('map');
    }
  };

  const route = state.route;
  const minutes = route ? Math.ceil(route.totalDuration / 60) : 0;
  const feet = route ? Math.round(route.totalDistance * 3.281) : 0;
  const displayFeet = feet < 500 ? `${Math.round(feet / 10) * 10}` : `${Math.round(feet / 100) * 100}`;
  const activeStep = route?.steps[state.activeStepIndex];

  return (
    <div className="page">
      <div className="page-scroll">
        <NavigateForm onRouteRequested={handleRouteRequest} />

        {route && (
          <>
            {/* Route summary bar */}
            <div className="route-summary-bar">
              <div className="route-summary-time">{minutes} min</div>
              <div className="route-summary-detail">
                {displayFeet} ft · {route.buildings.length} {route.buildings.length === 1 ? 'building' : 'buildings'}
                {route.useTunnel && ' · tunnel'}
                {route.useSubway && ' · subway'}
              </div>
            </div>

            {/* Campus overview map — shows all buildings and the path */}
            {route.buildings.length > 1 && (
              <CampusMap
                route={route}
                startBuildingId={state.startRoom?.buildingId}
                endBuildingId={state.endRoom?.buildingId}
                activeStepBuildingId={activeStep?.buildingId}
              />
            )}

            {/* Step-by-step direction cards */}
            <div className="step-cards">
              {route.steps.map((step, i) => {
                const isActive = i === state.activeStepIndex;
                const building = BUILDING_MAP.get(step.buildingId);
                const prevStep = i > 0 ? route.steps[i - 1] : null;
                const buildingChanged = prevStep && prevStep.buildingId !== step.buildingId;

                return (
                  <div key={i}>
                    {/* Building transition header */}
                    {buildingChanged && (
                      <div className="step-building-change">
                        <span className="step-building-change-icon">🏛️</span>
                        Now entering: <strong>{building?.shortName}</strong>
                      </div>
                    )}

                    <div
                      className={`step-card ${isActive ? 'active' : ''}`}
                      onClick={() => handleStepClick(i)}
                    >
                      <div className="step-card-number">{i + 1}</div>
                      <div className="step-card-content">
                        <div className="step-card-icon">{step.icon}</div>
                        <div className="step-card-text">
                          <div className="step-card-instruction">{step.instruction}</div>
                          <div className="step-card-meta">
                            {building?.abbreviation}
                            {step.duration > 0 && ` · ${formatDuration(step.duration)}`}
                          </div>
                        </div>
                      </div>
                      <div className="step-card-arrow">›</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Clear route button */}
            <div style={{ padding: 16, textAlign: 'center' }}>
              <button
                className="clear-route-btn"
                onClick={() => dispatch({ type: 'CLEAR' })}
              >
                Clear Directions
              </button>
            </div>
          </>
        )}

        {!route && !state.endRoom && (
          <div className="empty-state" style={{ paddingTop: 40 }}>
            <span className="empty-icon">🧭</span>
            <h3>Get Directions</h3>
            <p>Search for who you're visiting, then tap "Get Directions"</p>
          </div>
        )}
      </div>
    </div>
  );
}
