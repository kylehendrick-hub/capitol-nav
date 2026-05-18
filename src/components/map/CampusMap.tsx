import { BuildingId, Route } from '../../types';
import { BUILDING_MAP } from '../../data/buildings';

// Capitol Hill campus layout — buildings positioned roughly to real geography
// Y-axis: Constitution Ave at top, Independence Ave at bottom
// X-axis: West (left) to East (right)
const CAMPUS_POSITIONS: Record<string, { x: number; y: number; w: number; h: number; label: string; abbr: string }> = {
  [BuildingId.RAYBURN]:        { x: 40,  y: 300, w: 120, h: 70, label: 'Rayburn', abbr: 'RHOB' },
  [BuildingId.LONGWORTH]:      { x: 190, y: 300, w: 100, h: 60, label: 'Longworth', abbr: 'LHOB' },
  [BuildingId.CANNON]:         { x: 320, y: 300, w: 90,  h: 60, label: 'Cannon', abbr: 'CHOB' },
  [BuildingId.CAPITOL]:        { x: 220, y: 160, w: 140, h: 90, label: 'U.S. Capitol', abbr: 'CAP' },
  [BuildingId.VISITOR_CENTER]: { x: 380, y: 180, w: 80,  h: 50, label: 'Visitor Center', abbr: 'CVC' },
  [BuildingId.RUSSELL]:        { x: 40,  y: 50,  w: 100, h: 60, label: 'Russell', abbr: 'RSOB' },
  [BuildingId.DIRKSEN]:        { x: 170, y: 50,  w: 100, h: 60, label: 'Dirksen', abbr: 'DSOB' },
  [BuildingId.HART]:           { x: 300, y: 50,  w: 90,  h: 60, label: 'Hart', abbr: 'HSOB' },
  [BuildingId.LOC_JEFFERSON]:  { x: 420, y: 290, w: 80,  h: 60, label: 'Jefferson', abbr: 'LOC' },
  [BuildingId.LOC_ADAMS]:      { x: 420, y: 360, w: 70,  h: 40, label: 'Adams', abbr: 'LOC' },
  [BuildingId.LOC_MADISON]:    { x: 330, y: 390, w: 80,  h: 40, label: 'Madison', abbr: 'LOC' },
};

// Tunnel paths between buildings (simplified for the campus view)
const TUNNEL_PATHS: { from: string; to: string }[] = [
  { from: BuildingId.RAYBURN, to: BuildingId.CAPITOL },
  { from: BuildingId.LONGWORTH, to: BuildingId.CAPITOL },
  { from: BuildingId.CANNON, to: BuildingId.CAPITOL },
  { from: BuildingId.CAPITOL, to: BuildingId.RUSSELL },
  { from: BuildingId.CAPITOL, to: BuildingId.DIRKSEN },
  { from: BuildingId.DIRKSEN, to: BuildingId.HART },
  { from: BuildingId.CAPITOL, to: BuildingId.VISITOR_CENTER },
  { from: BuildingId.CANNON, to: BuildingId.LOC_JEFFERSON },
];

function getCenter(bid: string) {
  const p = CAMPUS_POSITIONS[bid];
  if (!p) return { x: 250, y: 220 };
  return { x: p.x + p.w / 2, y: p.y + p.h / 2 };
}

interface CampusMapProps {
  route?: Route | null;
  startBuildingId?: BuildingId;
  endBuildingId?: BuildingId;
  activeStepBuildingId?: BuildingId;
}

export function CampusMap({ route, startBuildingId, endBuildingId, activeStepBuildingId }: CampusMapProps) {
  const routeBuildings = route?.buildings || [];

  return (
    <div className="campus-map-wrapper">
      <svg viewBox="0 0 530 450" className="campus-map-svg">
        {/* Street labels */}
        <text x="265" y="22" textAnchor="middle" fontSize="9" fill="#9ca3af" fontWeight="700" fontFamily="system-ui" letterSpacing="2">CONSTITUTION AVE</text>
        <text x="265" y="445" textAnchor="middle" fontSize="9" fill="#9ca3af" fontWeight="700" fontFamily="system-ui" letterSpacing="2">INDEPENDENCE AVE</text>
        <text x="12" y="220" textAnchor="middle" fontSize="8" fill="#d1d5db" fontWeight="600" fontFamily="system-ui" transform="rotate(-90, 12, 220)" letterSpacing="1">1ST ST</text>
        <text x="518" y="220" textAnchor="middle" fontSize="8" fill="#d1d5db" fontWeight="600" fontFamily="system-ui" transform="rotate(90, 518, 220)" letterSpacing="1">2ND ST</text>

        {/* Street lines */}
        <line x1="0" y1="30" x2="530" y2="30" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="4 3" />
        <line x1="0" y1="430" x2="530" y2="430" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="4 3" />

        {/* Tunnel connections (gray dashed) */}
        {TUNNEL_PATHS.map((t, i) => {
          const from = getCenter(t.from);
          const to = getCenter(t.to);
          return (
            <line key={`tunnel-${i}`}
              x1={from.x} y1={from.y} x2={to.x} y2={to.y}
              stroke="#d1d5db" strokeWidth="1.5" strokeDasharray="3 3"
            />
          );
        })}

        {/* Route path between buildings (blue line) */}
        {routeBuildings.length > 1 && (() => {
          const points = routeBuildings.map(bid => getCenter(bid));
          return (
            <>
              <polyline
                points={points.map(p => `${p.x},${p.y}`).join(' ')}
                fill="none" stroke="#3b82f6" strokeWidth="4"
                strokeLinecap="round" strokeLinejoin="round"
                opacity="0.3"
              />
              <polyline
                points={points.map(p => `${p.x},${p.y}`).join(' ')}
                fill="none" stroke="#3b82f6" strokeWidth="2.5"
                strokeLinecap="round" strokeLinejoin="round"
                strokeDasharray="6 4"
                className="route-path-flow"
              />
            </>
          );
        })()}

        {/* Buildings */}
        {Object.entries(CAMPUS_POSITIONS).map(([bid, pos]) => {
          const isOnRoute = routeBuildings.includes(bid as BuildingId);
          const isStart = bid === startBuildingId;
          const isEnd = bid === endBuildingId;
          const isActive = bid === activeStepBuildingId;
          const isCapitol = bid === BuildingId.CAPITOL;

          let fillColor = '#f1f5f9';
          let strokeColor = '#d1d5db';
          let textColor = '#6b7280';

          if (isActive) { fillColor = '#dbeafe'; strokeColor = '#3b82f6'; textColor = '#1e40af'; }
          else if (isStart) { fillColor = '#dcfce7'; strokeColor = '#22c55e'; textColor = '#166534'; }
          else if (isEnd) { fillColor = '#fee2e2'; strokeColor = '#ef4444'; textColor = '#991b1b'; }
          else if (isOnRoute) { fillColor = '#eff6ff'; strokeColor = '#93c5fd'; textColor = '#1e40af'; }
          else if (isCapitol) { fillColor = '#fef9c3'; strokeColor = '#eab308'; textColor = '#854d0e'; }

          return (
            <g key={bid}>
              <rect
                x={pos.x} y={pos.y} width={pos.w} height={pos.h}
                rx="6" fill={fillColor} stroke={strokeColor} strokeWidth={isActive ? 2.5 : 1.5}
              />
              <text
                x={pos.x + pos.w / 2} y={pos.y + pos.h / 2 - 2}
                textAnchor="middle" fontSize={isCapitol ? 10 : 9} fontWeight="700"
                fill={textColor} fontFamily="system-ui, sans-serif"
              >
                {pos.label}
              </text>
              <text
                x={pos.x + pos.w / 2} y={pos.y + pos.h / 2 + 10}
                textAnchor="middle" fontSize="7" fill={textColor} fontFamily="system-ui"
                opacity="0.7"
              >
                {pos.abbr}
              </text>

              {/* Start/end markers */}
              {isStart && (
                <circle cx={pos.x + pos.w / 2} cy={pos.y - 8} r="5" fill="#22c55e" stroke="white" strokeWidth="2" />
              )}
              {isEnd && (
                <g>
                  <path
                    d={`M${pos.x + pos.w / 2},${pos.y - 3} C${pos.x + pos.w / 2},${pos.y - 3} ${pos.x + pos.w / 2 - 6},${pos.y - 10} ${pos.x + pos.w / 2 - 6},${pos.y - 14} C${pos.x + pos.w / 2 - 6},${pos.y - 18} ${pos.x + pos.w / 2 - 3},${pos.y - 21} ${pos.x + pos.w / 2},${pos.y - 21} C${pos.x + pos.w / 2 + 3},${pos.y - 21} ${pos.x + pos.w / 2 + 6},${pos.y - 18} ${pos.x + pos.w / 2 + 6},${pos.y - 14} C${pos.x + pos.w / 2 + 6},${pos.y - 10} ${pos.x + pos.w / 2},${pos.y - 3} ${pos.x + pos.w / 2},${pos.y - 3}Z`}
                    fill="#ef4444"
                  />
                  <circle cx={pos.x + pos.w / 2} cy={pos.y - 14} r="2.5" fill="white" />
                </g>
              )}
            </g>
          );
        })}

        {/* Legend */}
        <g transform="translate(10, 420)">
          <line x1="0" y1="0" x2="12" y2="0" stroke="#d1d5db" strokeWidth="1.5" strokeDasharray="3 3" />
          <text x="16" y="3" fontSize="7" fill="#9ca3af" fontFamily="system-ui">tunnel</text>
        </g>
      </svg>
    </div>
  );
}
