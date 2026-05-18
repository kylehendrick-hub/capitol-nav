import { useState } from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { useSearch } from '../../hooks/useSearch';
import { SearchResults } from '../search/SearchResults';
import { LocationPicker } from './LocationPicker';
import { ROOMS } from '../../data/rooms';
import { BUILDING_MAP } from '../../data/buildings';
import { Room } from '../../types';

interface NavigateFormProps {
  onRouteRequested: () => void;
}

export function NavigateForm({ onRouteRequested }: NavigateFormProps) {
  const { state, dispatch } = useNavigation();
  const { query, search, results } = useSearch();
  const [selectingFor, setSelectingFor] = useState<'start' | 'end' | null>(null);
  const [showLocationPicker, setShowLocationPicker] = useState(false);

  const handleSelect = (roomId: string) => {
    const room = ROOMS.find(r => r.id === roomId);
    if (!room) return;
    if (selectingFor === 'start') {
      dispatch({ type: 'SET_START', room });
    } else if (selectingFor === 'end') {
      dispatch({ type: 'SET_END', room });
    }
    setSelectingFor(null);
    search('');
  };

  const getRoomLabel = (room: Room | null): string => {
    if (!room) return '';
    const building = BUILDING_MAP.get(room.buildingId);
    const label = room.label ? ` — ${room.label.substring(0, 30)}` : '';
    return `${building?.abbreviation} ${room.number}${label}`;
  };

  const handleSwap = () => {
    const oldStart = state.startRoom;
    const oldEnd = state.endRoom;
    dispatch({ type: 'SET_START', room: oldEnd });
    setTimeout(() => dispatch({ type: 'SET_END', room: oldStart }), 0);
  };

  // Location picker for "I'm here"
  if (showLocationPicker) {
    return (
      <LocationPicker
        onLocationSet={() => setShowLocationPicker(false)}
        onClose={() => setShowLocationPicker(false)}
      />
    );
  }

  // Room search modal for start or end
  if (selectingFor) {
    return (
      <div className="search-modal">
        <div className="search-modal-header">
          <button className="back-btn" onClick={() => { setSelectingFor(null); search(''); }}>←</button>
          <input
            type="text"
            placeholder={selectingFor === 'start' ? 'Where are you? (room, entrance, landmark)' : 'Where are you going?'}
            value={query}
            onChange={e => search(e.target.value)}
            autoFocus
          />
        </div>
        <div className="page-scroll">
          {/* Quick option to use GPS for start point */}
          {selectingFor === 'start' && query.length < 2 && (
            <button
              className="gps-inline-btn"
              onClick={() => { setSelectingFor(null); setShowLocationPicker(true); }}
            >
              📍 Use my location (GPS + entrance picker)
            </button>
          )}
          <SearchResults results={results} onSelect={r => handleSelect(r.entry.roomId)} />
          {results.length === 0 && query.length < 2 && (
            <div className="empty-state" style={{ paddingTop: 20 }}>
              <p style={{ fontSize: 13, color: '#9ca3af' }}>
                {selectingFor === 'start'
                  ? 'Type an entrance, room number, or landmark — or use GPS above'
                  : 'Type a name, room number, or building'}
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="navigate-form">
      {/* Start point */}
      <div className="location-input" onClick={() => setSelectingFor('start')}>
        <div className="dot start"></div>
        <span className={`location-text ${!state.startRoom ? 'placeholder' : ''}`}>
          {state.startRoom ? getRoomLabel(state.startRoom) : 'Where are you? (tap to set)'}
        </span>
        {!state.startRoom && (
          <button
            className="location-gps-btn"
            onClick={(e) => { e.stopPropagation(); setShowLocationPicker(true); }}
            title="Use GPS"
          >
            📍
          </button>
        )}
      </div>

      <button className="swap-btn" onClick={handleSwap}>↕️</button>

      {/* End point */}
      <div className="location-input" onClick={() => setSelectingFor('end')}>
        <div className="dot end"></div>
        <span className={`location-text ${!state.endRoom ? 'placeholder' : ''}`}>
          {state.endRoom ? getRoomLabel(state.endRoom) : 'Where are you going?'}
        </span>
      </div>

      <div className="route-options">
        <button
          className={`option-chip ${state.options.accessible ? 'active' : ''}`}
          onClick={() => dispatch({ type: 'TOGGLE_ACCESSIBLE' })}
        >
          ♿ Accessible
        </button>
        <button
          className={`option-chip ${state.options.preferIndoor ? 'active' : ''}`}
          onClick={() => dispatch({ type: 'TOGGLE_INDOOR' })}
        >
          🏛️ Stay indoors
        </button>
      </div>

      <button
        className="go-button"
        disabled={!state.startRoom || !state.endRoom}
        onClick={onRouteRequested}
      >
        Get Directions
      </button>
    </div>
  );
}
