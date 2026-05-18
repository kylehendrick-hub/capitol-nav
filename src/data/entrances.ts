import { BuildingId } from '../types';

export interface Entrance {
  id: string;
  buildingId: BuildingId;
  floorId: string;
  name: string;
  description: string;
  x: number;
  y: number;
  facing: string; // "Independence Ave", "C Street", etc.
  isMain: boolean;
  securityCheckpoint: boolean;
}

export const ENTRANCES: Entrance[] = [
  // RAYBURN
  { id: 'rayburn-independence', buildingId: BuildingId.RAYBURN, floorId: 'rayburn-1', name: 'Independence Ave Entrance', description: 'Main entrance on Independence Ave SW', x: 1000, y: 1150, facing: 'Independence Ave', isMain: true, securityCheckpoint: true },
  { id: 'rayburn-south-capitol', buildingId: BuildingId.RAYBURN, floorId: 'rayburn-1', name: 'South Capitol St Entrance', description: 'East side entrance near South Capitol St', x: 1900, y: 600, facing: 'South Capitol St', isMain: false, securityCheckpoint: true },
  { id: 'rayburn-c-street', buildingId: BuildingId.RAYBURN, floorId: 'rayburn-1', name: 'C Street Entrance', description: 'North entrance on C Street SW', x: 1000, y: 100, facing: 'C Street', isMain: false, securityCheckpoint: true },
  { id: 'rayburn-garage', buildingId: BuildingId.RAYBURN, floorId: 'rayburn-b', name: 'Rayburn Garage Entrance', description: 'Basement parking garage entrance', x: 500, y: 600, facing: 'Garage', isMain: false, securityCheckpoint: false },

  // LONGWORTH
  { id: 'longworth-independence', buildingId: BuildingId.LONGWORTH, floorId: 'longworth-1', name: 'Independence Ave Entrance', description: 'Main entrance on Independence Ave SE', x: 900, y: 950, facing: 'Independence Ave', isMain: true, securityCheckpoint: true },
  { id: 'longworth-new-jersey', buildingId: BuildingId.LONGWORTH, floorId: 'longworth-1', name: 'New Jersey Ave Entrance', description: 'West entrance on New Jersey Ave', x: 100, y: 500, facing: 'New Jersey Ave', isMain: false, securityCheckpoint: true },
  { id: 'longworth-c-street', buildingId: BuildingId.LONGWORTH, floorId: 'longworth-1', name: 'C Street Entrance', description: 'North entrance on C Street SE', x: 900, y: 100, facing: 'C Street', isMain: false, securityCheckpoint: true },

  // CANNON
  { id: 'cannon-independence', buildingId: BuildingId.CANNON, floorId: 'cannon-1', name: 'Independence Ave Entrance', description: 'Main entrance on Independence Ave SE', x: 800, y: 950, facing: 'Independence Ave', isMain: true, securityCheckpoint: true },
  { id: 'cannon-new-jersey', buildingId: BuildingId.CANNON, floorId: 'cannon-1', name: 'New Jersey Ave Entrance', description: 'West entrance', x: 100, y: 500, facing: 'New Jersey Ave', isMain: false, securityCheckpoint: true },
  { id: 'cannon-first-street', buildingId: BuildingId.CANNON, floorId: 'cannon-1', name: 'First Street Entrance', description: 'East entrance on First St SE', x: 1500, y: 500, facing: 'First Street', isMain: false, securityCheckpoint: true },

  // HART
  { id: 'hart-constitution', buildingId: BuildingId.HART, floorId: 'hart-1', name: 'Constitution Ave Entrance', description: 'Main entrance on Constitution Ave NE', x: 800, y: 100, facing: 'Constitution Ave', isMain: true, securityCheckpoint: true },
  { id: 'hart-second-street', buildingId: BuildingId.HART, floorId: 'hart-1', name: 'Second Street Entrance', description: 'East entrance on Second St NE', x: 1500, y: 600, facing: 'Second Street', isMain: false, securityCheckpoint: true },
  { id: 'hart-c-street', buildingId: BuildingId.HART, floorId: 'hart-1', name: 'C Street Entrance', description: 'South entrance on C Street NE', x: 800, y: 1150, facing: 'C Street', isMain: false, securityCheckpoint: true },

  // DIRKSEN
  { id: 'dirksen-constitution', buildingId: BuildingId.DIRKSEN, floorId: 'dirksen-1', name: 'Constitution Ave Entrance', description: 'Main entrance on Constitution Ave NE', x: 800, y: 100, facing: 'Constitution Ave', isMain: true, securityCheckpoint: true },
  { id: 'dirksen-first-street', buildingId: BuildingId.DIRKSEN, floorId: 'dirksen-1', name: 'First Street Entrance', description: 'West entrance on First St NE', x: 100, y: 500, facing: 'First Street', isMain: false, securityCheckpoint: true },
  { id: 'dirksen-c-street', buildingId: BuildingId.DIRKSEN, floorId: 'dirksen-1', name: 'C Street Entrance', description: 'South entrance on C Street NE', x: 800, y: 950, facing: 'C Street', isMain: false, securityCheckpoint: true },

  // RUSSELL
  { id: 'russell-constitution', buildingId: BuildingId.RUSSELL, floorId: 'russell-1', name: 'Constitution Ave Entrance', description: 'Main entrance on Constitution Ave NE', x: 800, y: 100, facing: 'Constitution Ave', isMain: true, securityCheckpoint: true },
  { id: 'russell-delaware', buildingId: BuildingId.RUSSELL, floorId: 'russell-1', name: 'Delaware Ave Entrance', description: 'West entrance on Delaware Ave NE', x: 100, y: 500, facing: 'Delaware Ave', isMain: false, securityCheckpoint: true },
  { id: 'russell-first-street', buildingId: BuildingId.RUSSELL, floorId: 'russell-1', name: 'First Street Entrance', description: 'East entrance on First St NE', x: 1500, y: 500, facing: 'First Street', isMain: false, securityCheckpoint: true },

  // CAPITOL
  { id: 'capitol-east-front', buildingId: BuildingId.CAPITOL, floorId: 'capitol-1', name: 'East Front Entrance', description: 'Main public entrance via Capitol Visitor Center', x: 1000, y: 1350, facing: 'East Front', isMain: true, securityCheckpoint: true },
  { id: 'capitol-senate-door', buildingId: BuildingId.CAPITOL, floorId: 'capitol-1', name: 'Senate Appointment Door', description: 'North wing entrance for Senate appointments', x: 1000, y: 200, facing: 'North (Senate)', isMain: false, securityCheckpoint: true },
  { id: 'capitol-house-door', buildingId: BuildingId.CAPITOL, floorId: 'capitol-1', name: 'House Appointment Door', description: 'South wing entrance for House appointments', x: 1000, y: 1100, facing: 'South (House)', isMain: false, securityCheckpoint: true },

  // VISITOR CENTER
  { id: 'cvc-main', buildingId: BuildingId.VISITOR_CENTER, floorId: 'cvc-lower', name: 'CVC Main Entrance', description: 'Underground entrance on East Capitol grounds', x: 900, y: 950, facing: 'East Plaza', isMain: true, securityCheckpoint: true },

  // LOC JEFFERSON
  { id: 'loc-jefferson-first', buildingId: BuildingId.LOC_JEFFERSON, floorId: 'loc-jefferson-g', name: 'First Street Entrance', description: 'Main entrance on First St SE', x: 800, y: 100, facing: 'First Street', isMain: true, securityCheckpoint: true },
  { id: 'loc-jefferson-independence', buildingId: BuildingId.LOC_JEFFERSON, floorId: 'loc-jefferson-g', name: 'Independence Ave Entrance', description: 'South entrance on Independence Ave', x: 800, y: 1150, facing: 'Independence Ave', isMain: false, securityCheckpoint: true },

  // LOC ADAMS
  { id: 'loc-adams-second', buildingId: BuildingId.LOC_ADAMS, floorId: 'loc-adams-1', name: 'Second Street Entrance', description: 'Main entrance on Second St SE', x: 700, y: 100, facing: 'Second Street', isMain: true, securityCheckpoint: true },

  // LOC MADISON
  { id: 'loc-madison-independence', buildingId: BuildingId.LOC_MADISON, floorId: 'loc-madison-g', name: 'Independence Ave Entrance', description: 'Main entrance on Independence Ave SE', x: 900, y: 950, facing: 'Independence Ave', isMain: true, securityCheckpoint: true },
];

// Wing labels for each building to show on the map
export interface WingLabel {
  buildingId: BuildingId;
  floorId: string; // '*' means all floors
  label: string;
  x: number;
  y: number;
  fontSize?: number;
}

export const WING_LABELS: WingLabel[] = [
  // RAYBURN
  { buildingId: BuildingId.RAYBURN, floorId: '*', label: 'INDEPENDENCE AVE →', x: 1000, y: 1180, fontSize: 10 },
  { buildingId: BuildingId.RAYBURN, floorId: '*', label: '← C STREET', x: 1000, y: 40, fontSize: 10 },
  { buildingId: BuildingId.RAYBURN, floorId: '*', label: 'North Wing', x: 500, y: 200 },
  { buildingId: BuildingId.RAYBURN, floorId: '*', label: 'South Wing', x: 500, y: 1000 },
  { buildingId: BuildingId.RAYBURN, floorId: '*', label: 'East Wing', x: 1700, y: 600 },
  { buildingId: BuildingId.RAYBURN, floorId: '*', label: 'West Wing', x: 200, y: 600 },

  // LONGWORTH
  { buildingId: BuildingId.LONGWORTH, floorId: '*', label: 'INDEPENDENCE AVE →', x: 900, y: 980, fontSize: 10 },
  { buildingId: BuildingId.LONGWORTH, floorId: '*', label: '← C STREET', x: 900, y: 30, fontSize: 10 },
  { buildingId: BuildingId.LONGWORTH, floorId: '*', label: 'North Wing', x: 900, y: 200 },
  { buildingId: BuildingId.LONGWORTH, floorId: '*', label: 'South Wing', x: 900, y: 800 },

  // CANNON
  { buildingId: BuildingId.CANNON, floorId: '*', label: 'INDEPENDENCE AVE →', x: 800, y: 980, fontSize: 10 },
  { buildingId: BuildingId.CANNON, floorId: '*', label: 'Courtyard', x: 800, y: 500, fontSize: 11 },
  { buildingId: BuildingId.CANNON, floorId: '*', label: 'North', x: 800, y: 150 },
  { buildingId: BuildingId.CANNON, floorId: '*', label: 'South', x: 800, y: 850 },

  // HART
  { buildingId: BuildingId.HART, floorId: '*', label: 'CONSTITUTION AVE →', x: 800, y: 40, fontSize: 10 },
  { buildingId: BuildingId.HART, floorId: '*', label: '← C STREET', x: 800, y: 1180, fontSize: 10 },
  { buildingId: BuildingId.HART, floorId: '*', label: 'Atrium', x: 800, y: 600, fontSize: 11 },

  // DIRKSEN
  { buildingId: BuildingId.DIRKSEN, floorId: '*', label: 'CONSTITUTION AVE →', x: 800, y: 30, fontSize: 10 },
  { buildingId: BuildingId.DIRKSEN, floorId: '*', label: 'North Wing', x: 800, y: 200 },
  { buildingId: BuildingId.DIRKSEN, floorId: '*', label: 'South Wing', x: 800, y: 850 },

  // RUSSELL
  { buildingId: BuildingId.RUSSELL, floorId: '*', label: 'CONSTITUTION AVE →', x: 800, y: 30, fontSize: 10 },
  { buildingId: BuildingId.RUSSELL, floorId: '*', label: 'Rotunda', x: 800, y: 500, fontSize: 11 },
  { buildingId: BuildingId.RUSSELL, floorId: '*', label: 'North', x: 800, y: 150 },
  { buildingId: BuildingId.RUSSELL, floorId: '*', label: 'South', x: 800, y: 850 },

  // CAPITOL
  { buildingId: BuildingId.CAPITOL, floorId: '*', label: 'SENATE WING (North)', x: 1000, y: 200, fontSize: 12 },
  { buildingId: BuildingId.CAPITOL, floorId: '*', label: 'HOUSE WING (South)', x: 1000, y: 1200, fontSize: 12 },
  { buildingId: BuildingId.CAPITOL, floorId: '*', label: 'Rotunda', x: 1000, y: 700, fontSize: 13 },
  { buildingId: BuildingId.CAPITOL, floorId: '*', label: 'EAST FRONT →', x: 1800, y: 700, fontSize: 10 },
  { buildingId: BuildingId.CAPITOL, floorId: '*', label: '← WEST FRONT (Mall)', x: 200, y: 700, fontSize: 10 },

  // CVC
  { buildingId: BuildingId.VISITOR_CENTER, floorId: '*', label: 'TO CAPITOL →', x: 1600, y: 500, fontSize: 10 },
  { buildingId: BuildingId.VISITOR_CENTER, floorId: '*', label: '← ENTRANCE', x: 200, y: 500, fontSize: 10 },

  // LOC JEFFERSON
  { buildingId: BuildingId.LOC_JEFFERSON, floorId: '*', label: 'Reading Room', x: 800, y: 600, fontSize: 11 },
  { buildingId: BuildingId.LOC_JEFFERSON, floorId: '*', label: 'Great Hall', x: 800, y: 300, fontSize: 11 },

  // LOC MADISON
  { buildingId: BuildingId.LOC_MADISON, floorId: '*', label: 'INDEPENDENCE AVE →', x: 900, y: 980, fontSize: 10 },
];
