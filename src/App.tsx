import { useState, useMemo, useRef, useDeferredValue, useEffect } from 'react';
import { NavigationProvider, useNavigation } from './context/NavigationContext';
import { MapProvider } from './context/MapContext';
import { useAppGraph } from './hooks/useAppGraph';
import { usePathfinding } from './hooks/usePathfinding';
import { useGeoLocation } from './hooks/useGeoLocation';
import { InteractiveMap } from './components/map/InteractiveMap';
import { FindMyRep } from './components/FindMyRep';
import { ROOMS } from './data/rooms';
import { OCCUPANTS } from './data/occupants';
import { BUILDING_MAP, BUILDINGS } from './data/buildings';
import { ENTRANCES } from './data/entrances';
import { Room, BuildingId, StepType } from './types';
import './styles/global.css';

/* ═══════════════════════════════════════════════
   SVG ICONS for direction steps
   ═══════════════════════════════════════════════ */

function StepIcon({ type, size = 20, color = 'currentColor' }: { type: string; size?: number; color?: string }) {
  switch (type) {
    case StepType.TURN_RIGHT:
      return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M7 18V10a5 5 0 015-5h5" stroke={color} strokeWidth="2" strokeLinecap="round"/><path d="M14 2l4 3-4 3" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>;
    case StepType.TURN_LEFT:
      return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M17 18V10a5 5 0 00-5-5H7" stroke={color} strokeWidth="2" strokeLinecap="round"/><path d="M10 2L6 5l4 3" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>;
    case StepType.GO_STRAIGHT:
    case StepType.WALK:
      return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M12 19V5" stroke={color} strokeWidth="2" strokeLinecap="round"/><path d="M8 9l4-4 4 4" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>;
    case StepType.TAKE_ELEVATOR:
      return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><rect x="5" y="2" width="14" height="20" rx="2" stroke={color} strokeWidth="1.5"/><path d="M9 10l3-3 3 3M9 14l3 3 3-3" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>;
    case StepType.TAKE_STAIRS:
      return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M4 20h4v-4h4v-4h4v-4h4" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>;
    case StepType.ENTER_TUNNEL:
    case StepType.EXIT_TUNNEL:
      return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M3 20h18" stroke={color} strokeWidth="1.5"/><path d="M6 20V10a6 6 0 0112 0v10" stroke={color} strokeWidth="2" strokeLinecap="round"/></svg>;
    case StepType.TAKE_SUBWAY:
      return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><rect x="5" y="3" width="14" height="15" rx="4" stroke={color} strokeWidth="1.5"/><path d="M5 14h14" stroke={color} strokeWidth="1.5"/><circle cx="9" cy="17" r="1" fill={color}/><circle cx="15" cy="17" r="1" fill={color}/><path d="M9 21l-1.5 0M15 21l1.5 0" stroke={color} strokeWidth="1.5" strokeLinecap="round"/></svg>;
    case StepType.ENTER_BUILDING:
    case StepType.EXIT_BUILDING:
      return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M3 21V8l9-5 9 5v13" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><rect x="9" y="14" width="6" height="7" stroke={color} strokeWidth="1.5"/></svg>;
    case StepType.ARRIVE:
      return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><circle cx="12" cy="10" r="4" stroke={color} strokeWidth="2"/><path d="M12 14v6" stroke={color} strokeWidth="2" strokeLinecap="round"/><circle cx="12" cy="10" r="1.5" fill={color}/></svg>;
    default:
      return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3" fill={color}/></svg>;
  }
}

/* ═══════════════════════════════════════════════
   MAIN APP INNER COMPONENT
   ═══════════════════════════════════════════════ */

function AppInner() {
  const [screen, setScreen] = useState<'location' | 'destination' | 'navigate'>('location');
  const [startRoom, setStartRoom] = useState<Room | null>(null);
  const [startLabel, setStartLabel] = useState('');
  const [searchText, setSearchText] = useState('');
  const [locateText, setLocateText] = useState('');
  const [pickedBuilding, setPickedBuilding] = useState<BuildingId | null>(null);
  const [destBuilding, setDestBuilding] = useState<BuildingId | null>(null);
  const [activeStepIdx, setActiveStepIdx] = useState(0);
  const [showFindMyRep, setShowFindMyRep] = useState(false);
  const [findRepMode, setFindRepMode] = useState<'start' | 'dest'>('dest');
  const screenRef = useRef(screen);
  screenRef.current = screen;

  /* ---- Favorites ---- */
  const [favorites, setFavorites] = useState<string[]>(() =>
    JSON.parse(localStorage.getItem('capitolnav-favorites') || '[]')
  );
  const toggleFavorite = (roomId: string) => {
    setFavorites(prev => {
      const next = prev.includes(roomId) ? prev.filter(id => id !== roomId) : [...prev, roomId];
      localStorage.setItem('capitolnav-favorites', JSON.stringify(next));
      return next;
    });
  };
  const isFavorite = (roomId: string) => favorites.includes(roomId);

  /* ---- Accessibility ---- */
  const [accessible, setAccessible] = useState(() =>
    localStorage.getItem('capitolnav-accessible') === 'true'
  );
  const toggleAccessible = () => {
    setAccessible(prev => {
      const next = !prev;
      localStorage.setItem('capitolnav-accessible', String(next));
      return next;
    });
  };

  /* ---- Favorites data helper ---- */
  const favoriteItems = useMemo(() => {
    return favorites.map(fid => {
      const room = ROOMS.find(r => r.id === fid);
      if (!room) return null;
      const bldg = BUILDING_MAP.get(room.buildingId);
      const occ = room.occupants.length ? OCCUPANTS.find(o => o.id === room.occupants[0]) : null;
      return { id: room.id, number: room.number, name: occ?.name || room.label || `Room ${room.number}`, building: bldg?.shortName || '' };
    }).filter(Boolean) as { id: string; number: string; name: string; building: string }[];
  }, [favorites]);

  const { state: navState, dispatch } = useNavigation();
  const graph = useAppGraph();
  const { computeRoute } = usePathfinding(graph);
  const geo = useGeoLocation();

  const deferredLocateText = useDeferredValue(locateText);
  const deferredSearchText = useDeferredValue(searchText);

  /* Auto-select building when GPS detects it */
  useEffect(() => {
    if (geo.buildingId && !pickedBuilding) {
      setPickedBuilding(geo.buildingId);
    }
  }, [geo.buildingId]); // eslint-disable-line react-hooks/exhaustive-deps

  /* ---- Search filtering ---- */
  const searchItems = useMemo(() => {
    const q = (screen === 'location' ? deferredLocateText : deferredSearchText).toLowerCase().trim();
    if (q.length < 2) return [];
    return ROOMS.filter((r: any) => {
      if (!r.label && r.occupants.length === 0 && r.type === 'office') return false;
      const bldg = BUILDING_MAP.get(r.buildingId);
      const occ = r.occupants.length ? OCCUPANTS.find(o => o.id === r.occupants[0]) : null;
      const s = `${r.number} ${r.label || ''} ${occ?.name || ''} ${bldg?.shortName || ''} ${bldg?.abbreviation || ''}`.toLowerCase();
      return s.includes(q);
    }).slice(0, 20).map((r: any) => {
      const bldg = BUILDING_MAP.get(r.buildingId);
      const occ = r.occupants.length ? OCCUPANTS.find(o => o.id === r.occupants[0]) : null;
      return { id: r.id, title: occ?.name || r.label || `Room ${r.number}`, sub: `${bldg?.shortName} \u00b7 ${r.number}`, badge: r.number };
    });
  }, [screen, deferredLocateText, deferredSearchText]);

  /* ---- Actions ---- */
  const pickStart = (roomId: string) => {
    const room = ROOMS.find((r: any) => r.id === roomId);
    if (!room) return;
    const bldg = BUILDING_MAP.get(room.buildingId);
    setStartRoom(room);
    setStartLabel(`${bldg?.abbreviation} ${room.number}`);
    dispatch({ type: 'SET_START', room });
    setLocateText('');
    setScreen('destination');
  };

  const pickEntrance = (eid: string) => {
    const ent = ENTRANCES.find(e => e.id === eid);
    if (!ent) return;
    const room = ROOMS.find((r: any) => r.buildingId === ent.buildingId && r.type === 'entrance') || ROOMS.find((r: any) => r.buildingId === ent.buildingId);
    if (!room) return;
    const bldg = BUILDING_MAP.get(ent.buildingId);
    setStartRoom(room);
    setStartLabel(`${bldg?.shortName} \u2014 ${ent.name.replace(' Entrance', '')}`);
    dispatch({ type: 'SET_START', room });
    setScreen('destination');
  };

  const pickDest = (roomId: string) => {
    const room = ROOMS.find((r: any) => r.id === roomId);
    if (!room || !startRoom) return;
    if (room.id === startRoom.id) {
      alert("You're already there!");
      return;
    }
    dispatch({ type: 'SET_END', room });
    const route = computeRoute(startRoom, room, { accessible, avoidOutdoor: false });
    if (route) {
      dispatch({ type: 'SET_ROUTE', route });
      setActiveStepIdx(0);
      setScreen('navigate');
    } else {
      alert('Route not found. These rooms may not be connected yet.');
    }
    setSearchText('');
  };

  const reset = () => {
    setScreen('location');
    setStartRoom(null);
    setStartLabel('');
    setSearchText('');
    setLocateText('');
    setPickedBuilding(null);
    setDestBuilding(null);
    setActiveStepIdx(0);
    dispatch({ type: 'CLEAR' });
  };

  /* ---- Stable callback refs for map ---- */
  const pickStartRef = useRef(pickStart);
  pickStartRef.current = pickStart;
  const pickDestRef = useRef(pickDest);
  pickDestRef.current = pickDest;
  const onRoomSelectRef = useRef((room: Room) => {
    if (screenRef.current === 'location') pickStartRef.current(room.id);
    else if (screenRef.current === 'destination') pickDestRef.current(room.id);
  });

  /* ---- Derived state ---- */
  const route = navState.route;
  const endRoom = navState.endRoom;
  const endOcc = endRoom?.occupants.length ? OCCUPANTS.find(o => o.id === endRoom.occupants[0]) : null;
  const endBldg = endRoom ? BUILDING_MAP.get(endRoom.buildingId) : null;
  const activeBuilding = pickedBuilding || geo.buildingId;
  const buildingEntrances = activeBuilding ? ENTRANCES.filter(e => e.buildingId === activeBuilding) : [];
  const minutes = route ? Math.ceil(route.totalDuration / 60) : 0;
  const feet = route ? Math.round(route.totalDistance * 0.32) : 0;

  /* ════════════════════════════════════════════
     RENDER
     ════════════════════════════════════════════ */
  return (
    <div className="app">

      {/* ═══ SCREEN 1: WHERE ARE YOU? ═══ */}
      {screen === 'location' && (
        <div className="setup-screen">
          <div className="setup-body">

            {/* Brand */}
            <div className="brand">
              <div className="brand-icon">
                <svg width="44" height="44" viewBox="0 0 100 80" fill="none">
                  {/* Statue of Freedom on top */}
                  <line x1="50" y1="2" x2="50" y2="8" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
                  {/* Dome - the iconic rounded shape */}
                  <path d="M34 32 Q34 12 50 8 Q66 12 66 32" stroke="#fff" strokeWidth="2" fill="none"/>
                  {/* Dome drum (cylindrical base of dome) */}
                  <rect x="32" y="32" width="36" height="5" rx="1" fill="#fff"/>
                  {/* Pediment / triangular portico */}
                  <path d="M28 37 L50 28 L72 37" stroke="#fff" strokeWidth="1.5" fill="none"/>
                  {/* Main columns */}
                  <line x1="33" y1="37" x2="33" y2="52" stroke="#fff" strokeWidth="2"/>
                  <line x1="39" y1="37" x2="39" y2="52" stroke="#fff" strokeWidth="2"/>
                  <line x1="45" y1="37" x2="45" y2="52" stroke="#fff" strokeWidth="2"/>
                  <line x1="55" y1="37" x2="55" y2="52" stroke="#fff" strokeWidth="2"/>
                  <line x1="61" y1="37" x2="61" y2="52" stroke="#fff" strokeWidth="2"/>
                  <line x1="67" y1="37" x2="67" y2="52" stroke="#fff" strokeWidth="2"/>
                  {/* Main entablature */}
                  <rect x="28" y="52" width="44" height="3" fill="#fff"/>
                  {/* Steps */}
                  <rect x="24" y="55" width="52" height="2.5" rx="0.5" fill="#fff" opacity="0.9"/>
                  <rect x="20" y="57.5" width="60" height="2.5" rx="0.5" fill="#fff" opacity="0.7"/>
                  {/* Left wing */}
                  <rect x="2" y="44" width="22" height="11" rx="1.5" fill="#fff" opacity="0.8"/>
                  <line x1="6" y1="44" x2="6" y2="55" stroke="rgba(0,122,255,0.3)" strokeWidth="1"/>
                  <line x1="11" y1="44" x2="11" y2="55" stroke="rgba(0,122,255,0.3)" strokeWidth="1"/>
                  <line x1="16" y1="44" x2="16" y2="55" stroke="rgba(0,122,255,0.3)" strokeWidth="1"/>
                  <line x1="20" y1="44" x2="20" y2="55" stroke="rgba(0,122,255,0.3)" strokeWidth="1"/>
                  {/* Right wing */}
                  <rect x="76" y="44" width="22" height="11" rx="1.5" fill="#fff" opacity="0.8"/>
                  <line x1="80" y1="44" x2="80" y2="55" stroke="rgba(0,122,255,0.3)" strokeWidth="1"/>
                  <line x1="85" y1="44" x2="85" y2="55" stroke="rgba(0,122,255,0.3)" strokeWidth="1"/>
                  <line x1="90" y1="44" x2="90" y2="55" stroke="rgba(0,122,255,0.3)" strokeWidth="1"/>
                  <line x1="94" y1="44" x2="94" y2="55" stroke="rgba(0,122,255,0.3)" strokeWidth="1"/>
                  {/* Wing bases */}
                  <rect x="2" y="55" width="22" height="2.5" rx="0.5" fill="#fff" opacity="0.6"/>
                  <rect x="76" y="55" width="22" height="2.5" rx="0.5" fill="#fff" opacity="0.6"/>
                </svg>
              </div>
              <div className="brand-title">CapitolNav</div>
              <div className="brand-sub">Indoor navigation for Capitol Hill</div>
            </div>

            {/* Accessibility toggle */}
            <div className="a11y-row">
              <span className="a11y-label">&#9855; Wheelchair accessible routes</span>
              <button
                className="toggle-track"
                role="switch"
                aria-checked={accessible}
                onClick={toggleAccessible}
                style={{ background: accessible ? '#0a84ff' : '#636366' }}
              >
                <span className="toggle-thumb" style={{ transform: accessible ? 'translateX(20px)' : 'translateX(0)' }} />
              </button>
            </div>

            {/* Title */}
            <h2 className="section-title">Where are you?</h2>

            {/* Search */}
            <div className="search-wrap">
              <span className="search-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="#8e8e93" strokeWidth="2"/><path d="M20 20l-4-4" stroke="#8e8e93" strokeWidth="2" strokeLinecap="round"/></svg>
              </span>
              <input
                className="search-input"
                value={locateText}
                onChange={e => setLocateText(e.target.value)}
                placeholder="Room number, name, or office..."
              />
              {locateText && (
                <button className="search-clear" onClick={() => setLocateText('')} aria-label="Clear search">&times;</button>
              )}
            </div>

            {/* Search results */}
            {locateText.length >= 2 && searchItems.length > 0 ? (
              <div className="results-list">
                {searchItems.map(item => (
                  <div key={item.id} className="result-row-wrap">
                    <button className="result-row" onClick={() => pickStart(item.id)}>
                      <span className="result-badge">{item.badge}</span>
                      <span className="result-info">
                        <span className="result-name">{item.title}</span>
                        <span className="result-sub">{item.sub}</span>
                      </span>
                      <span className="result-arrow">&rsaquo;</span>
                    </button>
                    <button className={`fav-star ${isFavorite(item.id) ? 'active' : ''}`} onClick={() => toggleFavorite(item.id)} aria-label="Toggle favorite">
                      <svg width="18" height="18" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" fill={isFavorite(item.id) ? '#ffd60a' : 'none'} stroke={isFavorite(item.id) ? '#ffd60a' : '#636366'} strokeWidth="1.5"/></svg>
                    </button>
                  </div>
                ))}
              </div>
            ) : locateText.length >= 2 ? (
              <p className="no-results">No rooms or offices match your search</p>
            ) : (
              <>
                {/* GPS Button */}
                <button className="gps-btn" onClick={() => geo.detect()} disabled={geo.loading}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="4" stroke="#fff" strokeWidth="2"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
                  {geo.loading ? 'Detecting location...' : 'Use my location'}
                </button>
                {geo.buildingId && !geo.error && <p className="gps-msg ok">Detected near {geo.buildingName} — pick your entrance or room below</p>}
                {geo.error && <p className="gps-msg err">{geo.error}</p>}

                {/* Find My Rep */}
                <button className="fmr-btn" onClick={() => { setFindRepMode('start'); setShowFindMyRep(true); }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="currentColor"/></svg>
                  Find My Rep
                </button>

                {/* Divider */}
                <div className="divider">or select a building</div>

                {/* Building grid */}
                <div className="building-grid">
                  {BUILDINGS.filter(b => ['house', 'senate', 'joint'].includes(b.chamber)).map(b => (
                    <button
                      key={b.id}
                      className={`building-chip ${activeBuilding === b.id ? 'active' : ''}`}
                      onClick={() => setPickedBuilding(b.id)}
                    >
                      {b.shortName}
                    </button>
                  ))}
                </div>

                {/* Library of Congress */}
                {BUILDINGS.filter(b => b.chamber === 'other').length > 0 && (
                  <>
                    <div className="divider">Library of Congress</div>
                    <div className="building-grid">
                      {BUILDINGS.filter(b => b.chamber === 'other').map(b => (
                        <button
                          key={b.id}
                          className={`building-chip ${activeBuilding === b.id ? 'active' : ''}`}
                          onClick={() => setPickedBuilding(b.id)}
                        >
                          {b.shortName}
                        </button>
                      ))}
                    </div>
                  </>
                )}

                {/* Building detail — entrances, rooms, landmarks */}
                {activeBuilding && (() => {
                  const bldg = BUILDING_MAP.get(activeBuilding);
                  const bldgRooms = ROOMS.filter(r => r.buildingId === activeBuilding);
                  const offices = bldgRooms.filter(r => r.type === 'office' && r.occupants.length > 0);
                  const committees = bldgRooms.filter(r => r.type === 'committee' || r.type === 'hearing');
                  const landmarks = bldgRooms.filter(r => r.type === 'other');
                  const amenities = bldgRooms.filter(r => ['cafeteria', 'restroom', 'elevator', 'tunnel-access'].includes(r.type));

                  return (
                    <div className="building-detail">
                      <p className="building-detail-title">{bldg?.shortName} ({bldg?.abbreviation})</p>

                      {/* Entrances */}
                      {buildingEntrances.length > 0 && (
                        <div className="bd-section">
                          <p className="bd-label">Entrances</p>
                          {buildingEntrances.map(e => (
                            <button key={e.id} className="bd-row" onClick={() => pickEntrance(e.id)}>
                              <span className="bd-icon">🚪</span>
                              <span className="bd-info">
                                <span className="bd-name">{e.name}</span>
                                <span className="bd-sub">{e.facing}{e.isMain ? ' · Main entrance' : ''}</span>
                              </span>
                            </button>
                          ))}
                        </div>
                      )}

                      {/* Committee / Hearing Rooms */}
                      {committees.length > 0 && (
                        <div className="bd-section">
                          <p className="bd-label">Committee & Hearing Rooms</p>
                          {committees.map(r => (
                            <button key={r.id} className="bd-row" onClick={() => pickStart(r.id)}>
                              <span className="bd-icon">🏛️</span>
                              <span className="bd-info">
                                <span className="bd-name">{r.label || r.number}</span>
                                <span className="bd-sub">{r.number} · {bldg?.floors.find(f => f.id === r.position.floorId)?.label}</span>
                              </span>
                            </button>
                          ))}
                        </div>
                      )}

                      {/* Landmarks */}
                      {landmarks.length > 0 && (
                        <div className="bd-section">
                          <p className="bd-label">Landmarks</p>
                          {landmarks.map(r => (
                            <button key={r.id} className="bd-row" onClick={() => pickStart(r.id)}>
                              <span className="bd-icon">📍</span>
                              <span className="bd-info">
                                <span className="bd-name">{r.label || r.number}</span>
                                <span className="bd-sub">{bldg?.floors.find(f => f.id === r.position.floorId)?.label}</span>
                              </span>
                            </button>
                          ))}
                        </div>
                      )}

                      {/* Amenities */}
                      {amenities.length > 0 && (
                        <div className="bd-section">
                          <p className="bd-label">Amenities</p>
                          {amenities.filter((r, i, arr) => {
                            // Deduplicate — show one per type per floor
                            return arr.findIndex(a => a.type === r.type && a.position.floorId === r.position.floorId) === i;
                          }).map(r => {
                            const icon = r.type === 'cafeteria' ? '☕' : r.type === 'restroom' ? '🚻' : r.type === 'elevator' ? '🛗' : '🚇';
                            const label = r.type === 'cafeteria' ? 'Cafeteria' : r.type === 'restroom' ? 'Restroom' : r.type === 'elevator' ? 'Elevator' : 'Tunnel Access';
                            return (
                              <button key={r.id} className="bd-row" onClick={() => pickStart(r.id)}>
                                <span className="bd-icon">{icon}</span>
                                <span className="bd-info">
                                  <span className="bd-name">{label}</span>
                                  <span className="bd-sub">{bldg?.floors.find(f => f.id === r.position.floorId)?.label}</span>
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      )}

                      {/* ALL offices grouped by floor */}
                      {offices.length > 0 && (() => {
                        const floors = bldg?.floors || [];
                        return (
                          <div className="bd-section">
                            <p className="bd-label">All Offices ({offices.length})</p>
                            {floors.map(fl => {
                              const floorOffices = offices.filter(r => r.position.floorId === fl.id);
                              if (floorOffices.length === 0) return null;
                              return (
                                <div key={fl.id}>
                                  <p className="bd-floor-header">{fl.label} ({floorOffices.length})</p>
                                  {floorOffices.map(r => {
                                    const occ = OCCUPANTS.find(o => o.id === r.occupants[0]);
                                    return (
                                      <button key={r.id} className="bd-row" onClick={() => pickStart(r.id)}>
                                        <span className="bd-badge">{r.number}</span>
                                        <span className="bd-info">
                                          <span className="bd-name">{occ?.name || r.label || r.number}</span>
                                          <span className="bd-sub">{occ ? `${occ.party}-${occ.state}` : fl.label}</span>
                                        </span>
                                      </button>
                                    );
                                  })}
                                </div>
                              );
                            })}
                          </div>
                        );
                      })()}
                    </div>
                  );
                })()}
              </>
            )}
          </div>
        </div>
      )}

      {/* ═══ SCREEN 2: WHERE ARE YOU GOING? ═══ */}
      {screen === 'destination' && (
        <div className="setup-screen">
          <div className="setup-header">
            <button className="setup-back" onClick={() => setScreen('location')}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M15 19l-7-7 7-7" stroke="#007aff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
          <div className="setup-body">

            {/* From pill */}
            <div style={{ marginTop: 16, marginBottom: 24 }}>
              <div className="from-pill">
                <span className="from-pill-dot" />
                {startLabel}
              </div>
            </div>

            {/* Title */}
            <h2 className="section-title">Where to?</h2>

            {/* Favorites */}
            {favoriteItems.length > 0 && (
              <div className="favorites-section">
                <p className="bd-label">Favorites</p>
                {favoriteItems.map(fav => (
                  <div key={fav.id} className="fav-row">
                    <button className="fav-row-btn" onClick={() => pickDest(fav.id)}>
                      <span className="result-badge">{fav.number}</span>
                      <span className="result-info">
                        <span className="result-name">{fav.name}</span>
                        <span className="result-sub">{fav.building}</span>
                      </span>
                    </button>
                    <button className="fav-star active" onClick={() => toggleFavorite(fav.id)} aria-label="Remove favorite">
                      <svg width="18" height="18" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" fill="#ffd60a" stroke="#ffd60a" strokeWidth="1.5"/></svg>
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Search */}
            <div className="search-wrap">
              <span className="search-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="#8e8e93" strokeWidth="2"/><path d="M20 20l-4-4" stroke="#8e8e93" strokeWidth="2" strokeLinecap="round"/></svg>
              </span>
              <input
                className="search-input"
                value={searchText}
                onChange={e => setSearchText(e.target.value)}
                placeholder="Person, room, or committee..."
                autoFocus
              />
              {searchText && (
                <button className="search-clear" onClick={() => setSearchText('')} aria-label="Clear search">&times;</button>
              )}
            </div>

            {/* Results */}
            {searchText.length >= 2 && searchItems.length > 0 ? (
              <div className="results-list">
                {searchItems.map((item, i) => (
                  <div key={`${item.id}-${i}`} className="result-row-wrap">
                    <button className="result-row" onClick={() => pickDest(item.id)}>
                      <span className="result-badge">{item.badge}</span>
                      <span className="result-info">
                        <span className="result-name">{item.title}</span>
                        <span className="result-sub">{item.sub}</span>
                      </span>
                      <span className="result-arrow">&rsaquo;</span>
                    </button>
                    <button className={`fav-star ${isFavorite(item.id) ? 'active' : ''}`} onClick={() => toggleFavorite(item.id)} aria-label="Toggle favorite">
                      <svg width="18" height="18" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" fill={isFavorite(item.id) ? '#ffd60a' : 'none'} stroke={isFavorite(item.id) ? '#ffd60a' : '#636366'} strokeWidth="1.5"/></svg>
                    </button>
                  </div>
                ))}
              </div>
            ) : searchText.length >= 2 ? (
              <p className="no-results">No rooms or offices match your search</p>
            ) : (
              <>
                {/* Find My Rep */}
                <button className="fmr-btn" onClick={() => { setFindRepMode('dest'); setShowFindMyRep(true); }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="currentColor"/></svg>
                  Find My Rep
                </button>

                {/* Quick tags */}
                <div className="quick-tags">
                  {['Cafeteria', 'Restroom', 'Elevator', 'Hearing Room', 'Rotunda'].map(q => (
                    <button key={q} className="quick-tag" onClick={() => setSearchText(q)}>{q}</button>
                  ))}
                </div>

                {/* Building browser */}
                <div className="divider">or select a building</div>

                <div className="building-grid">
                  {BUILDINGS.filter(b => ['house', 'senate', 'joint'].includes(b.chamber)).map(b => (
                    <button
                      key={b.id}
                      className={`building-chip ${destBuilding === b.id ? 'active' : ''}`}
                      onClick={() => setDestBuilding(destBuilding === b.id ? null : b.id)}
                    >
                      {b.shortName}
                    </button>
                  ))}
                </div>

                {/* Library of Congress */}
                {BUILDINGS.filter(b => b.chamber === 'other').length > 0 && (
                  <>
                    <div className="divider">Library of Congress</div>
                    <div className="building-grid">
                      {BUILDINGS.filter(b => b.chamber === 'other').map(b => (
                        <button
                          key={b.id}
                          className={`building-chip ${destBuilding === b.id ? 'active' : ''}`}
                          onClick={() => setDestBuilding(destBuilding === b.id ? null : b.id)}
                        >
                          {b.shortName}
                        </button>
                      ))}
                    </div>
                  </>
                )}

                {/* Building detail for destination */}
                {destBuilding && (() => {
                  const bldg = BUILDING_MAP.get(destBuilding);
                  const bldgRooms = ROOMS.filter(r => r.buildingId === destBuilding);
                  const offices = bldgRooms.filter(r => r.type === 'office' && r.occupants.length > 0);
                  const committees = bldgRooms.filter(r => r.type === 'committee' || r.type === 'hearing');
                  const landmarks = bldgRooms.filter(r => r.type === 'other');
                  const amenities = bldgRooms.filter(r => ['cafeteria', 'restroom', 'elevator', 'tunnel-access'].includes(r.type));

                  return (
                    <div className="building-detail">
                      <p className="building-detail-title">{bldg?.shortName} ({bldg?.abbreviation})</p>

                      {committees.length > 0 && (
                        <div className="bd-section">
                          <p className="bd-label">Committee & Hearing Rooms</p>
                          {committees.map(r => (
                            <button key={r.id} className="bd-row" onClick={() => pickDest(r.id)}>
                              <span className="bd-icon">🏛️</span>
                              <span className="bd-info">
                                <span className="bd-name">{r.label || r.number}</span>
                                <span className="bd-sub">{r.number} · {bldg?.floors.find(f => f.id === r.position.floorId)?.label}</span>
                              </span>
                            </button>
                          ))}
                        </div>
                      )}

                      {landmarks.length > 0 && (
                        <div className="bd-section">
                          <p className="bd-label">Landmarks</p>
                          {landmarks.map(r => (
                            <button key={r.id} className="bd-row" onClick={() => pickDest(r.id)}>
                              <span className="bd-icon">📍</span>
                              <span className="bd-info">
                                <span className="bd-name">{r.label || r.number}</span>
                                <span className="bd-sub">{bldg?.floors.find(f => f.id === r.position.floorId)?.label}</span>
                              </span>
                            </button>
                          ))}
                        </div>
                      )}

                      {amenities.length > 0 && (
                        <div className="bd-section">
                          <p className="bd-label">Amenities</p>
                          {amenities.filter((r, i, arr) => arr.findIndex(a => a.type === r.type && a.position.floorId === r.position.floorId) === i).map(r => {
                            const icon = r.type === 'cafeteria' ? '☕' : r.type === 'restroom' ? '🚻' : r.type === 'elevator' ? '🛗' : '🚇';
                            const label = r.type === 'cafeteria' ? 'Cafeteria' : r.type === 'restroom' ? 'Restroom' : r.type === 'elevator' ? 'Elevator' : 'Tunnel Access';
                            return (
                              <button key={r.id} className="bd-row" onClick={() => pickDest(r.id)}>
                                <span className="bd-icon">{icon}</span>
                                <span className="bd-info">
                                  <span className="bd-name">{label}</span>
                                  <span className="bd-sub">{bldg?.floors.find(f => f.id === r.position.floorId)?.label}</span>
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      )}

                      {offices.length > 0 && (() => {
                        const floors = bldg?.floors || [];
                        return (
                          <div className="bd-section">
                            <p className="bd-label">All Offices ({offices.length})</p>
                            {floors.map(fl => {
                              const floorOffices = offices.filter(r => r.position.floorId === fl.id);
                              if (floorOffices.length === 0) return null;
                              return (
                                <div key={fl.id}>
                                  <p className="bd-floor-header">{fl.label} ({floorOffices.length})</p>
                                  {floorOffices.map(r => {
                                    const occ = OCCUPANTS.find(o => o.id === r.occupants[0]);
                                    return (
                                      <button key={r.id} className="bd-row" onClick={() => pickDest(r.id)}>
                                        <span className="bd-badge">{r.number}</span>
                                        <span className="bd-info">
                                          <span className="bd-name">{occ?.name || r.label || r.number}</span>
                                          <span className="bd-sub">{occ ? `${occ.party}-${occ.state}` : fl.label}</span>
                                        </span>
                                      </button>
                                    );
                                  })}
                                </div>
                              );
                            })}
                          </div>
                        );
                      })()}
                    </div>
                  );
                })()}
              </>
            )}
          </div>
        </div>
      )}

      {/* ═══ SCREEN 3: NAVIGATION ═══ */}
      {screen === 'navigate' && route && (
        <div className="nav-screen">

          {/* Header bar */}
          <div className="nav-header">
            <button className="nav-close" onClick={reset}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
            </button>
            <div className="nav-header-info">
              <div className="nav-header-title">
                {minutes} min \u00b7 {endBldg?.shortName || 'Destination'}
              </div>
              <div className="nav-header-sub">
                {endOcc?.name || endRoom?.label || endRoom?.number || ''}
                {feet > 0 && ` \u00b7 ${feet < 1000 ? `${feet} ft` : `${(feet / 5280).toFixed(1)} mi`}`}
              </div>
            </div>
            {accessible && <span className="a11y-badge">&#9855;</span>}
          </div>

          {/* Map */}
          <div className="nav-map">
            <div className="map-area">
              <InteractiveMap
                route={route}
                graph={graph}
                routeBuildings={route.buildings}
                startBuildingId={startRoom?.buildingId}
                endBuildingId={endRoom?.buildingId}
                onRoomSelect={onRoomSelectRef.current}
              />
            </div>
          </div>

          {/* Directions list */}
          <div className="nav-directions">
            {route.steps.map((step, i) => {
              const bldg = BUILDING_MAP.get(step.buildingId);
              const prev = i > 0 ? route.steps[i - 1] : null;
              const newBuilding = prev && prev.buildingId !== step.buildingId;
              const distFt = Math.round(step.distance * 0.32);
              const distStr = distFt < 15 ? '' : distFt < 1000 ? `${Math.round(distFt / 10) * 10} ft` : `${(distFt / 5280).toFixed(1)} mi`;
              const isActive = i === activeStepIdx;
              const isArrival = step.type === StepType.ARRIVE;

              return (
                <div key={i}>
                  {newBuilding && bldg && (
                    <div style={{
                      padding: '8px 16px',
                      fontSize: 12,
                      fontWeight: 700,
                      color: '#0a84ff',
                      background: '#2c2c2e',
                      borderBottom: '1px solid #48484a',
                      textTransform: 'uppercase',
                      letterSpacing: 0.5,
                    }}>
                      Entering {bldg.shortName}
                    </div>
                  )}
                  <button
                    className={`dir-step ${isActive ? 'active' : ''} ${isArrival ? 'dir-step-arrive' : ''}`}
                    onClick={() => setActiveStepIdx(i)}
                    style={{ width: '100%', border: 'none', cursor: 'pointer', background: 'none' }}
                  >
                    <div className="dir-icon-wrap">
                      <StepIcon type={step.type} size={20} color={isActive ? '#fff' : isArrival ? '#fff' : '#8e8e93'} />
                    </div>
                    <div className="dir-content">
                      <div className="dir-instruction">{step.instruction}</div>
                      <div className="dir-meta">
                        {distStr && <span className="dir-distance">{distStr}</span>}
                        {newBuilding && bldg && <span className="dir-building-tag">{bldg.shortName}</span>}
                      </div>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>

          {/* End navigation */}
          <div className="nav-end-wrap">
            <button className="nav-end-btn" onClick={reset}>End Navigation</button>
          </div>
        </div>
      )}

      {/* ═══ FIND MY REP OVERLAY ═══ */}
      {showFindMyRep && (
        <FindMyRep
          onSelect={(roomId: string) => {
            setShowFindMyRep(false);
            if (findRepMode === 'start') {
              pickStart(roomId);
            } else {
              pickDest(roomId);
            }
          }}
          onClose={() => setShowFindMyRep(false)}
        />
      )}

      {/* Map is only rendered on the navigate screen to avoid duplicate Leaflet instances */}
    </div>
  );
}

export default function App() {
  return <NavigationProvider><MapProvider><AppInner /></MapProvider></NavigationProvider>;
}
