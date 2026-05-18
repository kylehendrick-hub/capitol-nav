import { GraphNode, NodeType } from '../types';
import { BuildingId } from '../types';

export const GRAPH_NODES: GraphNode[] = [
  // ============================================================
  // RAYBURN HOUSE OFFICE BUILDING (2000x1200)
  // ============================================================

  // --- rayburn-b (basement) ---
  { id: 'rayburn-b-n1', floorId: 'rayburn-b', buildingId: BuildingId.RAYBURN, x: 200, y: 600, type: NodeType.TUNNEL_ENTRY, label: 'Rayburn tunnel to Capitol' },
  { id: 'rayburn-b-n2', floorId: 'rayburn-b', buildingId: BuildingId.RAYBURN, x: 400, y: 600, type: NodeType.HALLWAY, label: 'Rayburn B west corridor' },
  { id: 'rayburn-b-n3', floorId: 'rayburn-b', buildingId: BuildingId.RAYBURN, x: 700, y: 600, type: NodeType.HALLWAY, label: 'Rayburn B central corridor west' },
  { id: 'rayburn-b-n4', floorId: 'rayburn-b', buildingId: BuildingId.RAYBURN, x: 1000, y: 600, type: NodeType.HALLWAY, label: 'Rayburn B central corridor' },
  { id: 'rayburn-b-n5', floorId: 'rayburn-b', buildingId: BuildingId.RAYBURN, x: 1300, y: 600, type: NodeType.HALLWAY, label: 'Rayburn B central corridor east' },
  { id: 'rayburn-b-n6', floorId: 'rayburn-b', buildingId: BuildingId.RAYBURN, x: 1600, y: 600, type: NodeType.HALLWAY, label: 'Rayburn B east corridor' },
  { id: 'rayburn-b-n7', floorId: 'rayburn-b', buildingId: BuildingId.RAYBURN, x: 1000, y: 300, type: NodeType.HALLWAY, label: 'Rayburn B north corridor' },
  { id: 'rayburn-b-n8', floorId: 'rayburn-b', buildingId: BuildingId.RAYBURN, x: 1000, y: 900, type: NodeType.HALLWAY, label: 'Rayburn B south corridor' },
  { id: 'rayburn-b-n9', floorId: 'rayburn-b', buildingId: BuildingId.RAYBURN, x: 500, y: 300, type: NodeType.ELEVATOR, label: 'Rayburn elevator bank west B' },
  { id: 'rayburn-b-n10', floorId: 'rayburn-b', buildingId: BuildingId.RAYBURN, x: 1500, y: 300, type: NodeType.ELEVATOR, label: 'Rayburn elevator bank east B' },
  { id: 'rayburn-b-n11', floorId: 'rayburn-b', buildingId: BuildingId.RAYBURN, x: 800, y: 900, type: NodeType.STAIRS, label: 'Rayburn stairwell SW B' },
  { id: 'rayburn-b-n12', floorId: 'rayburn-b', buildingId: BuildingId.RAYBURN, x: 1200, y: 900, type: NodeType.STAIRS, label: 'Rayburn stairwell SE B' },
  { id: 'rayburn-b-n13', floorId: 'rayburn-b', buildingId: BuildingId.RAYBURN, x: 1800, y: 600, type: NodeType.TUNNEL_ENTRY, label: 'Rayburn tunnel to Longworth' },
  { id: 'rayburn-b-n14', floorId: 'rayburn-b', buildingId: BuildingId.RAYBURN, x: 200, y: 400, type: NodeType.SUBWAY_STATION, label: 'Rayburn subway station' },

  // --- rayburn-1 (first floor) ---
  { id: 'rayburn-1-n1', floorId: 'rayburn-1', buildingId: BuildingId.RAYBURN, x: 200, y: 600, type: NodeType.HALLWAY, label: 'Rayburn 1 west entry hall' },
  { id: 'rayburn-1-n2', floorId: 'rayburn-1', buildingId: BuildingId.RAYBURN, x: 500, y: 600, type: NodeType.HALLWAY, label: 'Rayburn 1 west corridor' },
  { id: 'rayburn-1-n3', floorId: 'rayburn-1', buildingId: BuildingId.RAYBURN, x: 800, y: 600, type: NodeType.HALLWAY, label: 'Rayburn 1 central west' },
  { id: 'rayburn-1-n4', floorId: 'rayburn-1', buildingId: BuildingId.RAYBURN, x: 1000, y: 600, type: NodeType.HALLWAY, label: 'Rayburn 1 central' },
  { id: 'rayburn-1-n5', floorId: 'rayburn-1', buildingId: BuildingId.RAYBURN, x: 1200, y: 600, type: NodeType.HALLWAY, label: 'Rayburn 1 central east' },
  { id: 'rayburn-1-n6', floorId: 'rayburn-1', buildingId: BuildingId.RAYBURN, x: 1500, y: 600, type: NodeType.HALLWAY, label: 'Rayburn 1 east corridor' },
  { id: 'rayburn-1-n7', floorId: 'rayburn-1', buildingId: BuildingId.RAYBURN, x: 1800, y: 600, type: NodeType.HALLWAY, label: 'Rayburn 1 east end' },
  { id: 'rayburn-1-n8', floorId: 'rayburn-1', buildingId: BuildingId.RAYBURN, x: 1000, y: 200, type: NodeType.HALLWAY, label: 'Rayburn 1 north corridor' },
  { id: 'rayburn-1-n9', floorId: 'rayburn-1', buildingId: BuildingId.RAYBURN, x: 1000, y: 1000, type: NodeType.HALLWAY, label: 'Rayburn 1 south corridor' },
  { id: 'rayburn-1-n10', floorId: 'rayburn-1', buildingId: BuildingId.RAYBURN, x: 500, y: 300, type: NodeType.ELEVATOR, label: 'Rayburn elevator bank west 1' },
  { id: 'rayburn-1-n11', floorId: 'rayburn-1', buildingId: BuildingId.RAYBURN, x: 1500, y: 300, type: NodeType.ELEVATOR, label: 'Rayburn elevator bank east 1' },
  { id: 'rayburn-1-n12', floorId: 'rayburn-1', buildingId: BuildingId.RAYBURN, x: 800, y: 900, type: NodeType.STAIRS, label: 'Rayburn stairwell SW 1' },
  { id: 'rayburn-1-n13', floorId: 'rayburn-1', buildingId: BuildingId.RAYBURN, x: 1200, y: 900, type: NodeType.STAIRS, label: 'Rayburn stairwell SE 1' },
  { id: 'rayburn-1-n14', floorId: 'rayburn-1', buildingId: BuildingId.RAYBURN, x: 200, y: 300, type: NodeType.BUILDING_ENTRANCE, label: 'Rayburn main entrance' },

  // --- rayburn-2 (second floor) ---
  { id: 'rayburn-2-n1', floorId: 'rayburn-2', buildingId: BuildingId.RAYBURN, x: 300, y: 600, type: NodeType.HALLWAY, label: 'Rayburn 2 west corridor' },
  { id: 'rayburn-2-n2', floorId: 'rayburn-2', buildingId: BuildingId.RAYBURN, x: 600, y: 600, type: NodeType.HALLWAY, label: 'Rayburn 2 west-central' },
  { id: 'rayburn-2-n3', floorId: 'rayburn-2', buildingId: BuildingId.RAYBURN, x: 1000, y: 600, type: NodeType.HALLWAY, label: 'Rayburn 2 central' },
  { id: 'rayburn-2-n4', floorId: 'rayburn-2', buildingId: BuildingId.RAYBURN, x: 1400, y: 600, type: NodeType.HALLWAY, label: 'Rayburn 2 east-central' },
  { id: 'rayburn-2-n5', floorId: 'rayburn-2', buildingId: BuildingId.RAYBURN, x: 1700, y: 600, type: NodeType.HALLWAY, label: 'Rayburn 2 east corridor' },
  { id: 'rayburn-2-n6', floorId: 'rayburn-2', buildingId: BuildingId.RAYBURN, x: 1000, y: 200, type: NodeType.HALLWAY, label: 'Rayburn 2 north corridor' },
  { id: 'rayburn-2-n7', floorId: 'rayburn-2', buildingId: BuildingId.RAYBURN, x: 1000, y: 1000, type: NodeType.HALLWAY, label: 'Rayburn 2 south corridor' },
  { id: 'rayburn-2-n8', floorId: 'rayburn-2', buildingId: BuildingId.RAYBURN, x: 500, y: 300, type: NodeType.ELEVATOR, label: 'Rayburn elevator bank west 2' },
  { id: 'rayburn-2-n9', floorId: 'rayburn-2', buildingId: BuildingId.RAYBURN, x: 1500, y: 300, type: NodeType.ELEVATOR, label: 'Rayburn elevator bank east 2' },
  { id: 'rayburn-2-n10', floorId: 'rayburn-2', buildingId: BuildingId.RAYBURN, x: 800, y: 900, type: NodeType.STAIRS, label: 'Rayburn stairwell SW 2' },
  { id: 'rayburn-2-n11', floorId: 'rayburn-2', buildingId: BuildingId.RAYBURN, x: 1200, y: 900, type: NodeType.STAIRS, label: 'Rayburn stairwell SE 2' },

  // --- rayburn-3 (third floor) ---
  { id: 'rayburn-3-n1', floorId: 'rayburn-3', buildingId: BuildingId.RAYBURN, x: 300, y: 600, type: NodeType.HALLWAY, label: 'Rayburn 3 west corridor' },
  { id: 'rayburn-3-n2', floorId: 'rayburn-3', buildingId: BuildingId.RAYBURN, x: 600, y: 600, type: NodeType.HALLWAY, label: 'Rayburn 3 west-central' },
  { id: 'rayburn-3-n3', floorId: 'rayburn-3', buildingId: BuildingId.RAYBURN, x: 1000, y: 600, type: NodeType.HALLWAY, label: 'Rayburn 3 central' },
  { id: 'rayburn-3-n4', floorId: 'rayburn-3', buildingId: BuildingId.RAYBURN, x: 1400, y: 600, type: NodeType.HALLWAY, label: 'Rayburn 3 east-central' },
  { id: 'rayburn-3-n5', floorId: 'rayburn-3', buildingId: BuildingId.RAYBURN, x: 1700, y: 600, type: NodeType.HALLWAY, label: 'Rayburn 3 east corridor' },
  { id: 'rayburn-3-n6', floorId: 'rayburn-3', buildingId: BuildingId.RAYBURN, x: 1000, y: 200, type: NodeType.HALLWAY, label: 'Rayburn 3 north corridor' },
  { id: 'rayburn-3-n7', floorId: 'rayburn-3', buildingId: BuildingId.RAYBURN, x: 1000, y: 1000, type: NodeType.HALLWAY, label: 'Rayburn 3 south corridor' },
  { id: 'rayburn-3-n8', floorId: 'rayburn-3', buildingId: BuildingId.RAYBURN, x: 500, y: 300, type: NodeType.ELEVATOR, label: 'Rayburn elevator bank west 3' },
  { id: 'rayburn-3-n9', floorId: 'rayburn-3', buildingId: BuildingId.RAYBURN, x: 1500, y: 300, type: NodeType.ELEVATOR, label: 'Rayburn elevator bank east 3' },
  { id: 'rayburn-3-n10', floorId: 'rayburn-3', buildingId: BuildingId.RAYBURN, x: 800, y: 900, type: NodeType.STAIRS, label: 'Rayburn stairwell SW 3' },
  { id: 'rayburn-3-n11', floorId: 'rayburn-3', buildingId: BuildingId.RAYBURN, x: 1200, y: 900, type: NodeType.STAIRS, label: 'Rayburn stairwell SE 3' },

  // ============================================================
  // LONGWORTH HOUSE OFFICE BUILDING (1800x1000)
  // ============================================================

  // --- longworth-b (basement) ---
  { id: 'longworth-b-n1', floorId: 'longworth-b', buildingId: BuildingId.LONGWORTH, x: 100, y: 500, type: NodeType.TUNNEL_ENTRY, label: 'Longworth tunnel to Rayburn' },
  { id: 'longworth-b-n2', floorId: 'longworth-b', buildingId: BuildingId.LONGWORTH, x: 350, y: 500, type: NodeType.HALLWAY, label: 'Longworth B west corridor' },
  { id: 'longworth-b-n3', floorId: 'longworth-b', buildingId: BuildingId.LONGWORTH, x: 600, y: 500, type: NodeType.HALLWAY, label: 'Longworth B west-central' },
  { id: 'longworth-b-n4', floorId: 'longworth-b', buildingId: BuildingId.LONGWORTH, x: 900, y: 500, type: NodeType.HALLWAY, label: 'Longworth B central' },
  { id: 'longworth-b-n5', floorId: 'longworth-b', buildingId: BuildingId.LONGWORTH, x: 1200, y: 500, type: NodeType.HALLWAY, label: 'Longworth B east-central' },
  { id: 'longworth-b-n6', floorId: 'longworth-b', buildingId: BuildingId.LONGWORTH, x: 1500, y: 500, type: NodeType.HALLWAY, label: 'Longworth B east corridor' },
  { id: 'longworth-b-n7', floorId: 'longworth-b', buildingId: BuildingId.LONGWORTH, x: 900, y: 200, type: NodeType.HALLWAY, label: 'Longworth B north corridor' },
  { id: 'longworth-b-n8', floorId: 'longworth-b', buildingId: BuildingId.LONGWORTH, x: 900, y: 800, type: NodeType.HALLWAY, label: 'Longworth B south corridor' },
  { id: 'longworth-b-n9', floorId: 'longworth-b', buildingId: BuildingId.LONGWORTH, x: 450, y: 250, type: NodeType.ELEVATOR, label: 'Longworth elevator west B' },
  { id: 'longworth-b-n10', floorId: 'longworth-b', buildingId: BuildingId.LONGWORTH, x: 1350, y: 250, type: NodeType.ELEVATOR, label: 'Longworth elevator east B' },
  { id: 'longworth-b-n11', floorId: 'longworth-b', buildingId: BuildingId.LONGWORTH, x: 700, y: 800, type: NodeType.STAIRS, label: 'Longworth stairwell SW B' },
  { id: 'longworth-b-n12', floorId: 'longworth-b', buildingId: BuildingId.LONGWORTH, x: 1100, y: 800, type: NodeType.STAIRS, label: 'Longworth stairwell SE B' },
  { id: 'longworth-b-n13', floorId: 'longworth-b', buildingId: BuildingId.LONGWORTH, x: 1700, y: 500, type: NodeType.TUNNEL_ENTRY, label: 'Longworth tunnel to Cannon' },
  { id: 'longworth-b-n14', floorId: 'longworth-b', buildingId: BuildingId.LONGWORTH, x: 900, y: 100, type: NodeType.TUNNEL_ENTRY, label: 'Longworth tunnel to Capitol' },

  // --- longworth-1 (first floor) ---
  { id: 'longworth-1-n1', floorId: 'longworth-1', buildingId: BuildingId.LONGWORTH, x: 200, y: 500, type: NodeType.HALLWAY, label: 'Longworth 1 west corridor' },
  { id: 'longworth-1-n2', floorId: 'longworth-1', buildingId: BuildingId.LONGWORTH, x: 500, y: 500, type: NodeType.HALLWAY, label: 'Longworth 1 west-central' },
  { id: 'longworth-1-n3', floorId: 'longworth-1', buildingId: BuildingId.LONGWORTH, x: 900, y: 500, type: NodeType.HALLWAY, label: 'Longworth 1 central' },
  { id: 'longworth-1-n4', floorId: 'longworth-1', buildingId: BuildingId.LONGWORTH, x: 1200, y: 500, type: NodeType.HALLWAY, label: 'Longworth 1 east-central' },
  { id: 'longworth-1-n5', floorId: 'longworth-1', buildingId: BuildingId.LONGWORTH, x: 1600, y: 500, type: NodeType.HALLWAY, label: 'Longworth 1 east corridor' },
  { id: 'longworth-1-n6', floorId: 'longworth-1', buildingId: BuildingId.LONGWORTH, x: 900, y: 200, type: NodeType.HALLWAY, label: 'Longworth 1 north corridor' },
  { id: 'longworth-1-n7', floorId: 'longworth-1', buildingId: BuildingId.LONGWORTH, x: 900, y: 800, type: NodeType.HALLWAY, label: 'Longworth 1 south corridor' },
  { id: 'longworth-1-n8', floorId: 'longworth-1', buildingId: BuildingId.LONGWORTH, x: 450, y: 250, type: NodeType.ELEVATOR, label: 'Longworth elevator west 1' },
  { id: 'longworth-1-n9', floorId: 'longworth-1', buildingId: BuildingId.LONGWORTH, x: 1350, y: 250, type: NodeType.ELEVATOR, label: 'Longworth elevator east 1' },
  { id: 'longworth-1-n10', floorId: 'longworth-1', buildingId: BuildingId.LONGWORTH, x: 700, y: 800, type: NodeType.STAIRS, label: 'Longworth stairwell SW 1' },
  { id: 'longworth-1-n11', floorId: 'longworth-1', buildingId: BuildingId.LONGWORTH, x: 1100, y: 800, type: NodeType.STAIRS, label: 'Longworth stairwell SE 1' },
  { id: 'longworth-1-n12', floorId: 'longworth-1', buildingId: BuildingId.LONGWORTH, x: 200, y: 200, type: NodeType.BUILDING_ENTRANCE, label: 'Longworth main entrance' },

  // --- longworth-2 (second floor) ---
  { id: 'longworth-2-n1', floorId: 'longworth-2', buildingId: BuildingId.LONGWORTH, x: 200, y: 500, type: NodeType.HALLWAY, label: 'Longworth 2 west corridor' },
  { id: 'longworth-2-n2', floorId: 'longworth-2', buildingId: BuildingId.LONGWORTH, x: 500, y: 500, type: NodeType.HALLWAY, label: 'Longworth 2 west-central' },
  { id: 'longworth-2-n3', floorId: 'longworth-2', buildingId: BuildingId.LONGWORTH, x: 900, y: 500, type: NodeType.HALLWAY, label: 'Longworth 2 central' },
  { id: 'longworth-2-n4', floorId: 'longworth-2', buildingId: BuildingId.LONGWORTH, x: 1200, y: 500, type: NodeType.HALLWAY, label: 'Longworth 2 east-central' },
  { id: 'longworth-2-n5', floorId: 'longworth-2', buildingId: BuildingId.LONGWORTH, x: 1600, y: 500, type: NodeType.HALLWAY, label: 'Longworth 2 east corridor' },
  { id: 'longworth-2-n6', floorId: 'longworth-2', buildingId: BuildingId.LONGWORTH, x: 900, y: 200, type: NodeType.HALLWAY, label: 'Longworth 2 north corridor' },
  { id: 'longworth-2-n7', floorId: 'longworth-2', buildingId: BuildingId.LONGWORTH, x: 900, y: 800, type: NodeType.HALLWAY, label: 'Longworth 2 south corridor' },
  { id: 'longworth-2-n8', floorId: 'longworth-2', buildingId: BuildingId.LONGWORTH, x: 450, y: 250, type: NodeType.ELEVATOR, label: 'Longworth elevator west 2' },
  { id: 'longworth-2-n9', floorId: 'longworth-2', buildingId: BuildingId.LONGWORTH, x: 1350, y: 250, type: NodeType.ELEVATOR, label: 'Longworth elevator east 2' },
  { id: 'longworth-2-n10', floorId: 'longworth-2', buildingId: BuildingId.LONGWORTH, x: 700, y: 800, type: NodeType.STAIRS, label: 'Longworth stairwell SW 2' },
  { id: 'longworth-2-n11', floorId: 'longworth-2', buildingId: BuildingId.LONGWORTH, x: 1100, y: 800, type: NodeType.STAIRS, label: 'Longworth stairwell SE 2' },

  // ============================================================
  // CANNON HOUSE OFFICE BUILDING (1600x1000)
  // ============================================================

  // --- cannon-b (basement) ---
  { id: 'cannon-b-n1', floorId: 'cannon-b', buildingId: BuildingId.CANNON, x: 100, y: 500, type: NodeType.TUNNEL_ENTRY, label: 'Cannon tunnel to Longworth' },
  { id: 'cannon-b-n2', floorId: 'cannon-b', buildingId: BuildingId.CANNON, x: 350, y: 500, type: NodeType.HALLWAY, label: 'Cannon B west corridor' },
  { id: 'cannon-b-n3', floorId: 'cannon-b', buildingId: BuildingId.CANNON, x: 600, y: 500, type: NodeType.HALLWAY, label: 'Cannon B west-central' },
  { id: 'cannon-b-n4', floorId: 'cannon-b', buildingId: BuildingId.CANNON, x: 800, y: 500, type: NodeType.HALLWAY, label: 'Cannon B central' },
  { id: 'cannon-b-n5', floorId: 'cannon-b', buildingId: BuildingId.CANNON, x: 1050, y: 500, type: NodeType.HALLWAY, label: 'Cannon B east-central' },
  { id: 'cannon-b-n6', floorId: 'cannon-b', buildingId: BuildingId.CANNON, x: 1300, y: 500, type: NodeType.HALLWAY, label: 'Cannon B east corridor' },
  { id: 'cannon-b-n7', floorId: 'cannon-b', buildingId: BuildingId.CANNON, x: 800, y: 200, type: NodeType.HALLWAY, label: 'Cannon B north corridor' },
  { id: 'cannon-b-n8', floorId: 'cannon-b', buildingId: BuildingId.CANNON, x: 800, y: 800, type: NodeType.HALLWAY, label: 'Cannon B south corridor' },
  { id: 'cannon-b-n9', floorId: 'cannon-b', buildingId: BuildingId.CANNON, x: 400, y: 250, type: NodeType.ELEVATOR, label: 'Cannon elevator west B' },
  { id: 'cannon-b-n10', floorId: 'cannon-b', buildingId: BuildingId.CANNON, x: 1200, y: 250, type: NodeType.ELEVATOR, label: 'Cannon elevator east B' },
  { id: 'cannon-b-n11', floorId: 'cannon-b', buildingId: BuildingId.CANNON, x: 600, y: 800, type: NodeType.STAIRS, label: 'Cannon stairwell SW B' },
  { id: 'cannon-b-n12', floorId: 'cannon-b', buildingId: BuildingId.CANNON, x: 1050, y: 800, type: NodeType.STAIRS, label: 'Cannon stairwell SE B' },
  { id: 'cannon-b-n13', floorId: 'cannon-b', buildingId: BuildingId.CANNON, x: 800, y: 100, type: NodeType.TUNNEL_ENTRY, label: 'Cannon tunnel to Capitol' },
  { id: 'cannon-b-n14', floorId: 'cannon-b', buildingId: BuildingId.CANNON, x: 1500, y: 500, type: NodeType.TUNNEL_ENTRY, label: 'Cannon tunnel to LOC Jefferson' },

  // --- cannon-1 (first floor) ---
  { id: 'cannon-1-n1', floorId: 'cannon-1', buildingId: BuildingId.CANNON, x: 200, y: 500, type: NodeType.HALLWAY, label: 'Cannon 1 west corridor' },
  { id: 'cannon-1-n2', floorId: 'cannon-1', buildingId: BuildingId.CANNON, x: 500, y: 500, type: NodeType.HALLWAY, label: 'Cannon 1 west-central' },
  { id: 'cannon-1-n3', floorId: 'cannon-1', buildingId: BuildingId.CANNON, x: 800, y: 500, type: NodeType.HALLWAY, label: 'Cannon 1 central' },
  { id: 'cannon-1-n4', floorId: 'cannon-1', buildingId: BuildingId.CANNON, x: 1100, y: 500, type: NodeType.HALLWAY, label: 'Cannon 1 east-central' },
  { id: 'cannon-1-n5', floorId: 'cannon-1', buildingId: BuildingId.CANNON, x: 1400, y: 500, type: NodeType.HALLWAY, label: 'Cannon 1 east corridor' },
  { id: 'cannon-1-n6', floorId: 'cannon-1', buildingId: BuildingId.CANNON, x: 800, y: 200, type: NodeType.HALLWAY, label: 'Cannon 1 north corridor' },
  { id: 'cannon-1-n7', floorId: 'cannon-1', buildingId: BuildingId.CANNON, x: 800, y: 800, type: NodeType.HALLWAY, label: 'Cannon 1 south corridor' },
  { id: 'cannon-1-n8', floorId: 'cannon-1', buildingId: BuildingId.CANNON, x: 400, y: 250, type: NodeType.ELEVATOR, label: 'Cannon elevator west 1' },
  { id: 'cannon-1-n9', floorId: 'cannon-1', buildingId: BuildingId.CANNON, x: 1200, y: 250, type: NodeType.ELEVATOR, label: 'Cannon elevator east 1' },
  { id: 'cannon-1-n10', floorId: 'cannon-1', buildingId: BuildingId.CANNON, x: 600, y: 800, type: NodeType.STAIRS, label: 'Cannon stairwell SW 1' },
  { id: 'cannon-1-n11', floorId: 'cannon-1', buildingId: BuildingId.CANNON, x: 1050, y: 800, type: NodeType.STAIRS, label: 'Cannon stairwell SE 1' },
  { id: 'cannon-1-n12', floorId: 'cannon-1', buildingId: BuildingId.CANNON, x: 200, y: 200, type: NodeType.BUILDING_ENTRANCE, label: 'Cannon main entrance' },

  // --- cannon-2 ---
  { id: 'cannon-2-n1', floorId: 'cannon-2', buildingId: BuildingId.CANNON, x: 200, y: 500, type: NodeType.HALLWAY, label: 'Cannon 2 west corridor' },
  { id: 'cannon-2-n2', floorId: 'cannon-2', buildingId: BuildingId.CANNON, x: 500, y: 500, type: NodeType.HALLWAY, label: 'Cannon 2 west-central' },
  { id: 'cannon-2-n3', floorId: 'cannon-2', buildingId: BuildingId.CANNON, x: 800, y: 500, type: NodeType.HALLWAY, label: 'Cannon 2 central' },
  { id: 'cannon-2-n4', floorId: 'cannon-2', buildingId: BuildingId.CANNON, x: 1100, y: 500, type: NodeType.HALLWAY, label: 'Cannon 2 east-central' },
  { id: 'cannon-2-n5', floorId: 'cannon-2', buildingId: BuildingId.CANNON, x: 1400, y: 500, type: NodeType.HALLWAY, label: 'Cannon 2 east corridor' },
  { id: 'cannon-2-n6', floorId: 'cannon-2', buildingId: BuildingId.CANNON, x: 800, y: 200, type: NodeType.HALLWAY, label: 'Cannon 2 north corridor' },
  { id: 'cannon-2-n7', floorId: 'cannon-2', buildingId: BuildingId.CANNON, x: 800, y: 800, type: NodeType.HALLWAY, label: 'Cannon 2 south corridor' },
  { id: 'cannon-2-n8', floorId: 'cannon-2', buildingId: BuildingId.CANNON, x: 400, y: 250, type: NodeType.ELEVATOR, label: 'Cannon elevator west 2' },
  { id: 'cannon-2-n9', floorId: 'cannon-2', buildingId: BuildingId.CANNON, x: 1200, y: 250, type: NodeType.ELEVATOR, label: 'Cannon elevator east 2' },
  { id: 'cannon-2-n10', floorId: 'cannon-2', buildingId: BuildingId.CANNON, x: 600, y: 800, type: NodeType.STAIRS, label: 'Cannon stairwell SW 2' },
  { id: 'cannon-2-n11', floorId: 'cannon-2', buildingId: BuildingId.CANNON, x: 1050, y: 800, type: NodeType.STAIRS, label: 'Cannon stairwell SE 2' },

  // --- cannon-3 ---
  { id: 'cannon-3-n1', floorId: 'cannon-3', buildingId: BuildingId.CANNON, x: 200, y: 500, type: NodeType.HALLWAY, label: 'Cannon 3 west corridor' },
  { id: 'cannon-3-n2', floorId: 'cannon-3', buildingId: BuildingId.CANNON, x: 500, y: 500, type: NodeType.HALLWAY, label: 'Cannon 3 west-central' },
  { id: 'cannon-3-n3', floorId: 'cannon-3', buildingId: BuildingId.CANNON, x: 800, y: 500, type: NodeType.HALLWAY, label: 'Cannon 3 central' },
  { id: 'cannon-3-n4', floorId: 'cannon-3', buildingId: BuildingId.CANNON, x: 1100, y: 500, type: NodeType.HALLWAY, label: 'Cannon 3 east-central' },
  { id: 'cannon-3-n5', floorId: 'cannon-3', buildingId: BuildingId.CANNON, x: 1400, y: 500, type: NodeType.HALLWAY, label: 'Cannon 3 east corridor' },
  { id: 'cannon-3-n6', floorId: 'cannon-3', buildingId: BuildingId.CANNON, x: 400, y: 250, type: NodeType.ELEVATOR, label: 'Cannon elevator west 3' },
  { id: 'cannon-3-n7', floorId: 'cannon-3', buildingId: BuildingId.CANNON, x: 1200, y: 250, type: NodeType.ELEVATOR, label: 'Cannon elevator east 3' },
  { id: 'cannon-3-n8', floorId: 'cannon-3', buildingId: BuildingId.CANNON, x: 600, y: 800, type: NodeType.STAIRS, label: 'Cannon stairwell SW 3' },
  { id: 'cannon-3-n9', floorId: 'cannon-3', buildingId: BuildingId.CANNON, x: 1050, y: 800, type: NodeType.STAIRS, label: 'Cannon stairwell SE 3' },

  // --- cannon-4 ---
  { id: 'cannon-4-n1', floorId: 'cannon-4', buildingId: BuildingId.CANNON, x: 300, y: 500, type: NodeType.HALLWAY, label: 'Cannon 4 west corridor' },
  { id: 'cannon-4-n2', floorId: 'cannon-4', buildingId: BuildingId.CANNON, x: 800, y: 500, type: NodeType.HALLWAY, label: 'Cannon 4 central' },
  { id: 'cannon-4-n3', floorId: 'cannon-4', buildingId: BuildingId.CANNON, x: 1300, y: 500, type: NodeType.HALLWAY, label: 'Cannon 4 east corridor' },
  { id: 'cannon-4-n4', floorId: 'cannon-4', buildingId: BuildingId.CANNON, x: 400, y: 250, type: NodeType.ELEVATOR, label: 'Cannon elevator west 4' },
  { id: 'cannon-4-n5', floorId: 'cannon-4', buildingId: BuildingId.CANNON, x: 1200, y: 250, type: NodeType.ELEVATOR, label: 'Cannon elevator east 4' },
  { id: 'cannon-4-n6', floorId: 'cannon-4', buildingId: BuildingId.CANNON, x: 600, y: 800, type: NodeType.STAIRS, label: 'Cannon stairwell SW 4' },
  { id: 'cannon-4-n7', floorId: 'cannon-4', buildingId: BuildingId.CANNON, x: 1050, y: 800, type: NodeType.STAIRS, label: 'Cannon stairwell SE 4' },

  // --- cannon-5 ---
  { id: 'cannon-5-n1', floorId: 'cannon-5', buildingId: BuildingId.CANNON, x: 300, y: 500, type: NodeType.HALLWAY, label: 'Cannon 5 west corridor' },
  { id: 'cannon-5-n2', floorId: 'cannon-5', buildingId: BuildingId.CANNON, x: 800, y: 500, type: NodeType.HALLWAY, label: 'Cannon 5 central' },
  { id: 'cannon-5-n3', floorId: 'cannon-5', buildingId: BuildingId.CANNON, x: 1300, y: 500, type: NodeType.HALLWAY, label: 'Cannon 5 east corridor' },
  { id: 'cannon-5-n4', floorId: 'cannon-5', buildingId: BuildingId.CANNON, x: 400, y: 250, type: NodeType.ELEVATOR, label: 'Cannon elevator west 5' },
  { id: 'cannon-5-n5', floorId: 'cannon-5', buildingId: BuildingId.CANNON, x: 1200, y: 250, type: NodeType.ELEVATOR, label: 'Cannon elevator east 5' },
  { id: 'cannon-5-n6', floorId: 'cannon-5', buildingId: BuildingId.CANNON, x: 600, y: 800, type: NodeType.STAIRS, label: 'Cannon stairwell SW 5' },
  { id: 'cannon-5-n7', floorId: 'cannon-5', buildingId: BuildingId.CANNON, x: 1050, y: 800, type: NodeType.STAIRS, label: 'Cannon stairwell SE 5' },

  // ============================================================
  // HART SENATE OFFICE BUILDING (1600x1200)
  // ============================================================

  // --- hart-b (basement) ---
  { id: 'hart-b-n1', floorId: 'hart-b', buildingId: BuildingId.HART, x: 100, y: 600, type: NodeType.TUNNEL_ENTRY, label: 'Hart tunnel to Dirksen' },
  { id: 'hart-b-n2', floorId: 'hart-b', buildingId: BuildingId.HART, x: 350, y: 600, type: NodeType.HALLWAY, label: 'Hart B west corridor' },
  { id: 'hart-b-n3', floorId: 'hart-b', buildingId: BuildingId.HART, x: 600, y: 600, type: NodeType.HALLWAY, label: 'Hart B west-central' },
  { id: 'hart-b-n4', floorId: 'hart-b', buildingId: BuildingId.HART, x: 800, y: 600, type: NodeType.HALLWAY, label: 'Hart B central' },
  { id: 'hart-b-n5', floorId: 'hart-b', buildingId: BuildingId.HART, x: 1050, y: 600, type: NodeType.HALLWAY, label: 'Hart B east-central' },
  { id: 'hart-b-n6', floorId: 'hart-b', buildingId: BuildingId.HART, x: 1300, y: 600, type: NodeType.HALLWAY, label: 'Hart B east corridor' },
  { id: 'hart-b-n7', floorId: 'hart-b', buildingId: BuildingId.HART, x: 800, y: 300, type: NodeType.HALLWAY, label: 'Hart B north corridor' },
  { id: 'hart-b-n8', floorId: 'hart-b', buildingId: BuildingId.HART, x: 800, y: 900, type: NodeType.HALLWAY, label: 'Hart B south corridor' },
  { id: 'hart-b-n9', floorId: 'hart-b', buildingId: BuildingId.HART, x: 400, y: 300, type: NodeType.ELEVATOR, label: 'Hart elevator west B' },
  { id: 'hart-b-n10', floorId: 'hart-b', buildingId: BuildingId.HART, x: 1200, y: 300, type: NodeType.ELEVATOR, label: 'Hart elevator east B' },
  { id: 'hart-b-n11', floorId: 'hart-b', buildingId: BuildingId.HART, x: 600, y: 900, type: NodeType.STAIRS, label: 'Hart stairwell SW B' },
  { id: 'hart-b-n12', floorId: 'hart-b', buildingId: BuildingId.HART, x: 1050, y: 900, type: NodeType.STAIRS, label: 'Hart stairwell SE B' },

  // --- hart-1 (first floor) ---
  { id: 'hart-1-n1', floorId: 'hart-1', buildingId: BuildingId.HART, x: 200, y: 600, type: NodeType.HALLWAY, label: 'Hart 1 west corridor' },
  { id: 'hart-1-n2', floorId: 'hart-1', buildingId: BuildingId.HART, x: 500, y: 600, type: NodeType.HALLWAY, label: 'Hart 1 west-central' },
  { id: 'hart-1-n3', floorId: 'hart-1', buildingId: BuildingId.HART, x: 800, y: 600, type: NodeType.HALLWAY, label: 'Hart 1 central atrium' },
  { id: 'hart-1-n4', floorId: 'hart-1', buildingId: BuildingId.HART, x: 1100, y: 600, type: NodeType.HALLWAY, label: 'Hart 1 east-central' },
  { id: 'hart-1-n5', floorId: 'hart-1', buildingId: BuildingId.HART, x: 1400, y: 600, type: NodeType.HALLWAY, label: 'Hart 1 east corridor' },
  { id: 'hart-1-n6', floorId: 'hart-1', buildingId: BuildingId.HART, x: 800, y: 250, type: NodeType.HALLWAY, label: 'Hart 1 north corridor' },
  { id: 'hart-1-n7', floorId: 'hart-1', buildingId: BuildingId.HART, x: 800, y: 950, type: NodeType.HALLWAY, label: 'Hart 1 south corridor' },
  { id: 'hart-1-n8', floorId: 'hart-1', buildingId: BuildingId.HART, x: 400, y: 300, type: NodeType.ELEVATOR, label: 'Hart elevator west 1' },
  { id: 'hart-1-n9', floorId: 'hart-1', buildingId: BuildingId.HART, x: 1200, y: 300, type: NodeType.ELEVATOR, label: 'Hart elevator east 1' },
  { id: 'hart-1-n10', floorId: 'hart-1', buildingId: BuildingId.HART, x: 600, y: 900, type: NodeType.STAIRS, label: 'Hart stairwell SW 1' },
  { id: 'hart-1-n11', floorId: 'hart-1', buildingId: BuildingId.HART, x: 1050, y: 900, type: NodeType.STAIRS, label: 'Hart stairwell SE 1' },
  { id: 'hart-1-n12', floorId: 'hart-1', buildingId: BuildingId.HART, x: 200, y: 300, type: NodeType.BUILDING_ENTRANCE, label: 'Hart main entrance' },

  // --- hart-2 ---
  { id: 'hart-2-n1', floorId: 'hart-2', buildingId: BuildingId.HART, x: 200, y: 600, type: NodeType.HALLWAY, label: 'Hart 2 west corridor' },
  { id: 'hart-2-n2', floorId: 'hart-2', buildingId: BuildingId.HART, x: 500, y: 600, type: NodeType.HALLWAY, label: 'Hart 2 west-central' },
  { id: 'hart-2-n3', floorId: 'hart-2', buildingId: BuildingId.HART, x: 800, y: 600, type: NodeType.HALLWAY, label: 'Hart 2 central' },
  { id: 'hart-2-n4', floorId: 'hart-2', buildingId: BuildingId.HART, x: 1100, y: 600, type: NodeType.HALLWAY, label: 'Hart 2 east-central' },
  { id: 'hart-2-n5', floorId: 'hart-2', buildingId: BuildingId.HART, x: 1400, y: 600, type: NodeType.HALLWAY, label: 'Hart 2 east corridor' },
  { id: 'hart-2-n6', floorId: 'hart-2', buildingId: BuildingId.HART, x: 400, y: 300, type: NodeType.ELEVATOR, label: 'Hart elevator west 2' },
  { id: 'hart-2-n7', floorId: 'hart-2', buildingId: BuildingId.HART, x: 1200, y: 300, type: NodeType.ELEVATOR, label: 'Hart elevator east 2' },
  { id: 'hart-2-n8', floorId: 'hart-2', buildingId: BuildingId.HART, x: 600, y: 900, type: NodeType.STAIRS, label: 'Hart stairwell SW 2' },
  { id: 'hart-2-n9', floorId: 'hart-2', buildingId: BuildingId.HART, x: 1050, y: 900, type: NodeType.STAIRS, label: 'Hart stairwell SE 2' },

  // --- hart-3 ---
  { id: 'hart-3-n1', floorId: 'hart-3', buildingId: BuildingId.HART, x: 200, y: 600, type: NodeType.HALLWAY, label: 'Hart 3 west corridor' },
  { id: 'hart-3-n2', floorId: 'hart-3', buildingId: BuildingId.HART, x: 500, y: 600, type: NodeType.HALLWAY, label: 'Hart 3 west-central' },
  { id: 'hart-3-n3', floorId: 'hart-3', buildingId: BuildingId.HART, x: 800, y: 600, type: NodeType.HALLWAY, label: 'Hart 3 central' },
  { id: 'hart-3-n4', floorId: 'hart-3', buildingId: BuildingId.HART, x: 1100, y: 600, type: NodeType.HALLWAY, label: 'Hart 3 east-central' },
  { id: 'hart-3-n5', floorId: 'hart-3', buildingId: BuildingId.HART, x: 1400, y: 600, type: NodeType.HALLWAY, label: 'Hart 3 east corridor' },
  { id: 'hart-3-n6', floorId: 'hart-3', buildingId: BuildingId.HART, x: 400, y: 300, type: NodeType.ELEVATOR, label: 'Hart elevator west 3' },
  { id: 'hart-3-n7', floorId: 'hart-3', buildingId: BuildingId.HART, x: 1200, y: 300, type: NodeType.ELEVATOR, label: 'Hart elevator east 3' },
  { id: 'hart-3-n8', floorId: 'hart-3', buildingId: BuildingId.HART, x: 600, y: 900, type: NodeType.STAIRS, label: 'Hart stairwell SW 3' },
  { id: 'hart-3-n9', floorId: 'hart-3', buildingId: BuildingId.HART, x: 1050, y: 900, type: NodeType.STAIRS, label: 'Hart stairwell SE 3' },

  // --- hart-4 ---
  { id: 'hart-4-n1', floorId: 'hart-4', buildingId: BuildingId.HART, x: 300, y: 600, type: NodeType.HALLWAY, label: 'Hart 4 west corridor' },
  { id: 'hart-4-n2', floorId: 'hart-4', buildingId: BuildingId.HART, x: 800, y: 600, type: NodeType.HALLWAY, label: 'Hart 4 central' },
  { id: 'hart-4-n3', floorId: 'hart-4', buildingId: BuildingId.HART, x: 1300, y: 600, type: NodeType.HALLWAY, label: 'Hart 4 east corridor' },
  { id: 'hart-4-n4', floorId: 'hart-4', buildingId: BuildingId.HART, x: 400, y: 300, type: NodeType.ELEVATOR, label: 'Hart elevator west 4' },
  { id: 'hart-4-n5', floorId: 'hart-4', buildingId: BuildingId.HART, x: 1200, y: 300, type: NodeType.ELEVATOR, label: 'Hart elevator east 4' },
  { id: 'hart-4-n6', floorId: 'hart-4', buildingId: BuildingId.HART, x: 600, y: 900, type: NodeType.STAIRS, label: 'Hart stairwell SW 4' },
  { id: 'hart-4-n7', floorId: 'hart-4', buildingId: BuildingId.HART, x: 1050, y: 900, type: NodeType.STAIRS, label: 'Hart stairwell SE 4' },

  // --- hart-5 ---
  { id: 'hart-5-n1', floorId: 'hart-5', buildingId: BuildingId.HART, x: 300, y: 600, type: NodeType.HALLWAY, label: 'Hart 5 west corridor' },
  { id: 'hart-5-n2', floorId: 'hart-5', buildingId: BuildingId.HART, x: 800, y: 600, type: NodeType.HALLWAY, label: 'Hart 5 central' },
  { id: 'hart-5-n3', floorId: 'hart-5', buildingId: BuildingId.HART, x: 1300, y: 600, type: NodeType.HALLWAY, label: 'Hart 5 east corridor' },
  { id: 'hart-5-n4', floorId: 'hart-5', buildingId: BuildingId.HART, x: 400, y: 300, type: NodeType.ELEVATOR, label: 'Hart elevator west 5' },
  { id: 'hart-5-n5', floorId: 'hart-5', buildingId: BuildingId.HART, x: 1200, y: 300, type: NodeType.ELEVATOR, label: 'Hart elevator east 5' },
  { id: 'hart-5-n6', floorId: 'hart-5', buildingId: BuildingId.HART, x: 600, y: 900, type: NodeType.STAIRS, label: 'Hart stairwell SW 5' },
  { id: 'hart-5-n7', floorId: 'hart-5', buildingId: BuildingId.HART, x: 1050, y: 900, type: NodeType.STAIRS, label: 'Hart stairwell SE 5' },

  // ============================================================
  // DIRKSEN SENATE OFFICE BUILDING (1600x1000)
  // ============================================================

  // --- dirksen-b (basement) ---
  { id: 'dirksen-b-n1', floorId: 'dirksen-b', buildingId: BuildingId.DIRKSEN, x: 100, y: 500, type: NodeType.TUNNEL_ENTRY, label: 'Dirksen tunnel to Hart' },
  { id: 'dirksen-b-n2', floorId: 'dirksen-b', buildingId: BuildingId.DIRKSEN, x: 350, y: 500, type: NodeType.HALLWAY, label: 'Dirksen B west corridor' },
  { id: 'dirksen-b-n3', floorId: 'dirksen-b', buildingId: BuildingId.DIRKSEN, x: 600, y: 500, type: NodeType.HALLWAY, label: 'Dirksen B west-central' },
  { id: 'dirksen-b-n4', floorId: 'dirksen-b', buildingId: BuildingId.DIRKSEN, x: 800, y: 500, type: NodeType.HALLWAY, label: 'Dirksen B central' },
  { id: 'dirksen-b-n5', floorId: 'dirksen-b', buildingId: BuildingId.DIRKSEN, x: 1050, y: 500, type: NodeType.HALLWAY, label: 'Dirksen B east-central' },
  { id: 'dirksen-b-n6', floorId: 'dirksen-b', buildingId: BuildingId.DIRKSEN, x: 1300, y: 500, type: NodeType.HALLWAY, label: 'Dirksen B east corridor' },
  { id: 'dirksen-b-n7', floorId: 'dirksen-b', buildingId: BuildingId.DIRKSEN, x: 800, y: 200, type: NodeType.HALLWAY, label: 'Dirksen B north corridor' },
  { id: 'dirksen-b-n8', floorId: 'dirksen-b', buildingId: BuildingId.DIRKSEN, x: 800, y: 800, type: NodeType.HALLWAY, label: 'Dirksen B south corridor' },
  { id: 'dirksen-b-n9', floorId: 'dirksen-b', buildingId: BuildingId.DIRKSEN, x: 400, y: 250, type: NodeType.ELEVATOR, label: 'Dirksen elevator west B' },
  { id: 'dirksen-b-n10', floorId: 'dirksen-b', buildingId: BuildingId.DIRKSEN, x: 1200, y: 250, type: NodeType.ELEVATOR, label: 'Dirksen elevator east B' },
  { id: 'dirksen-b-n11', floorId: 'dirksen-b', buildingId: BuildingId.DIRKSEN, x: 600, y: 800, type: NodeType.STAIRS, label: 'Dirksen stairwell SW B' },
  { id: 'dirksen-b-n12', floorId: 'dirksen-b', buildingId: BuildingId.DIRKSEN, x: 1050, y: 800, type: NodeType.STAIRS, label: 'Dirksen stairwell SE B' },
  { id: 'dirksen-b-n13', floorId: 'dirksen-b', buildingId: BuildingId.DIRKSEN, x: 1500, y: 500, type: NodeType.TUNNEL_ENTRY, label: 'Dirksen tunnel to Russell' },
  { id: 'dirksen-b-n14', floorId: 'dirksen-b', buildingId: BuildingId.DIRKSEN, x: 800, y: 100, type: NodeType.TUNNEL_ENTRY, label: 'Dirksen tunnel to Capitol' },
  { id: 'dirksen-b-n15', floorId: 'dirksen-b', buildingId: BuildingId.DIRKSEN, x: 600, y: 100, type: NodeType.SUBWAY_STATION, label: 'Dirksen subway station' },

  // --- dirksen-1 (first floor) ---
  { id: 'dirksen-1-n1', floorId: 'dirksen-1', buildingId: BuildingId.DIRKSEN, x: 200, y: 500, type: NodeType.HALLWAY, label: 'Dirksen 1 west corridor' },
  { id: 'dirksen-1-n2', floorId: 'dirksen-1', buildingId: BuildingId.DIRKSEN, x: 500, y: 500, type: NodeType.HALLWAY, label: 'Dirksen 1 west-central' },
  { id: 'dirksen-1-n3', floorId: 'dirksen-1', buildingId: BuildingId.DIRKSEN, x: 800, y: 500, type: NodeType.HALLWAY, label: 'Dirksen 1 central' },
  { id: 'dirksen-1-n4', floorId: 'dirksen-1', buildingId: BuildingId.DIRKSEN, x: 1100, y: 500, type: NodeType.HALLWAY, label: 'Dirksen 1 east-central' },
  { id: 'dirksen-1-n5', floorId: 'dirksen-1', buildingId: BuildingId.DIRKSEN, x: 1400, y: 500, type: NodeType.HALLWAY, label: 'Dirksen 1 east corridor' },
  { id: 'dirksen-1-n6', floorId: 'dirksen-1', buildingId: BuildingId.DIRKSEN, x: 800, y: 200, type: NodeType.HALLWAY, label: 'Dirksen 1 north corridor' },
  { id: 'dirksen-1-n7', floorId: 'dirksen-1', buildingId: BuildingId.DIRKSEN, x: 800, y: 800, type: NodeType.HALLWAY, label: 'Dirksen 1 south corridor' },
  { id: 'dirksen-1-n8', floorId: 'dirksen-1', buildingId: BuildingId.DIRKSEN, x: 400, y: 250, type: NodeType.ELEVATOR, label: 'Dirksen elevator west 1' },
  { id: 'dirksen-1-n9', floorId: 'dirksen-1', buildingId: BuildingId.DIRKSEN, x: 1200, y: 250, type: NodeType.ELEVATOR, label: 'Dirksen elevator east 1' },
  { id: 'dirksen-1-n10', floorId: 'dirksen-1', buildingId: BuildingId.DIRKSEN, x: 600, y: 800, type: NodeType.STAIRS, label: 'Dirksen stairwell SW 1' },
  { id: 'dirksen-1-n11', floorId: 'dirksen-1', buildingId: BuildingId.DIRKSEN, x: 1050, y: 800, type: NodeType.STAIRS, label: 'Dirksen stairwell SE 1' },
  { id: 'dirksen-1-n12', floorId: 'dirksen-1', buildingId: BuildingId.DIRKSEN, x: 200, y: 200, type: NodeType.BUILDING_ENTRANCE, label: 'Dirksen main entrance' },

  // --- dirksen-2 ---
  { id: 'dirksen-2-n1', floorId: 'dirksen-2', buildingId: BuildingId.DIRKSEN, x: 200, y: 500, type: NodeType.HALLWAY, label: 'Dirksen 2 west corridor' },
  { id: 'dirksen-2-n2', floorId: 'dirksen-2', buildingId: BuildingId.DIRKSEN, x: 500, y: 500, type: NodeType.HALLWAY, label: 'Dirksen 2 west-central' },
  { id: 'dirksen-2-n3', floorId: 'dirksen-2', buildingId: BuildingId.DIRKSEN, x: 800, y: 500, type: NodeType.HALLWAY, label: 'Dirksen 2 central' },
  { id: 'dirksen-2-n4', floorId: 'dirksen-2', buildingId: BuildingId.DIRKSEN, x: 1100, y: 500, type: NodeType.HALLWAY, label: 'Dirksen 2 east-central' },
  { id: 'dirksen-2-n5', floorId: 'dirksen-2', buildingId: BuildingId.DIRKSEN, x: 1400, y: 500, type: NodeType.HALLWAY, label: 'Dirksen 2 east corridor' },
  { id: 'dirksen-2-n6', floorId: 'dirksen-2', buildingId: BuildingId.DIRKSEN, x: 400, y: 250, type: NodeType.ELEVATOR, label: 'Dirksen elevator west 2' },
  { id: 'dirksen-2-n7', floorId: 'dirksen-2', buildingId: BuildingId.DIRKSEN, x: 1200, y: 250, type: NodeType.ELEVATOR, label: 'Dirksen elevator east 2' },
  { id: 'dirksen-2-n8', floorId: 'dirksen-2', buildingId: BuildingId.DIRKSEN, x: 600, y: 800, type: NodeType.STAIRS, label: 'Dirksen stairwell SW 2' },
  { id: 'dirksen-2-n9', floorId: 'dirksen-2', buildingId: BuildingId.DIRKSEN, x: 1050, y: 800, type: NodeType.STAIRS, label: 'Dirksen stairwell SE 2' },

  // --- dirksen-3 ---
  { id: 'dirksen-3-n1', floorId: 'dirksen-3', buildingId: BuildingId.DIRKSEN, x: 200, y: 500, type: NodeType.HALLWAY, label: 'Dirksen 3 west corridor' },
  { id: 'dirksen-3-n2', floorId: 'dirksen-3', buildingId: BuildingId.DIRKSEN, x: 800, y: 500, type: NodeType.HALLWAY, label: 'Dirksen 3 central' },
  { id: 'dirksen-3-n3', floorId: 'dirksen-3', buildingId: BuildingId.DIRKSEN, x: 1400, y: 500, type: NodeType.HALLWAY, label: 'Dirksen 3 east corridor' },
  { id: 'dirksen-3-n4', floorId: 'dirksen-3', buildingId: BuildingId.DIRKSEN, x: 400, y: 250, type: NodeType.ELEVATOR, label: 'Dirksen elevator west 3' },
  { id: 'dirksen-3-n5', floorId: 'dirksen-3', buildingId: BuildingId.DIRKSEN, x: 1200, y: 250, type: NodeType.ELEVATOR, label: 'Dirksen elevator east 3' },
  { id: 'dirksen-3-n6', floorId: 'dirksen-3', buildingId: BuildingId.DIRKSEN, x: 600, y: 800, type: NodeType.STAIRS, label: 'Dirksen stairwell SW 3' },
  { id: 'dirksen-3-n7', floorId: 'dirksen-3', buildingId: BuildingId.DIRKSEN, x: 1050, y: 800, type: NodeType.STAIRS, label: 'Dirksen stairwell SE 3' },

  // --- dirksen-4 ---
  { id: 'dirksen-4-n1', floorId: 'dirksen-4', buildingId: BuildingId.DIRKSEN, x: 200, y: 500, type: NodeType.HALLWAY, label: 'Dirksen 4 west corridor' },
  { id: 'dirksen-4-n2', floorId: 'dirksen-4', buildingId: BuildingId.DIRKSEN, x: 800, y: 500, type: NodeType.HALLWAY, label: 'Dirksen 4 central' },
  { id: 'dirksen-4-n3', floorId: 'dirksen-4', buildingId: BuildingId.DIRKSEN, x: 1400, y: 500, type: NodeType.HALLWAY, label: 'Dirksen 4 east corridor' },
  { id: 'dirksen-4-n4', floorId: 'dirksen-4', buildingId: BuildingId.DIRKSEN, x: 400, y: 250, type: NodeType.ELEVATOR, label: 'Dirksen elevator west 4' },
  { id: 'dirksen-4-n5', floorId: 'dirksen-4', buildingId: BuildingId.DIRKSEN, x: 1200, y: 250, type: NodeType.ELEVATOR, label: 'Dirksen elevator east 4' },
  { id: 'dirksen-4-n6', floorId: 'dirksen-4', buildingId: BuildingId.DIRKSEN, x: 600, y: 800, type: NodeType.STAIRS, label: 'Dirksen stairwell SW 4' },
  { id: 'dirksen-4-n7', floorId: 'dirksen-4', buildingId: BuildingId.DIRKSEN, x: 1050, y: 800, type: NodeType.STAIRS, label: 'Dirksen stairwell SE 4' },

  // ============================================================
  // RUSSELL SENATE OFFICE BUILDING (1600x1000)
  // ============================================================

  // --- russell-b (basement) ---
  { id: 'russell-b-n1', floorId: 'russell-b', buildingId: BuildingId.RUSSELL, x: 100, y: 500, type: NodeType.TUNNEL_ENTRY, label: 'Russell tunnel to Dirksen' },
  { id: 'russell-b-n2', floorId: 'russell-b', buildingId: BuildingId.RUSSELL, x: 350, y: 500, type: NodeType.HALLWAY, label: 'Russell B west corridor' },
  { id: 'russell-b-n3', floorId: 'russell-b', buildingId: BuildingId.RUSSELL, x: 600, y: 500, type: NodeType.HALLWAY, label: 'Russell B west-central' },
  { id: 'russell-b-n4', floorId: 'russell-b', buildingId: BuildingId.RUSSELL, x: 800, y: 500, type: NodeType.HALLWAY, label: 'Russell B central' },
  { id: 'russell-b-n5', floorId: 'russell-b', buildingId: BuildingId.RUSSELL, x: 1050, y: 500, type: NodeType.HALLWAY, label: 'Russell B east-central' },
  { id: 'russell-b-n6', floorId: 'russell-b', buildingId: BuildingId.RUSSELL, x: 1300, y: 500, type: NodeType.HALLWAY, label: 'Russell B east corridor' },
  { id: 'russell-b-n7', floorId: 'russell-b', buildingId: BuildingId.RUSSELL, x: 800, y: 200, type: NodeType.HALLWAY, label: 'Russell B north corridor' },
  { id: 'russell-b-n8', floorId: 'russell-b', buildingId: BuildingId.RUSSELL, x: 800, y: 800, type: NodeType.HALLWAY, label: 'Russell B south corridor' },
  { id: 'russell-b-n9', floorId: 'russell-b', buildingId: BuildingId.RUSSELL, x: 400, y: 250, type: NodeType.ELEVATOR, label: 'Russell elevator west B' },
  { id: 'russell-b-n10', floorId: 'russell-b', buildingId: BuildingId.RUSSELL, x: 1200, y: 250, type: NodeType.ELEVATOR, label: 'Russell elevator east B' },
  { id: 'russell-b-n11', floorId: 'russell-b', buildingId: BuildingId.RUSSELL, x: 600, y: 800, type: NodeType.STAIRS, label: 'Russell stairwell SW B' },
  { id: 'russell-b-n12', floorId: 'russell-b', buildingId: BuildingId.RUSSELL, x: 1050, y: 800, type: NodeType.STAIRS, label: 'Russell stairwell SE B' },
  { id: 'russell-b-n13', floorId: 'russell-b', buildingId: BuildingId.RUSSELL, x: 800, y: 100, type: NodeType.TUNNEL_ENTRY, label: 'Russell tunnel to Capitol' },
  { id: 'russell-b-n14', floorId: 'russell-b', buildingId: BuildingId.RUSSELL, x: 600, y: 100, type: NodeType.SUBWAY_STATION, label: 'Russell subway station' },

  // --- russell-1 (first floor) ---
  { id: 'russell-1-n1', floorId: 'russell-1', buildingId: BuildingId.RUSSELL, x: 200, y: 500, type: NodeType.HALLWAY, label: 'Russell 1 west corridor' },
  { id: 'russell-1-n2', floorId: 'russell-1', buildingId: BuildingId.RUSSELL, x: 500, y: 500, type: NodeType.HALLWAY, label: 'Russell 1 west-central' },
  { id: 'russell-1-n3', floorId: 'russell-1', buildingId: BuildingId.RUSSELL, x: 800, y: 500, type: NodeType.HALLWAY, label: 'Russell 1 central rotunda' },
  { id: 'russell-1-n4', floorId: 'russell-1', buildingId: BuildingId.RUSSELL, x: 1100, y: 500, type: NodeType.HALLWAY, label: 'Russell 1 east-central' },
  { id: 'russell-1-n5', floorId: 'russell-1', buildingId: BuildingId.RUSSELL, x: 1400, y: 500, type: NodeType.HALLWAY, label: 'Russell 1 east corridor' },
  { id: 'russell-1-n6', floorId: 'russell-1', buildingId: BuildingId.RUSSELL, x: 800, y: 200, type: NodeType.HALLWAY, label: 'Russell 1 north corridor' },
  { id: 'russell-1-n7', floorId: 'russell-1', buildingId: BuildingId.RUSSELL, x: 800, y: 800, type: NodeType.HALLWAY, label: 'Russell 1 south corridor' },
  { id: 'russell-1-n8', floorId: 'russell-1', buildingId: BuildingId.RUSSELL, x: 400, y: 250, type: NodeType.ELEVATOR, label: 'Russell elevator west 1' },
  { id: 'russell-1-n9', floorId: 'russell-1', buildingId: BuildingId.RUSSELL, x: 1200, y: 250, type: NodeType.ELEVATOR, label: 'Russell elevator east 1' },
  { id: 'russell-1-n10', floorId: 'russell-1', buildingId: BuildingId.RUSSELL, x: 600, y: 800, type: NodeType.STAIRS, label: 'Russell stairwell SW 1' },
  { id: 'russell-1-n11', floorId: 'russell-1', buildingId: BuildingId.RUSSELL, x: 1050, y: 800, type: NodeType.STAIRS, label: 'Russell stairwell SE 1' },
  { id: 'russell-1-n12', floorId: 'russell-1', buildingId: BuildingId.RUSSELL, x: 200, y: 200, type: NodeType.BUILDING_ENTRANCE, label: 'Russell main entrance' },

  // --- russell-2 ---
  { id: 'russell-2-n1', floorId: 'russell-2', buildingId: BuildingId.RUSSELL, x: 200, y: 500, type: NodeType.HALLWAY, label: 'Russell 2 west corridor' },
  { id: 'russell-2-n2', floorId: 'russell-2', buildingId: BuildingId.RUSSELL, x: 500, y: 500, type: NodeType.HALLWAY, label: 'Russell 2 west-central' },
  { id: 'russell-2-n3', floorId: 'russell-2', buildingId: BuildingId.RUSSELL, x: 800, y: 500, type: NodeType.HALLWAY, label: 'Russell 2 central' },
  { id: 'russell-2-n4', floorId: 'russell-2', buildingId: BuildingId.RUSSELL, x: 1100, y: 500, type: NodeType.HALLWAY, label: 'Russell 2 east-central' },
  { id: 'russell-2-n5', floorId: 'russell-2', buildingId: BuildingId.RUSSELL, x: 1400, y: 500, type: NodeType.HALLWAY, label: 'Russell 2 east corridor' },
  { id: 'russell-2-n6', floorId: 'russell-2', buildingId: BuildingId.RUSSELL, x: 400, y: 250, type: NodeType.ELEVATOR, label: 'Russell elevator west 2' },
  { id: 'russell-2-n7', floorId: 'russell-2', buildingId: BuildingId.RUSSELL, x: 1200, y: 250, type: NodeType.ELEVATOR, label: 'Russell elevator east 2' },
  { id: 'russell-2-n8', floorId: 'russell-2', buildingId: BuildingId.RUSSELL, x: 600, y: 800, type: NodeType.STAIRS, label: 'Russell stairwell SW 2' },
  { id: 'russell-2-n9', floorId: 'russell-2', buildingId: BuildingId.RUSSELL, x: 1050, y: 800, type: NodeType.STAIRS, label: 'Russell stairwell SE 2' },

  // --- russell-3 ---
  { id: 'russell-3-n1', floorId: 'russell-3', buildingId: BuildingId.RUSSELL, x: 200, y: 500, type: NodeType.HALLWAY, label: 'Russell 3 west corridor' },
  { id: 'russell-3-n2', floorId: 'russell-3', buildingId: BuildingId.RUSSELL, x: 800, y: 500, type: NodeType.HALLWAY, label: 'Russell 3 central' },
  { id: 'russell-3-n3', floorId: 'russell-3', buildingId: BuildingId.RUSSELL, x: 1400, y: 500, type: NodeType.HALLWAY, label: 'Russell 3 east corridor' },
  { id: 'russell-3-n4', floorId: 'russell-3', buildingId: BuildingId.RUSSELL, x: 400, y: 250, type: NodeType.ELEVATOR, label: 'Russell elevator west 3' },
  { id: 'russell-3-n5', floorId: 'russell-3', buildingId: BuildingId.RUSSELL, x: 1200, y: 250, type: NodeType.ELEVATOR, label: 'Russell elevator east 3' },
  { id: 'russell-3-n6', floorId: 'russell-3', buildingId: BuildingId.RUSSELL, x: 600, y: 800, type: NodeType.STAIRS, label: 'Russell stairwell SW 3' },
  { id: 'russell-3-n7', floorId: 'russell-3', buildingId: BuildingId.RUSSELL, x: 1050, y: 800, type: NodeType.STAIRS, label: 'Russell stairwell SE 3' },

  // ============================================================
  // U.S. CAPITOL BUILDING (2000x1400)
  // ============================================================

  // --- capitol-b (basement) ---
  { id: 'capitol-b-n1', floorId: 'capitol-b', buildingId: BuildingId.CAPITOL, x: 200, y: 700, type: NodeType.TUNNEL_ENTRY, label: 'Capitol tunnel to Rayburn (House subway)' },
  { id: 'capitol-b-n2', floorId: 'capitol-b', buildingId: BuildingId.CAPITOL, x: 500, y: 700, type: NodeType.HALLWAY, label: 'Capitol B House side west' },
  { id: 'capitol-b-n3', floorId: 'capitol-b', buildingId: BuildingId.CAPITOL, x: 800, y: 700, type: NodeType.HALLWAY, label: 'Capitol B House side central' },
  { id: 'capitol-b-n4', floorId: 'capitol-b', buildingId: BuildingId.CAPITOL, x: 1000, y: 700, type: NodeType.HALLWAY, label: 'Capitol B central crypt area' },
  { id: 'capitol-b-n5', floorId: 'capitol-b', buildingId: BuildingId.CAPITOL, x: 1200, y: 700, type: NodeType.HALLWAY, label: 'Capitol B Senate side central' },
  { id: 'capitol-b-n6', floorId: 'capitol-b', buildingId: BuildingId.CAPITOL, x: 1500, y: 700, type: NodeType.HALLWAY, label: 'Capitol B Senate side east' },
  { id: 'capitol-b-n7', floorId: 'capitol-b', buildingId: BuildingId.CAPITOL, x: 1800, y: 700, type: NodeType.TUNNEL_ENTRY, label: 'Capitol tunnel to Russell (Senate subway)' },
  { id: 'capitol-b-n8', floorId: 'capitol-b', buildingId: BuildingId.CAPITOL, x: 1000, y: 400, type: NodeType.HALLWAY, label: 'Capitol B north corridor' },
  { id: 'capitol-b-n9', floorId: 'capitol-b', buildingId: BuildingId.CAPITOL, x: 1000, y: 1000, type: NodeType.HALLWAY, label: 'Capitol B south corridor' },
  { id: 'capitol-b-n10', floorId: 'capitol-b', buildingId: BuildingId.CAPITOL, x: 600, y: 400, type: NodeType.ELEVATOR, label: 'Capitol elevator House side B' },
  { id: 'capitol-b-n11', floorId: 'capitol-b', buildingId: BuildingId.CAPITOL, x: 1400, y: 400, type: NodeType.ELEVATOR, label: 'Capitol elevator Senate side B' },
  { id: 'capitol-b-n12', floorId: 'capitol-b', buildingId: BuildingId.CAPITOL, x: 700, y: 1000, type: NodeType.STAIRS, label: 'Capitol stairwell House B' },
  { id: 'capitol-b-n13', floorId: 'capitol-b', buildingId: BuildingId.CAPITOL, x: 1300, y: 1000, type: NodeType.STAIRS, label: 'Capitol stairwell Senate B' },
  { id: 'capitol-b-n14', floorId: 'capitol-b', buildingId: BuildingId.CAPITOL, x: 400, y: 700, type: NodeType.TUNNEL_ENTRY, label: 'Capitol tunnel to Longworth' },
  { id: 'capitol-b-n15', floorId: 'capitol-b', buildingId: BuildingId.CAPITOL, x: 600, y: 700, type: NodeType.TUNNEL_ENTRY, label: 'Capitol tunnel to Cannon' },
  { id: 'capitol-b-n16', floorId: 'capitol-b', buildingId: BuildingId.CAPITOL, x: 1600, y: 700, type: NodeType.TUNNEL_ENTRY, label: 'Capitol tunnel to Dirksen (Senate subway)' },
  { id: 'capitol-b-n17', floorId: 'capitol-b', buildingId: BuildingId.CAPITOL, x: 1000, y: 1200, type: NodeType.TUNNEL_ENTRY, label: 'Capitol tunnel to CVC' },
  { id: 'capitol-b-n18', floorId: 'capitol-b', buildingId: BuildingId.CAPITOL, x: 200, y: 500, type: NodeType.SUBWAY_STATION, label: 'Capitol House subway station' },
  { id: 'capitol-b-n19', floorId: 'capitol-b', buildingId: BuildingId.CAPITOL, x: 1800, y: 500, type: NodeType.SUBWAY_STATION, label: 'Capitol Senate subway station' },

  // --- capitol-1 (first floor) ---
  { id: 'capitol-1-n1', floorId: 'capitol-1', buildingId: BuildingId.CAPITOL, x: 300, y: 700, type: NodeType.HALLWAY, label: 'Capitol 1 House wing west' },
  { id: 'capitol-1-n2', floorId: 'capitol-1', buildingId: BuildingId.CAPITOL, x: 600, y: 700, type: NodeType.HALLWAY, label: 'Capitol 1 House wing central' },
  { id: 'capitol-1-n3', floorId: 'capitol-1', buildingId: BuildingId.CAPITOL, x: 1000, y: 700, type: NodeType.HALLWAY, label: 'Capitol 1 Rotunda' },
  { id: 'capitol-1-n4', floorId: 'capitol-1', buildingId: BuildingId.CAPITOL, x: 1400, y: 700, type: NodeType.HALLWAY, label: 'Capitol 1 Senate wing central' },
  { id: 'capitol-1-n5', floorId: 'capitol-1', buildingId: BuildingId.CAPITOL, x: 1700, y: 700, type: NodeType.HALLWAY, label: 'Capitol 1 Senate wing east' },
  { id: 'capitol-1-n6', floorId: 'capitol-1', buildingId: BuildingId.CAPITOL, x: 1000, y: 400, type: NodeType.HALLWAY, label: 'Capitol 1 north corridor' },
  { id: 'capitol-1-n7', floorId: 'capitol-1', buildingId: BuildingId.CAPITOL, x: 1000, y: 1000, type: NodeType.HALLWAY, label: 'Capitol 1 south corridor' },
  { id: 'capitol-1-n8', floorId: 'capitol-1', buildingId: BuildingId.CAPITOL, x: 600, y: 400, type: NodeType.ELEVATOR, label: 'Capitol elevator House side 1' },
  { id: 'capitol-1-n9', floorId: 'capitol-1', buildingId: BuildingId.CAPITOL, x: 1400, y: 400, type: NodeType.ELEVATOR, label: 'Capitol elevator Senate side 1' },
  { id: 'capitol-1-n10', floorId: 'capitol-1', buildingId: BuildingId.CAPITOL, x: 700, y: 1000, type: NodeType.STAIRS, label: 'Capitol stairwell House 1' },
  { id: 'capitol-1-n11', floorId: 'capitol-1', buildingId: BuildingId.CAPITOL, x: 1300, y: 1000, type: NodeType.STAIRS, label: 'Capitol stairwell Senate 1' },
  { id: 'capitol-1-n12', floorId: 'capitol-1', buildingId: BuildingId.CAPITOL, x: 1000, y: 1300, type: NodeType.BUILDING_ENTRANCE, label: 'Capitol east front entrance' },

  // --- capitol-2 (second floor) ---
  { id: 'capitol-2-n1', floorId: 'capitol-2', buildingId: BuildingId.CAPITOL, x: 300, y: 700, type: NodeType.HALLWAY, label: 'Capitol 2 House chamber wing' },
  { id: 'capitol-2-n2', floorId: 'capitol-2', buildingId: BuildingId.CAPITOL, x: 700, y: 700, type: NodeType.HALLWAY, label: 'Capitol 2 House side' },
  { id: 'capitol-2-n3', floorId: 'capitol-2', buildingId: BuildingId.CAPITOL, x: 1000, y: 700, type: NodeType.HALLWAY, label: 'Capitol 2 Statuary Hall' },
  { id: 'capitol-2-n4', floorId: 'capitol-2', buildingId: BuildingId.CAPITOL, x: 1300, y: 700, type: NodeType.HALLWAY, label: 'Capitol 2 Senate side' },
  { id: 'capitol-2-n5', floorId: 'capitol-2', buildingId: BuildingId.CAPITOL, x: 1700, y: 700, type: NodeType.HALLWAY, label: 'Capitol 2 Senate chamber wing' },
  { id: 'capitol-2-n6', floorId: 'capitol-2', buildingId: BuildingId.CAPITOL, x: 600, y: 400, type: NodeType.ELEVATOR, label: 'Capitol elevator House side 2' },
  { id: 'capitol-2-n7', floorId: 'capitol-2', buildingId: BuildingId.CAPITOL, x: 1400, y: 400, type: NodeType.ELEVATOR, label: 'Capitol elevator Senate side 2' },
  { id: 'capitol-2-n8', floorId: 'capitol-2', buildingId: BuildingId.CAPITOL, x: 700, y: 1000, type: NodeType.STAIRS, label: 'Capitol stairwell House 2' },
  { id: 'capitol-2-n9', floorId: 'capitol-2', buildingId: BuildingId.CAPITOL, x: 1300, y: 1000, type: NodeType.STAIRS, label: 'Capitol stairwell Senate 2' },

  // --- capitol-3 (third floor) ---
  { id: 'capitol-3-n1', floorId: 'capitol-3', buildingId: BuildingId.CAPITOL, x: 400, y: 700, type: NodeType.HALLWAY, label: 'Capitol 3 House gallery' },
  { id: 'capitol-3-n2', floorId: 'capitol-3', buildingId: BuildingId.CAPITOL, x: 1000, y: 700, type: NodeType.HALLWAY, label: 'Capitol 3 central' },
  { id: 'capitol-3-n3', floorId: 'capitol-3', buildingId: BuildingId.CAPITOL, x: 1600, y: 700, type: NodeType.HALLWAY, label: 'Capitol 3 Senate gallery' },
  { id: 'capitol-3-n4', floorId: 'capitol-3', buildingId: BuildingId.CAPITOL, x: 600, y: 400, type: NodeType.ELEVATOR, label: 'Capitol elevator House side 3' },
  { id: 'capitol-3-n5', floorId: 'capitol-3', buildingId: BuildingId.CAPITOL, x: 1400, y: 400, type: NodeType.ELEVATOR, label: 'Capitol elevator Senate side 3' },
  { id: 'capitol-3-n6', floorId: 'capitol-3', buildingId: BuildingId.CAPITOL, x: 700, y: 1000, type: NodeType.STAIRS, label: 'Capitol stairwell House 3' },
  { id: 'capitol-3-n7', floorId: 'capitol-3', buildingId: BuildingId.CAPITOL, x: 1300, y: 1000, type: NodeType.STAIRS, label: 'Capitol stairwell Senate 3' },

  // ============================================================
  // CAPITOL VISITOR CENTER (1800x1000)
  // ============================================================

  // --- cvc-lower ---
  { id: 'cvc-lower-n1', floorId: 'cvc-lower', buildingId: BuildingId.VISITOR_CENTER, x: 100, y: 500, type: NodeType.TUNNEL_ENTRY, label: 'CVC tunnel to Capitol' },
  { id: 'cvc-lower-n2', floorId: 'cvc-lower', buildingId: BuildingId.VISITOR_CENTER, x: 350, y: 500, type: NodeType.HALLWAY, label: 'CVC lower west hall' },
  { id: 'cvc-lower-n3', floorId: 'cvc-lower', buildingId: BuildingId.VISITOR_CENTER, x: 600, y: 500, type: NodeType.HALLWAY, label: 'CVC lower exhibition hall west' },
  { id: 'cvc-lower-n4', floorId: 'cvc-lower', buildingId: BuildingId.VISITOR_CENTER, x: 900, y: 500, type: NodeType.HALLWAY, label: 'CVC lower central' },
  { id: 'cvc-lower-n5', floorId: 'cvc-lower', buildingId: BuildingId.VISITOR_CENTER, x: 1200, y: 500, type: NodeType.HALLWAY, label: 'CVC lower exhibition hall east' },
  { id: 'cvc-lower-n6', floorId: 'cvc-lower', buildingId: BuildingId.VISITOR_CENTER, x: 1500, y: 500, type: NodeType.HALLWAY, label: 'CVC lower east hall' },
  { id: 'cvc-lower-n7', floorId: 'cvc-lower', buildingId: BuildingId.VISITOR_CENTER, x: 900, y: 200, type: NodeType.HALLWAY, label: 'CVC lower north corridor' },
  { id: 'cvc-lower-n8', floorId: 'cvc-lower', buildingId: BuildingId.VISITOR_CENTER, x: 900, y: 800, type: NodeType.HALLWAY, label: 'CVC lower south corridor' },
  { id: 'cvc-lower-n9', floorId: 'cvc-lower', buildingId: BuildingId.VISITOR_CENTER, x: 500, y: 250, type: NodeType.ELEVATOR, label: 'CVC elevator west lower' },
  { id: 'cvc-lower-n10', floorId: 'cvc-lower', buildingId: BuildingId.VISITOR_CENTER, x: 1300, y: 250, type: NodeType.ELEVATOR, label: 'CVC elevator east lower' },
  { id: 'cvc-lower-n11', floorId: 'cvc-lower', buildingId: BuildingId.VISITOR_CENTER, x: 700, y: 800, type: NodeType.STAIRS, label: 'CVC stairwell west lower' },
  { id: 'cvc-lower-n12', floorId: 'cvc-lower', buildingId: BuildingId.VISITOR_CENTER, x: 1100, y: 800, type: NodeType.STAIRS, label: 'CVC stairwell east lower' },
  { id: 'cvc-lower-n13', floorId: 'cvc-lower', buildingId: BuildingId.VISITOR_CENTER, x: 900, y: 100, type: NodeType.ESCALATOR, label: 'CVC escalator to upper' },

  // --- cvc-upper ---
  { id: 'cvc-upper-n1', floorId: 'cvc-upper', buildingId: BuildingId.VISITOR_CENTER, x: 200, y: 500, type: NodeType.HALLWAY, label: 'CVC upper west hall' },
  { id: 'cvc-upper-n2', floorId: 'cvc-upper', buildingId: BuildingId.VISITOR_CENTER, x: 500, y: 500, type: NodeType.HALLWAY, label: 'CVC upper emancipation hall west' },
  { id: 'cvc-upper-n3', floorId: 'cvc-upper', buildingId: BuildingId.VISITOR_CENTER, x: 900, y: 500, type: NodeType.HALLWAY, label: 'CVC upper emancipation hall central' },
  { id: 'cvc-upper-n4', floorId: 'cvc-upper', buildingId: BuildingId.VISITOR_CENTER, x: 1300, y: 500, type: NodeType.HALLWAY, label: 'CVC upper emancipation hall east' },
  { id: 'cvc-upper-n5', floorId: 'cvc-upper', buildingId: BuildingId.VISITOR_CENTER, x: 1600, y: 500, type: NodeType.HALLWAY, label: 'CVC upper east hall' },
  { id: 'cvc-upper-n6', floorId: 'cvc-upper', buildingId: BuildingId.VISITOR_CENTER, x: 900, y: 200, type: NodeType.HALLWAY, label: 'CVC upper north corridor' },
  { id: 'cvc-upper-n7', floorId: 'cvc-upper', buildingId: BuildingId.VISITOR_CENTER, x: 900, y: 800, type: NodeType.HALLWAY, label: 'CVC upper south corridor' },
  { id: 'cvc-upper-n8', floorId: 'cvc-upper', buildingId: BuildingId.VISITOR_CENTER, x: 500, y: 250, type: NodeType.ELEVATOR, label: 'CVC elevator west upper' },
  { id: 'cvc-upper-n9', floorId: 'cvc-upper', buildingId: BuildingId.VISITOR_CENTER, x: 1300, y: 250, type: NodeType.ELEVATOR, label: 'CVC elevator east upper' },
  { id: 'cvc-upper-n10', floorId: 'cvc-upper', buildingId: BuildingId.VISITOR_CENTER, x: 700, y: 800, type: NodeType.STAIRS, label: 'CVC stairwell west upper' },
  { id: 'cvc-upper-n11', floorId: 'cvc-upper', buildingId: BuildingId.VISITOR_CENTER, x: 1100, y: 800, type: NodeType.STAIRS, label: 'CVC stairwell east upper' },
  { id: 'cvc-upper-n12', floorId: 'cvc-upper', buildingId: BuildingId.VISITOR_CENTER, x: 900, y: 100, type: NodeType.ESCALATOR, label: 'CVC escalator from lower' },
  { id: 'cvc-upper-n13', floorId: 'cvc-upper', buildingId: BuildingId.VISITOR_CENTER, x: 900, y: 900, type: NodeType.BUILDING_ENTRANCE, label: 'CVC main entrance' },

  // ============================================================
  // LOC JEFFERSON BUILDING (1600x1200)
  // ============================================================

  // --- loc-jefferson-g (ground) ---
  { id: 'loc-jefferson-g-n1', floorId: 'loc-jefferson-g', buildingId: BuildingId.LOC_JEFFERSON, x: 100, y: 600, type: NodeType.TUNNEL_ENTRY, label: 'Jefferson tunnel to Cannon' },
  { id: 'loc-jefferson-g-n2', floorId: 'loc-jefferson-g', buildingId: BuildingId.LOC_JEFFERSON, x: 350, y: 600, type: NodeType.HALLWAY, label: 'Jefferson G west corridor' },
  { id: 'loc-jefferson-g-n3', floorId: 'loc-jefferson-g', buildingId: BuildingId.LOC_JEFFERSON, x: 600, y: 600, type: NodeType.HALLWAY, label: 'Jefferson G west-central' },
  { id: 'loc-jefferson-g-n4', floorId: 'loc-jefferson-g', buildingId: BuildingId.LOC_JEFFERSON, x: 800, y: 600, type: NodeType.HALLWAY, label: 'Jefferson G central' },
  { id: 'loc-jefferson-g-n5', floorId: 'loc-jefferson-g', buildingId: BuildingId.LOC_JEFFERSON, x: 1050, y: 600, type: NodeType.HALLWAY, label: 'Jefferson G east-central' },
  { id: 'loc-jefferson-g-n6', floorId: 'loc-jefferson-g', buildingId: BuildingId.LOC_JEFFERSON, x: 1300, y: 600, type: NodeType.HALLWAY, label: 'Jefferson G east corridor' },
  { id: 'loc-jefferson-g-n7', floorId: 'loc-jefferson-g', buildingId: BuildingId.LOC_JEFFERSON, x: 800, y: 300, type: NodeType.HALLWAY, label: 'Jefferson G north corridor' },
  { id: 'loc-jefferson-g-n8', floorId: 'loc-jefferson-g', buildingId: BuildingId.LOC_JEFFERSON, x: 800, y: 900, type: NodeType.HALLWAY, label: 'Jefferson G south corridor' },
  { id: 'loc-jefferson-g-n9', floorId: 'loc-jefferson-g', buildingId: BuildingId.LOC_JEFFERSON, x: 400, y: 300, type: NodeType.ELEVATOR, label: 'Jefferson elevator west G' },
  { id: 'loc-jefferson-g-n10', floorId: 'loc-jefferson-g', buildingId: BuildingId.LOC_JEFFERSON, x: 1200, y: 300, type: NodeType.ELEVATOR, label: 'Jefferson elevator east G' },
  { id: 'loc-jefferson-g-n11', floorId: 'loc-jefferson-g', buildingId: BuildingId.LOC_JEFFERSON, x: 600, y: 900, type: NodeType.STAIRS, label: 'Jefferson stairwell SW G' },
  { id: 'loc-jefferson-g-n12', floorId: 'loc-jefferson-g', buildingId: BuildingId.LOC_JEFFERSON, x: 1050, y: 900, type: NodeType.STAIRS, label: 'Jefferson stairwell SE G' },
  { id: 'loc-jefferson-g-n13', floorId: 'loc-jefferson-g', buildingId: BuildingId.LOC_JEFFERSON, x: 1500, y: 600, type: NodeType.TUNNEL_ENTRY, label: 'Jefferson tunnel to Adams' },
  { id: 'loc-jefferson-g-n14', floorId: 'loc-jefferson-g', buildingId: BuildingId.LOC_JEFFERSON, x: 800, y: 1100, type: NodeType.BUILDING_ENTRANCE, label: 'Jefferson main entrance' },

  // --- loc-jefferson-1 ---
  { id: 'loc-jefferson-1-n1', floorId: 'loc-jefferson-1', buildingId: BuildingId.LOC_JEFFERSON, x: 200, y: 600, type: NodeType.HALLWAY, label: 'Jefferson 1 west corridor' },
  { id: 'loc-jefferson-1-n2', floorId: 'loc-jefferson-1', buildingId: BuildingId.LOC_JEFFERSON, x: 500, y: 600, type: NodeType.HALLWAY, label: 'Jefferson 1 west-central' },
  { id: 'loc-jefferson-1-n3', floorId: 'loc-jefferson-1', buildingId: BuildingId.LOC_JEFFERSON, x: 800, y: 600, type: NodeType.HALLWAY, label: 'Jefferson 1 Great Hall' },
  { id: 'loc-jefferson-1-n4', floorId: 'loc-jefferson-1', buildingId: BuildingId.LOC_JEFFERSON, x: 1100, y: 600, type: NodeType.HALLWAY, label: 'Jefferson 1 east-central' },
  { id: 'loc-jefferson-1-n5', floorId: 'loc-jefferson-1', buildingId: BuildingId.LOC_JEFFERSON, x: 1400, y: 600, type: NodeType.HALLWAY, label: 'Jefferson 1 east corridor' },
  { id: 'loc-jefferson-1-n6', floorId: 'loc-jefferson-1', buildingId: BuildingId.LOC_JEFFERSON, x: 400, y: 300, type: NodeType.ELEVATOR, label: 'Jefferson elevator west 1' },
  { id: 'loc-jefferson-1-n7', floorId: 'loc-jefferson-1', buildingId: BuildingId.LOC_JEFFERSON, x: 1200, y: 300, type: NodeType.ELEVATOR, label: 'Jefferson elevator east 1' },
  { id: 'loc-jefferson-1-n8', floorId: 'loc-jefferson-1', buildingId: BuildingId.LOC_JEFFERSON, x: 600, y: 900, type: NodeType.STAIRS, label: 'Jefferson stairwell SW 1' },
  { id: 'loc-jefferson-1-n9', floorId: 'loc-jefferson-1', buildingId: BuildingId.LOC_JEFFERSON, x: 1050, y: 900, type: NodeType.STAIRS, label: 'Jefferson stairwell SE 1' },

  // --- loc-jefferson-2 ---
  { id: 'loc-jefferson-2-n1', floorId: 'loc-jefferson-2', buildingId: BuildingId.LOC_JEFFERSON, x: 200, y: 600, type: NodeType.HALLWAY, label: 'Jefferson 2 west corridor' },
  { id: 'loc-jefferson-2-n2', floorId: 'loc-jefferson-2', buildingId: BuildingId.LOC_JEFFERSON, x: 500, y: 600, type: NodeType.HALLWAY, label: 'Jefferson 2 west-central' },
  { id: 'loc-jefferson-2-n3', floorId: 'loc-jefferson-2', buildingId: BuildingId.LOC_JEFFERSON, x: 800, y: 600, type: NodeType.HALLWAY, label: 'Jefferson 2 Main Reading Room' },
  { id: 'loc-jefferson-2-n4', floorId: 'loc-jefferson-2', buildingId: BuildingId.LOC_JEFFERSON, x: 1100, y: 600, type: NodeType.HALLWAY, label: 'Jefferson 2 east-central' },
  { id: 'loc-jefferson-2-n5', floorId: 'loc-jefferson-2', buildingId: BuildingId.LOC_JEFFERSON, x: 1400, y: 600, type: NodeType.HALLWAY, label: 'Jefferson 2 east corridor' },
  { id: 'loc-jefferson-2-n6', floorId: 'loc-jefferson-2', buildingId: BuildingId.LOC_JEFFERSON, x: 400, y: 300, type: NodeType.ELEVATOR, label: 'Jefferson elevator west 2' },
  { id: 'loc-jefferson-2-n7', floorId: 'loc-jefferson-2', buildingId: BuildingId.LOC_JEFFERSON, x: 1200, y: 300, type: NodeType.ELEVATOR, label: 'Jefferson elevator east 2' },
  { id: 'loc-jefferson-2-n8', floorId: 'loc-jefferson-2', buildingId: BuildingId.LOC_JEFFERSON, x: 600, y: 900, type: NodeType.STAIRS, label: 'Jefferson stairwell SW 2' },
  { id: 'loc-jefferson-2-n9', floorId: 'loc-jefferson-2', buildingId: BuildingId.LOC_JEFFERSON, x: 1050, y: 900, type: NodeType.STAIRS, label: 'Jefferson stairwell SE 2' },

  // ============================================================
  // LOC ADAMS BUILDING (1400x1000)
  // ============================================================

  // --- loc-adams-1 ---
  { id: 'loc-adams-1-n1', floorId: 'loc-adams-1', buildingId: BuildingId.LOC_ADAMS, x: 100, y: 500, type: NodeType.TUNNEL_ENTRY, label: 'Adams tunnel to Jefferson' },
  { id: 'loc-adams-1-n2', floorId: 'loc-adams-1', buildingId: BuildingId.LOC_ADAMS, x: 300, y: 500, type: NodeType.HALLWAY, label: 'Adams 1 west corridor' },
  { id: 'loc-adams-1-n3', floorId: 'loc-adams-1', buildingId: BuildingId.LOC_ADAMS, x: 550, y: 500, type: NodeType.HALLWAY, label: 'Adams 1 west-central' },
  { id: 'loc-adams-1-n4', floorId: 'loc-adams-1', buildingId: BuildingId.LOC_ADAMS, x: 700, y: 500, type: NodeType.HALLWAY, label: 'Adams 1 central' },
  { id: 'loc-adams-1-n5', floorId: 'loc-adams-1', buildingId: BuildingId.LOC_ADAMS, x: 950, y: 500, type: NodeType.HALLWAY, label: 'Adams 1 east-central' },
  { id: 'loc-adams-1-n6', floorId: 'loc-adams-1', buildingId: BuildingId.LOC_ADAMS, x: 1200, y: 500, type: NodeType.HALLWAY, label: 'Adams 1 east corridor' },
  { id: 'loc-adams-1-n7', floorId: 'loc-adams-1', buildingId: BuildingId.LOC_ADAMS, x: 700, y: 200, type: NodeType.HALLWAY, label: 'Adams 1 north corridor' },
  { id: 'loc-adams-1-n8', floorId: 'loc-adams-1', buildingId: BuildingId.LOC_ADAMS, x: 700, y: 800, type: NodeType.HALLWAY, label: 'Adams 1 south corridor' },
  { id: 'loc-adams-1-n9', floorId: 'loc-adams-1', buildingId: BuildingId.LOC_ADAMS, x: 350, y: 250, type: NodeType.ELEVATOR, label: 'Adams elevator west 1' },
  { id: 'loc-adams-1-n10', floorId: 'loc-adams-1', buildingId: BuildingId.LOC_ADAMS, x: 1050, y: 250, type: NodeType.ELEVATOR, label: 'Adams elevator east 1' },
  { id: 'loc-adams-1-n11', floorId: 'loc-adams-1', buildingId: BuildingId.LOC_ADAMS, x: 500, y: 800, type: NodeType.STAIRS, label: 'Adams stairwell SW 1' },
  { id: 'loc-adams-1-n12', floorId: 'loc-adams-1', buildingId: BuildingId.LOC_ADAMS, x: 900, y: 800, type: NodeType.STAIRS, label: 'Adams stairwell SE 1' },
  { id: 'loc-adams-1-n13', floorId: 'loc-adams-1', buildingId: BuildingId.LOC_ADAMS, x: 1300, y: 500, type: NodeType.TUNNEL_ENTRY, label: 'Adams tunnel to Madison' },
  { id: 'loc-adams-1-n14', floorId: 'loc-adams-1', buildingId: BuildingId.LOC_ADAMS, x: 700, y: 900, type: NodeType.BUILDING_ENTRANCE, label: 'Adams main entrance' },

  // --- loc-adams-2 ---
  { id: 'loc-adams-2-n1', floorId: 'loc-adams-2', buildingId: BuildingId.LOC_ADAMS, x: 200, y: 500, type: NodeType.HALLWAY, label: 'Adams 2 west corridor' },
  { id: 'loc-adams-2-n2', floorId: 'loc-adams-2', buildingId: BuildingId.LOC_ADAMS, x: 500, y: 500, type: NodeType.HALLWAY, label: 'Adams 2 west-central' },
  { id: 'loc-adams-2-n3', floorId: 'loc-adams-2', buildingId: BuildingId.LOC_ADAMS, x: 700, y: 500, type: NodeType.HALLWAY, label: 'Adams 2 central' },
  { id: 'loc-adams-2-n4', floorId: 'loc-adams-2', buildingId: BuildingId.LOC_ADAMS, x: 950, y: 500, type: NodeType.HALLWAY, label: 'Adams 2 east-central' },
  { id: 'loc-adams-2-n5', floorId: 'loc-adams-2', buildingId: BuildingId.LOC_ADAMS, x: 1200, y: 500, type: NodeType.HALLWAY, label: 'Adams 2 east corridor' },
  { id: 'loc-adams-2-n6', floorId: 'loc-adams-2', buildingId: BuildingId.LOC_ADAMS, x: 350, y: 250, type: NodeType.ELEVATOR, label: 'Adams elevator west 2' },
  { id: 'loc-adams-2-n7', floorId: 'loc-adams-2', buildingId: BuildingId.LOC_ADAMS, x: 1050, y: 250, type: NodeType.ELEVATOR, label: 'Adams elevator east 2' },
  { id: 'loc-adams-2-n8', floorId: 'loc-adams-2', buildingId: BuildingId.LOC_ADAMS, x: 500, y: 800, type: NodeType.STAIRS, label: 'Adams stairwell SW 2' },
  { id: 'loc-adams-2-n9', floorId: 'loc-adams-2', buildingId: BuildingId.LOC_ADAMS, x: 900, y: 800, type: NodeType.STAIRS, label: 'Adams stairwell SE 2' },

  // --- loc-adams-3 ---
  { id: 'loc-adams-3-n1', floorId: 'loc-adams-3', buildingId: BuildingId.LOC_ADAMS, x: 200, y: 500, type: NodeType.HALLWAY, label: 'Adams 3 west corridor' },
  { id: 'loc-adams-3-n2', floorId: 'loc-adams-3', buildingId: BuildingId.LOC_ADAMS, x: 700, y: 500, type: NodeType.HALLWAY, label: 'Adams 3 central' },
  { id: 'loc-adams-3-n3', floorId: 'loc-adams-3', buildingId: BuildingId.LOC_ADAMS, x: 1200, y: 500, type: NodeType.HALLWAY, label: 'Adams 3 east corridor' },
  { id: 'loc-adams-3-n4', floorId: 'loc-adams-3', buildingId: BuildingId.LOC_ADAMS, x: 350, y: 250, type: NodeType.ELEVATOR, label: 'Adams elevator west 3' },
  { id: 'loc-adams-3-n5', floorId: 'loc-adams-3', buildingId: BuildingId.LOC_ADAMS, x: 1050, y: 250, type: NodeType.ELEVATOR, label: 'Adams elevator east 3' },
  { id: 'loc-adams-3-n6', floorId: 'loc-adams-3', buildingId: BuildingId.LOC_ADAMS, x: 500, y: 800, type: NodeType.STAIRS, label: 'Adams stairwell SW 3' },
  { id: 'loc-adams-3-n7', floorId: 'loc-adams-3', buildingId: BuildingId.LOC_ADAMS, x: 900, y: 800, type: NodeType.STAIRS, label: 'Adams stairwell SE 3' },

  // ============================================================
  // LOC MADISON BUILDING (1800x1000)
  // ============================================================

  // --- loc-madison-g (ground) ---
  { id: 'loc-madison-g-n1', floorId: 'loc-madison-g', buildingId: BuildingId.LOC_MADISON, x: 100, y: 500, type: NodeType.TUNNEL_ENTRY, label: 'Madison tunnel to Adams' },
  { id: 'loc-madison-g-n2', floorId: 'loc-madison-g', buildingId: BuildingId.LOC_MADISON, x: 350, y: 500, type: NodeType.HALLWAY, label: 'Madison G west corridor' },
  { id: 'loc-madison-g-n3', floorId: 'loc-madison-g', buildingId: BuildingId.LOC_MADISON, x: 600, y: 500, type: NodeType.HALLWAY, label: 'Madison G west-central' },
  { id: 'loc-madison-g-n4', floorId: 'loc-madison-g', buildingId: BuildingId.LOC_MADISON, x: 900, y: 500, type: NodeType.HALLWAY, label: 'Madison G central' },
  { id: 'loc-madison-g-n5', floorId: 'loc-madison-g', buildingId: BuildingId.LOC_MADISON, x: 1200, y: 500, type: NodeType.HALLWAY, label: 'Madison G east-central' },
  { id: 'loc-madison-g-n6', floorId: 'loc-madison-g', buildingId: BuildingId.LOC_MADISON, x: 1500, y: 500, type: NodeType.HALLWAY, label: 'Madison G east corridor' },
  { id: 'loc-madison-g-n7', floorId: 'loc-madison-g', buildingId: BuildingId.LOC_MADISON, x: 900, y: 200, type: NodeType.HALLWAY, label: 'Madison G north corridor' },
  { id: 'loc-madison-g-n8', floorId: 'loc-madison-g', buildingId: BuildingId.LOC_MADISON, x: 900, y: 800, type: NodeType.HALLWAY, label: 'Madison G south corridor' },
  { id: 'loc-madison-g-n9', floorId: 'loc-madison-g', buildingId: BuildingId.LOC_MADISON, x: 450, y: 250, type: NodeType.ELEVATOR, label: 'Madison elevator west G' },
  { id: 'loc-madison-g-n10', floorId: 'loc-madison-g', buildingId: BuildingId.LOC_MADISON, x: 1350, y: 250, type: NodeType.ELEVATOR, label: 'Madison elevator east G' },
  { id: 'loc-madison-g-n11', floorId: 'loc-madison-g', buildingId: BuildingId.LOC_MADISON, x: 700, y: 800, type: NodeType.STAIRS, label: 'Madison stairwell SW G' },
  { id: 'loc-madison-g-n12', floorId: 'loc-madison-g', buildingId: BuildingId.LOC_MADISON, x: 1100, y: 800, type: NodeType.STAIRS, label: 'Madison stairwell SE G' },
  { id: 'loc-madison-g-n13', floorId: 'loc-madison-g', buildingId: BuildingId.LOC_MADISON, x: 900, y: 900, type: NodeType.BUILDING_ENTRANCE, label: 'Madison main entrance' },

  // --- loc-madison-1 ---
  { id: 'loc-madison-1-n1', floorId: 'loc-madison-1', buildingId: BuildingId.LOC_MADISON, x: 200, y: 500, type: NodeType.HALLWAY, label: 'Madison 1 west corridor' },
  { id: 'loc-madison-1-n2', floorId: 'loc-madison-1', buildingId: BuildingId.LOC_MADISON, x: 600, y: 500, type: NodeType.HALLWAY, label: 'Madison 1 west-central' },
  { id: 'loc-madison-1-n3', floorId: 'loc-madison-1', buildingId: BuildingId.LOC_MADISON, x: 900, y: 500, type: NodeType.HALLWAY, label: 'Madison 1 central' },
  { id: 'loc-madison-1-n4', floorId: 'loc-madison-1', buildingId: BuildingId.LOC_MADISON, x: 1200, y: 500, type: NodeType.HALLWAY, label: 'Madison 1 east-central' },
  { id: 'loc-madison-1-n5', floorId: 'loc-madison-1', buildingId: BuildingId.LOC_MADISON, x: 1600, y: 500, type: NodeType.HALLWAY, label: 'Madison 1 east corridor' },
  { id: 'loc-madison-1-n6', floorId: 'loc-madison-1', buildingId: BuildingId.LOC_MADISON, x: 450, y: 250, type: NodeType.ELEVATOR, label: 'Madison elevator west 1' },
  { id: 'loc-madison-1-n7', floorId: 'loc-madison-1', buildingId: BuildingId.LOC_MADISON, x: 1350, y: 250, type: NodeType.ELEVATOR, label: 'Madison elevator east 1' },
  { id: 'loc-madison-1-n8', floorId: 'loc-madison-1', buildingId: BuildingId.LOC_MADISON, x: 700, y: 800, type: NodeType.STAIRS, label: 'Madison stairwell SW 1' },
  { id: 'loc-madison-1-n9', floorId: 'loc-madison-1', buildingId: BuildingId.LOC_MADISON, x: 1100, y: 800, type: NodeType.STAIRS, label: 'Madison stairwell SE 1' },

  // --- loc-madison-2 ---
  { id: 'loc-madison-2-n1', floorId: 'loc-madison-2', buildingId: BuildingId.LOC_MADISON, x: 200, y: 500, type: NodeType.HALLWAY, label: 'Madison 2 west corridor' },
  { id: 'loc-madison-2-n2', floorId: 'loc-madison-2', buildingId: BuildingId.LOC_MADISON, x: 600, y: 500, type: NodeType.HALLWAY, label: 'Madison 2 west-central' },
  { id: 'loc-madison-2-n3', floorId: 'loc-madison-2', buildingId: BuildingId.LOC_MADISON, x: 900, y: 500, type: NodeType.HALLWAY, label: 'Madison 2 central' },
  { id: 'loc-madison-2-n4', floorId: 'loc-madison-2', buildingId: BuildingId.LOC_MADISON, x: 1200, y: 500, type: NodeType.HALLWAY, label: 'Madison 2 east-central' },
  { id: 'loc-madison-2-n5', floorId: 'loc-madison-2', buildingId: BuildingId.LOC_MADISON, x: 1600, y: 500, type: NodeType.HALLWAY, label: 'Madison 2 east corridor' },
  { id: 'loc-madison-2-n6', floorId: 'loc-madison-2', buildingId: BuildingId.LOC_MADISON, x: 450, y: 250, type: NodeType.ELEVATOR, label: 'Madison elevator west 2' },
  { id: 'loc-madison-2-n7', floorId: 'loc-madison-2', buildingId: BuildingId.LOC_MADISON, x: 1350, y: 250, type: NodeType.ELEVATOR, label: 'Madison elevator east 2' },
  { id: 'loc-madison-2-n8', floorId: 'loc-madison-2', buildingId: BuildingId.LOC_MADISON, x: 700, y: 800, type: NodeType.STAIRS, label: 'Madison stairwell SW 2' },
  { id: 'loc-madison-2-n9', floorId: 'loc-madison-2', buildingId: BuildingId.LOC_MADISON, x: 1100, y: 800, type: NodeType.STAIRS, label: 'Madison stairwell SE 2' },

  // --- loc-madison-3 ---
  { id: 'loc-madison-3-n1', floorId: 'loc-madison-3', buildingId: BuildingId.LOC_MADISON, x: 200, y: 500, type: NodeType.HALLWAY, label: 'Madison 3 west corridor' },
  { id: 'loc-madison-3-n2', floorId: 'loc-madison-3', buildingId: BuildingId.LOC_MADISON, x: 900, y: 500, type: NodeType.HALLWAY, label: 'Madison 3 central' },
  { id: 'loc-madison-3-n3', floorId: 'loc-madison-3', buildingId: BuildingId.LOC_MADISON, x: 1600, y: 500, type: NodeType.HALLWAY, label: 'Madison 3 east corridor' },
  { id: 'loc-madison-3-n4', floorId: 'loc-madison-3', buildingId: BuildingId.LOC_MADISON, x: 450, y: 250, type: NodeType.ELEVATOR, label: 'Madison elevator west 3' },
  { id: 'loc-madison-3-n5', floorId: 'loc-madison-3', buildingId: BuildingId.LOC_MADISON, x: 1350, y: 250, type: NodeType.ELEVATOR, label: 'Madison elevator east 3' },
  { id: 'loc-madison-3-n6', floorId: 'loc-madison-3', buildingId: BuildingId.LOC_MADISON, x: 700, y: 800, type: NodeType.STAIRS, label: 'Madison stairwell SW 3' },
  { id: 'loc-madison-3-n7', floorId: 'loc-madison-3', buildingId: BuildingId.LOC_MADISON, x: 1100, y: 800, type: NodeType.STAIRS, label: 'Madison stairwell SE 3' },

  // --- loc-madison-4 ---
  { id: 'loc-madison-4-n1', floorId: 'loc-madison-4', buildingId: BuildingId.LOC_MADISON, x: 200, y: 500, type: NodeType.HALLWAY, label: 'Madison 4 west corridor' },
  { id: 'loc-madison-4-n2', floorId: 'loc-madison-4', buildingId: BuildingId.LOC_MADISON, x: 900, y: 500, type: NodeType.HALLWAY, label: 'Madison 4 central' },
  { id: 'loc-madison-4-n3', floorId: 'loc-madison-4', buildingId: BuildingId.LOC_MADISON, x: 1600, y: 500, type: NodeType.HALLWAY, label: 'Madison 4 east corridor' },
  { id: 'loc-madison-4-n4', floorId: 'loc-madison-4', buildingId: BuildingId.LOC_MADISON, x: 450, y: 250, type: NodeType.ELEVATOR, label: 'Madison elevator west 4' },
  { id: 'loc-madison-4-n5', floorId: 'loc-madison-4', buildingId: BuildingId.LOC_MADISON, x: 1350, y: 250, type: NodeType.ELEVATOR, label: 'Madison elevator east 4' },
  { id: 'loc-madison-4-n6', floorId: 'loc-madison-4', buildingId: BuildingId.LOC_MADISON, x: 700, y: 800, type: NodeType.STAIRS, label: 'Madison stairwell SW 4' },
  { id: 'loc-madison-4-n7', floorId: 'loc-madison-4', buildingId: BuildingId.LOC_MADISON, x: 1100, y: 800, type: NodeType.STAIRS, label: 'Madison stairwell SE 4' },

  // --- loc-madison-5 ---
  { id: 'loc-madison-5-n1', floorId: 'loc-madison-5', buildingId: BuildingId.LOC_MADISON, x: 200, y: 500, type: NodeType.HALLWAY, label: 'Madison 5 west corridor' },
  { id: 'loc-madison-5-n2', floorId: 'loc-madison-5', buildingId: BuildingId.LOC_MADISON, x: 900, y: 500, type: NodeType.HALLWAY, label: 'Madison 5 central' },
  { id: 'loc-madison-5-n3', floorId: 'loc-madison-5', buildingId: BuildingId.LOC_MADISON, x: 1600, y: 500, type: NodeType.HALLWAY, label: 'Madison 5 east corridor' },
  { id: 'loc-madison-5-n4', floorId: 'loc-madison-5', buildingId: BuildingId.LOC_MADISON, x: 450, y: 250, type: NodeType.ELEVATOR, label: 'Madison elevator west 5' },
  { id: 'loc-madison-5-n5', floorId: 'loc-madison-5', buildingId: BuildingId.LOC_MADISON, x: 1350, y: 250, type: NodeType.ELEVATOR, label: 'Madison elevator east 5' },
  { id: 'loc-madison-5-n6', floorId: 'loc-madison-5', buildingId: BuildingId.LOC_MADISON, x: 700, y: 800, type: NodeType.STAIRS, label: 'Madison stairwell SW 5' },
  { id: 'loc-madison-5-n7', floorId: 'loc-madison-5', buildingId: BuildingId.LOC_MADISON, x: 1100, y: 800, type: NodeType.STAIRS, label: 'Madison stairwell SE 5' },
];
