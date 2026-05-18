import { BuildingId } from './building';

export enum StepType {
  WALK = 'walk',
  TURN_LEFT = 'turn-left',
  TURN_RIGHT = 'turn-right',
  GO_STRAIGHT = 'go-straight',
  TAKE_ELEVATOR = 'take-elevator',
  TAKE_STAIRS = 'take-stairs',
  TAKE_ESCALATOR = 'take-escalator',
  ENTER_TUNNEL = 'enter-tunnel',
  EXIT_TUNNEL = 'exit-tunnel',
  TAKE_SUBWAY = 'take-subway',
  ENTER_BUILDING = 'enter-building',
  EXIT_BUILDING = 'exit-building',
  CHANGE_FLOOR = 'change-floor',
  ARRIVE = 'arrive',
}

export interface DirectionStep {
  instruction: string;
  distance: number;
  duration: number;
  floorId: string;
  buildingId: BuildingId;
  startNodeId: string;
  endNodeId: string;
  type: StepType;
  landmark?: string;
  icon: string;
}

export interface Route {
  steps: DirectionStep[];
  nodeIds: string[];  // Full path of graph node IDs for detailed route rendering
  totalDistance: number;
  totalDuration: number;
  buildings: BuildingId[];
  floors: string[];
  useTunnel: boolean;
  useSubway: boolean;
  accessible: boolean;
}
