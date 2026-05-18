import { BuildingId, Wing } from './building';

export enum RoomType {
  OFFICE = 'office',
  COMMITTEE = 'committee',
  HEARING = 'hearing',
  RESTROOM = 'restroom',
  ELEVATOR = 'elevator',
  STAIRWELL = 'stairwell',
  ENTRANCE = 'entrance',
  CAFETERIA = 'cafeteria',
  TUNNEL_ACCESS = 'tunnel-access',
  SECURITY = 'security',
  OTHER = 'other',
}

export interface RoomPosition {
  floorId: string;
  x: number;
  y: number;
  wing: Wing;
}

export interface Room {
  id: string;
  number: string;
  buildingId: BuildingId;
  position: RoomPosition;
  type: RoomType;
  label?: string;
  occupants: string[];
  nearestNodeId: string;
}

export interface Occupant {
  id: string;
  name: string;
  title: string;
  party?: string;
  state?: string;
  roomIds: string[];
  searchTerms: string[];
}
