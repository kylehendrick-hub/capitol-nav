import { useState } from 'react';
import { useSearch } from '../hooks/useSearch';
import { useNavigation } from '../context/NavigationContext';
import { useMap } from '../context/MapContext';
import { SearchResults } from '../components/search/SearchResults';
import { SearchResult } from '../engine/search-index';
import { ROOMS } from '../data/rooms';
import { OCCUPANTS } from '../data/occupants';
import { BUILDING_MAP } from '../data/buildings';
import { Room } from '../types';

interface SearchPageProps {
  onNavigateTo: (tab: string) => void;
}

export function SearchPage({ onNavigateTo }: SearchPageProps) {
  const { query, search, results } = useSearch();
  const { dispatch: navDispatch } = useNavigation();
  const { dispatch: mapDispatch } = useMap();
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

  const handleSelect = (result: SearchResult) => {
    const room = ROOMS.find(r => r.id === result.entry.roomId);
    if (room) setSelectedRoom(room);
  };

  const handleNavigate = () => {
    if (!selectedRoom) return;
    navDispatch({ type: 'SET_END', room: selectedRoom });
    onNavigateTo('navigate');
  };

  const handleViewOnMap = () => {
    if (!selectedRoom) return;
    const building = BUILDING_MAP.get(selectedRoom.buildingId);
    if (building) {
      mapDispatch({ type: 'SET_BUILDING', buildingId: building.id, floorId: selectedRoom.position.floorId });
      mapDispatch({ type: 'HIGHLIGHT_ROOM', roomId: selectedRoom.id });
    }
    onNavigateTo('map');
  };

  const getOccupant = (room: Room) => {
    if (room.occupants.length === 0) return null;
    return OCCUPANTS.find(o => o.id === room.occupants[0]);
  };

  const building = selectedRoom ? BUILDING_MAP.get(selectedRoom.buildingId) : null;
  const occupant = selectedRoom ? getOccupant(selectedRoom) : null;
  const floor = building?.floors.find(f => f.id === selectedRoom?.position.floorId);

  return (
    <div className="page">
      <div className="page-scroll">
        {/* Hero section */}
        <div className="search-hero">
          <h2 className="search-hero-title">Where are you headed?</h2>
          <p className="search-hero-subtitle">Search by name, room number, or building</p>
          <div className="search-input-wrapper">
            <span className="search-input-icon">🔍</span>
            <input
              className="search-input"
              type="text"
              value={query}
              onChange={e => { search(e.target.value); setSelectedRoom(null); }}
              placeholder='Try "Schumer" or "SR-326" or "Rayburn 2154"'
            />
            {query && (
              <button className="search-clear" onClick={() => { search(''); setSelectedRoom(null); }}>✕</button>
            )}
          </div>
        </div>

        {/* Selected room card */}
        {selectedRoom && (
          <div className="destination-card">
            <div className="destination-card-top">
              <div className="destination-icon">
                {occupant ? '👤' : selectedRoom.type === 'committee' || selectedRoom.type === 'hearing' ? '🏛️' : '📍'}
              </div>
              <div className="destination-info">
                {occupant ? (
                  <>
                    <div className="destination-name">{occupant.name}</div>
                    <div className="destination-detail">{occupant.title} · {occupant.party}-{occupant.state}</div>
                  </>
                ) : selectedRoom.label ? (
                  <>
                    <div className="destination-name">{selectedRoom.label}</div>
                  </>
                ) : (
                  <div className="destination-name">Room {selectedRoom.number}</div>
                )}
                <div className="destination-location">
                  <span className="destination-room">{selectedRoom.number}</span>
                  <span className="destination-sep">·</span>
                  <span>{building?.shortName}</span>
                  <span className="destination-sep">·</span>
                  <span>{floor?.label}</span>
                </div>
              </div>
            </div>
            <div className="destination-actions">
              <button className="destination-btn primary" onClick={handleNavigate}>
                🧭 Get Directions
              </button>
              <button className="destination-btn secondary" onClick={handleViewOnMap}>
                🗺️ View on Map
              </button>
            </div>
          </div>
        )}

        {/* Search results */}
        {!selectedRoom && results.length > 0 && (
          <SearchResults results={results} onSelect={handleSelect} />
        )}

        {/* No results */}
        {!selectedRoom && query.length >= 2 && results.length === 0 && (
          <div className="empty-state">
            <span className="empty-icon">🤔</span>
            <h3>No results found</h3>
            <p>Try a room number like "2154", a name like "Schumer", or a building like "Rayburn"</p>
          </div>
        )}

        {/* Quick access when no search */}
        {!selectedRoom && query.length < 2 && (
          <div className="quick-access">
            <h3 className="quick-access-title">Quick Access</h3>
            <div className="quick-chips">
              {[
                { label: '🏛️ Capitol', q: 'Rotunda' },
                { label: '☕ Cafeterias', q: 'Cafeteria' },
                { label: '🚻 Restrooms', q: 'Restroom' },
                { label: '🛗 Elevators', q: 'Elevator' },
                { label: '🚇 Tunnels', q: 'Tunnel' },
              ].map(chip => (
                <button key={chip.q} className="quick-chip" onClick={() => search(chip.q)}>
                  {chip.label}
                </button>
              ))}
            </div>

            <h3 className="quick-access-title" style={{ marginTop: 24 }}>Buildings</h3>
            <div className="building-quick-list">
              {[
                { name: 'Rayburn', abbr: 'RHOB', chamber: 'House', q: 'Rayburn' },
                { name: 'Longworth', abbr: 'LHOB', chamber: 'House', q: 'Longworth' },
                { name: 'Cannon', abbr: 'CHOB', chamber: 'House', q: 'Cannon' },
                { name: 'Hart', abbr: 'HSOB', chamber: 'Senate', q: 'Hart' },
                { name: 'Dirksen', abbr: 'DSOB', chamber: 'Senate', q: 'Dirksen' },
                { name: 'Russell', abbr: 'RSOB', chamber: 'Senate', q: 'Russell' },
              ].map(b => (
                <button key={b.q} className="building-quick-item" onClick={() => search(b.q)}>
                  <span className="building-quick-name">{b.name}</span>
                  <span className={`building-quick-badge ${b.chamber.toLowerCase()}`}>{b.chamber}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
