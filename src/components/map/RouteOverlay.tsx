import { GraphNode } from '../../types';

interface RouteOverlayProps {
  routeNodes: (GraphNode | undefined)[];
  width: number;
  height: number;
  hasRoute: boolean;
}

export function RouteOverlay({ routeNodes, width, height, hasRoute }: RouteOverlayProps) {
  if (routeNodes.length < 2 || !hasRoute) return null;

  const points = routeNodes.map(n => `${n!.x},${n!.y}`).join(' ');
  const startNode = routeNodes[0]!;
  const endNode = routeNodes[routeNodes.length - 1]!;

  return (
    <svg
      className="route-overlay-svg"
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
      viewBox={`0 0 ${width} ${height}`}
    >
      <defs>
        <filter id="route-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
          <feColorMatrix in="blur" type="matrix" values="0 0 0 0 0.19  0 0 0 0 0.51  0 0 0 0 0.81  0 0 0 0.5 0" result="glow" />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="route-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#34d399" />
          <stop offset="30%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
        <filter id="pin-shadow" x="-50%" y="-30%" width="200%" height="200%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000" floodOpacity="0.35" />
        </filter>
        <radialGradient id="pulse-gradient">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Glow */}
      <polyline className="route-path-glow" points={points} fill="none" stroke="#3b82f6" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" opacity="0.2" />

      {/* Main path */}
      <polyline className="route-path-main" points={points} fill="none" stroke="url(#route-gradient)" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" filter="url(#route-glow)" />

      {/* White center */}
      <polyline points={points} fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.3" />

      {/* Animated flow */}
      <polyline className="route-path-flow" points={points} fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="8 20" opacity="0.6" />

      {/* Start marker */}
      <g>
        <circle className="route-pulse" cx={startNode.x} cy={startNode.y} r="20" fill="url(#pulse-gradient)" />
        <circle cx={startNode.x} cy={startNode.y} r="11" fill="white" filter="url(#pin-shadow)" />
        <circle cx={startNode.x} cy={startNode.y} r="8" fill="#3b82f6" />
        <circle cx={startNode.x - 2} cy={startNode.y - 2} r="3" fill="white" opacity="0.4" />
        <rect x={startNode.x - 28} y={startNode.y - 32} width="56" height="18" rx="9" fill="#3b82f6" filter="url(#pin-shadow)" />
        <text x={startNode.x} y={startNode.y - 20} textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">START</text>
      </g>

      {/* End marker — red pin */}
      <g>
        <path
          d={`M${endNode.x},${endNode.y - 4} C${endNode.x},${endNode.y - 4} ${endNode.x - 14},${endNode.y - 18} ${endNode.x - 14},${endNode.y - 28} C${endNode.x - 14},${endNode.y - 38} ${endNode.x - 8},${endNode.y - 46} ${endNode.x},${endNode.y - 46} C${endNode.x + 8},${endNode.y - 46} ${endNode.x + 14},${endNode.y - 38} ${endNode.x + 14},${endNode.y - 28} C${endNode.x + 14},${endNode.y - 18} ${endNode.x},${endNode.y - 4} ${endNode.x},${endNode.y - 4}Z`}
          fill="#ef4444" filter="url(#pin-shadow)"
        />
        <circle cx={endNode.x} cy={endNode.y - 28} r="6" fill="white" />
        <ellipse cx={endNode.x} cy={endNode.y} rx="5" ry="2" fill="black" opacity="0.2" />
        <rect x={endNode.x - 22} y={endNode.y - 62} width="44" height="18" rx="9" fill="#ef4444" filter="url(#pin-shadow)" />
        <text x={endNode.x} y={endNode.y - 50} textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">END</text>
      </g>

      {/* Direction arrows */}
      {routeNodes.length > 2 && routeNodes.map((node, i) => {
        if (i === 0 || i === routeNodes.length - 1 || i % 2 !== 0) return null;
        const prev = routeNodes[i - 1]!;
        const curr = node!;
        const angle = Math.atan2(curr.y - prev.y, curr.x - prev.x) * (180 / Math.PI);
        return (
          <g key={i} transform={`translate(${curr.x},${curr.y}) rotate(${angle})`}>
            <polygon points="-4,-4 6,0 -4,4" fill="white" opacity="0.8" />
          </g>
        );
      })}
    </svg>
  );
}
