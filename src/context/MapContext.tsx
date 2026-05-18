import { createContext, useContext, useReducer, ReactNode } from 'react';
import { BuildingId } from '../types';

interface MapState {
  currentBuilding: BuildingId;
  currentFloorId: string;
  transform: { scale: number; translateX: number; translateY: number };
  highlightedRoomId: string | null;
}

type MapAction =
  | { type: 'SET_BUILDING'; buildingId: BuildingId; floorId: string }
  | { type: 'SET_FLOOR'; floorId: string }
  | { type: 'SET_TRANSFORM'; transform: { scale: number; translateX: number; translateY: number } }
  | { type: 'HIGHLIGHT_ROOM'; roomId: string | null }
  | { type: 'RESET_VIEW' };

const initialState: MapState = {
  currentBuilding: BuildingId.CAPITOL,
  currentFloorId: 'capitol-1',
  transform: { scale: 1, translateX: 0, translateY: 0 },
  highlightedRoomId: null,
};

function reducer(state: MapState, action: MapAction): MapState {
  switch (action.type) {
    case 'SET_BUILDING':
      return { ...state, currentBuilding: action.buildingId, currentFloorId: action.floorId, transform: { scale: 1, translateX: 0, translateY: 0 } };
    case 'SET_FLOOR':
      return { ...state, currentFloorId: action.floorId };
    case 'SET_TRANSFORM':
      return { ...state, transform: action.transform };
    case 'HIGHLIGHT_ROOM':
      return { ...state, highlightedRoomId: action.roomId };
    case 'RESET_VIEW':
      return { ...state, transform: { scale: 1, translateX: 0, translateY: 0 } };
    default:
      return state;
  }
}

const MapContext = createContext<{
  state: MapState;
  dispatch: React.Dispatch<MapAction>;
}>({ state: initialState, dispatch: () => {} });

export function MapProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <MapContext.Provider value={{ state, dispatch }}>
      {children}
    </MapContext.Provider>
  );
}

export function useMap() {
  return useContext(MapContext);
}
