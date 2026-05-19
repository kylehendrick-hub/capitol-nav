import { BUILDINGS } from '../data/buildings';
import { useMap } from '../context/MapContext';
import { TUNNEL_CONNECTIONS } from '../data/buildings';

interface InfoPageProps {
  onNavigateTo: (tab: string) => void;
}

function chamberBadge(chamber: string) {
  const cls = `building-badge badge-${chamber}`;
  const labels: Record<string, string> = {
    house: 'House',
    senate: 'Senate',
    joint: 'Joint',
    other: 'Other',
  };
  return <span className={cls}>{labels[chamber] || chamber}</span>;
}

function buildingIcon(chamber: string): string {
  switch (chamber) {
    case 'house': return '🏛️';
    case 'senate': return '🏛️';
    case 'joint': return '⭐';
    case 'other': return '📚';
    default: return '🏢';
  }
}

export function InfoPage({ onNavigateTo }: InfoPageProps) {
  const { dispatch } = useMap();

  const handleBuildingClick = (building: typeof BUILDINGS[0]) => {
    dispatch({
      type: 'SET_BUILDING',
      buildingId: building.id,
      floorId: building.floors[0]?.id || '',
    });
    onNavigateTo('map');
  };

  return (
    <div className="page">
      <div className="page-scroll">
        <div className="info-page">
          <h2 style={{ fontSize: 18, marginBottom: 16 }}>Capitol Hill Buildings</h2>

          <div className="building-list">
            {BUILDINGS.map(b => (
              <div key={b.id} className="building-card" onClick={() => handleBuildingClick(b)}>
                <div className="building-icon">{buildingIcon(b.chamber)}</div>
                <div className="building-info">
                  <h3>{b.shortName} <span style={{ color: '#a0aec0', fontWeight: 400 }}>({b.abbreviation})</span></h3>
                  <p>{b.description}</p>
                  <p style={{ marginTop: 4 }}>
                    📍 {b.address} · {b.floors.length} floors
                  </p>
                  {chamberBadge(b.chamber)}
                </div>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: 18, margin: '24px 0 16px' }}>Tunnel Connections</h2>
          <div className="card" style={{ fontSize: 13, lineHeight: 1.8 }}>
            {TUNNEL_CONNECTIONS.map((t, i) => (
              <div key={i} style={{ padding: '4px 0', borderBottom: i < TUNNEL_CONNECTIONS.length - 1 ? '1px solid #2c2c2e' : 'none' }}>
                {t.hasSubway ? '🚃' : '🚶'} {t.label}
                <span style={{ color: '#8e8e93', marginLeft: 8 }}>
                  ~{Math.ceil(t.walkTime / 60)} min walk
                  {t.hasSubway && t.subwayTime ? ` / ~${Math.ceil(t.subwayTime / 60)} min subway` : ''}
                </span>
              </div>
            ))}
          </div>

          <div style={{ padding: '24px 0', textAlign: 'center', color: '#a0aec0', fontSize: 12 }}>
            Capitol Navigator v1.0 · Built for everyone on the Hill
          </div>
        </div>
      </div>
    </div>
  );
}
