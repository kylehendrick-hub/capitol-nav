export enum BuildingId {
  RAYBURN = 'rayburn',
  LONGWORTH = 'longworth',
  CANNON = 'cannon',
  HART = 'hart',
  DIRKSEN = 'dirksen',
  RUSSELL = 'russell',
  CAPITOL = 'capitol',
  VISITOR_CENTER = 'visitor-center',
  LOC_JEFFERSON = 'loc-jefferson',
  LOC_ADAMS = 'loc-adams',
  LOC_MADISON = 'loc-madison',
}

export enum Wing {
  NORTH = 'north',
  SOUTH = 'south',
  EAST = 'east',
  WEST = 'west',
  CENTER = 'center',
}

export interface Floor {
  id: string;
  buildingId: BuildingId;
  level: number;
  label: string;
  svgPath: string;
  bounds: { width: number; height: number };
}

export interface Building {
  id: BuildingId;
  name: string;
  shortName: string;
  abbreviation: string;
  chamber: 'house' | 'senate' | 'joint' | 'other';
  floors: Floor[];
  address: string;
  coordinates: { lat: number; lng: number };
  roomPrefix: string;
  description: string;
}
