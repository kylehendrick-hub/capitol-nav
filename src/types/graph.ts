import { BuildingId } from './building';

export enum NodeType {
  HALLWAY = 'hallway',
  DOOR = 'door',
  ELEVATOR = 'elevator',
  STAIRS = 'stairs',
  ESCALATOR = 'escalator',
  TUNNEL_ENTRY = 'tunnel-entry',
  TUNNEL_WAYPOINT = 'tunnel-waypoint',
  BUILDING_ENTRANCE = 'building-entrance',
  SUBWAY_STATION = 'subway-station',
}

export enum EdgeType {
  HALLWAY = 'hallway',
  STAIRS_UP = 'stairs-up',
  STAIRS_DOWN = 'stairs-down',
  ELEVATOR = 'elevator',
  ESCALATOR_UP = 'escalator-up',
  ESCALATOR_DOWN = 'escalator-down',
  TUNNEL = 'tunnel',
  SUBWAY = 'subway',
  OUTDOOR = 'outdoor',
}

export interface GraphNode {
  id: string;
  floorId: string;
  buildingId: BuildingId;
  x: number;
  y: number;
  type: NodeType;
  label?: string;
}

export interface GraphEdge {
  from: string;
  to: string;
  weight: number;
  distance: number;
  type: EdgeType;
  accessible: boolean;
  description?: string;
}
