import { useState, useMemo } from 'react';
import { OCCUPANTS } from '../data/occupants';
import { ROOMS } from '../data/rooms';
import { BUILDING_MAP } from '../data/buildings';

const US_STATES = [
  'AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA',
  'HI','ID','IL','IN','IA','KS','KY','LA','ME','MD',
  'MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ',
  'NM','NY','NC','ND','OH','OK','OR','PA','RI','SC',
  'SD','TN','TX','UT','VT','VA','WA','WV','WI','WY',
];

interface FindMyRepProps {
  onSelect: (roomId: string) => void;
  onClose: () => void;
}

export function FindMyRep({ onSelect, onClose }: FindMyRepProps) {
  const [selectedState, setSelectedState] = useState<string | null>(null);

  const results = useMemo(() => {
    if (!selectedState) return { senators: [], representatives: [] };
    const stateOccupants = OCCUPANTS.filter(o => o.state === selectedState);
    const senators = stateOccupants.filter(o => o.title === 'Senator');
    const representatives = stateOccupants.filter(o => o.title === 'Representative');
    return { senators, representatives };
  }, [selectedState]);

  const getRoom = (roomId: string) => {
    const room = ROOMS.find((r: any) => r.id === roomId);
    if (!room) return null;
    const bldg = BUILDING_MAP.get(room.buildingId);
    return { room, bldg };
  };

  return (
    <div className="fmr-overlay">
      {/* Close button */}
      <button className="fmr-close" onClick={onClose}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>

      <div className="fmr-content">
        <h2 className="fmr-title">Find Your Representatives</h2>

        {/* State grid */}
        <div className="fmr-state-grid">
          {US_STATES.map(st => (
            <button
              key={st}
              className={`fmr-state-chip ${selectedState === st ? 'active' : ''}`}
              onClick={() => setSelectedState(selectedState === st ? null : st)}
            >
              {st}
            </button>
          ))}
        </div>

        {/* Results */}
        {selectedState && (
          <div className="fmr-results">
            {results.senators.length > 0 && (
              <div className="bd-section">
                <p className="bd-label">Senators</p>
                {results.senators.map(occ => {
                  const info = occ.roomIds.length > 0 ? getRoom(occ.roomIds[0]) : null;
                  return (
                    <button
                      key={occ.id}
                      className="bd-row"
                      onClick={() => { if (info) onSelect(info.room.id); }}
                    >
                      <span className="bd-badge">{info?.room.number || '—'}</span>
                      <span className="bd-info">
                        <span className="bd-name">{occ.name}</span>
                        <span className="bd-sub">
                          {occ.title} · {occ.party}-{occ.state}
                          {info?.bldg ? ` · ${info.bldg.shortName}` : ''}
                        </span>
                      </span>
                      <span className="result-arrow">&rsaquo;</span>
                    </button>
                  );
                })}
              </div>
            )}

            {results.representatives.length > 0 && (
              <div className="bd-section">
                <p className="bd-label">Representatives</p>
                {results.representatives.map(occ => {
                  const info = occ.roomIds.length > 0 ? getRoom(occ.roomIds[0]) : null;
                  return (
                    <button
                      key={occ.id}
                      className="bd-row"
                      onClick={() => { if (info) onSelect(info.room.id); }}
                    >
                      <span className="bd-badge">{info?.room.number || '—'}</span>
                      <span className="bd-info">
                        <span className="bd-name">{occ.name}</span>
                        <span className="bd-sub">
                          {occ.title} · {occ.party}-{occ.state}
                          {info?.bldg ? ` · ${info.bldg.shortName}` : ''}
                        </span>
                      </span>
                      <span className="result-arrow">&rsaquo;</span>
                    </button>
                  );
                })}
              </div>
            )}

            {results.senators.length === 0 && results.representatives.length === 0 && (
              <p className="no-results">No representatives found for {selectedState}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
