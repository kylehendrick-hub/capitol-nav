import { createContext, useContext, useReducer, ReactNode } from 'react';
import { Route, Room, BuildingId } from '../types';

interface NavigationState {
  startRoom: Room | null;
  endRoom: Room | null;
  route: Route | null;
  activeStepIndex: number;
  options: {
    accessible: boolean;
    preferIndoor: boolean;
  };
}

type NavAction =
  | { type: 'SET_START'; room: Room | null }
  | { type: 'SET_END'; room: Room | null }
  | { type: 'SET_ROUTE'; route: Route | null }
  | { type: 'SET_STEP'; index: number }
  | { type: 'NEXT_STEP' }
  | { type: 'PREV_STEP' }
  | { type: 'TOGGLE_ACCESSIBLE' }
  | { type: 'TOGGLE_INDOOR' }
  | { type: 'CLEAR' };

const initialState: NavigationState = {
  startRoom: null,
  endRoom: null,
  route: null,
  activeStepIndex: 0,
  options: { accessible: false, preferIndoor: true },
};

function reducer(state: NavigationState, action: NavAction): NavigationState {
  switch (action.type) {
    case 'SET_START':
      return { ...state, startRoom: action.room, route: null, activeStepIndex: 0 };
    case 'SET_END':
      return { ...state, endRoom: action.room, route: null, activeStepIndex: 0 };
    case 'SET_ROUTE':
      return { ...state, route: action.route, activeStepIndex: 0 };
    case 'SET_STEP':
      return { ...state, activeStepIndex: action.index };
    case 'NEXT_STEP':
      return {
        ...state,
        activeStepIndex: state.route
          ? Math.min(state.activeStepIndex + 1, state.route.steps.length - 1)
          : 0,
      };
    case 'PREV_STEP':
      return { ...state, activeStepIndex: Math.max(state.activeStepIndex - 1, 0) };
    case 'TOGGLE_ACCESSIBLE':
      return { ...state, options: { ...state.options, accessible: !state.options.accessible }, route: null };
    case 'TOGGLE_INDOOR':
      return { ...state, options: { ...state.options, preferIndoor: !state.options.preferIndoor }, route: null };
    case 'CLEAR':
      return initialState;
    default:
      return state;
  }
}

const NavigationContext = createContext<{
  state: NavigationState;
  dispatch: React.Dispatch<NavAction>;
}>({ state: initialState, dispatch: () => {} });

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <NavigationContext.Provider value={{ state, dispatch }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  return useContext(NavigationContext);
}
