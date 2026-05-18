import { GraphEdge, EdgeType } from '../types';

// Helper: distance / 1.3 = approx walking seconds for hallway weight
// Elevator: 30 per floor
// Stairs: 45 per floor
// Tunnels: 60-300 based on length

export const GRAPH_EDGES: GraphEdge[] = [
  // ============================================================
  // RAYBURN — INTRA-FLOOR HALLWAY EDGES
  // ============================================================

  // rayburn-b hallways
  { from: 'rayburn-b-n1', to: 'rayburn-b-n2', weight: 15, distance: 200, type: EdgeType.HALLWAY, accessible: true },
  { from: 'rayburn-b-n2', to: 'rayburn-b-n3', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'rayburn-b-n3', to: 'rayburn-b-n4', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'rayburn-b-n4', to: 'rayburn-b-n5', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'rayburn-b-n5', to: 'rayburn-b-n6', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'rayburn-b-n6', to: 'rayburn-b-n13', weight: 15, distance: 200, type: EdgeType.HALLWAY, accessible: true },
  { from: 'rayburn-b-n4', to: 'rayburn-b-n7', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'rayburn-b-n4', to: 'rayburn-b-n8', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'rayburn-b-n7', to: 'rayburn-b-n9', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'rayburn-b-n7', to: 'rayburn-b-n10', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'rayburn-b-n8', to: 'rayburn-b-n11', weight: 15, distance: 200, type: EdgeType.HALLWAY, accessible: true },
  { from: 'rayburn-b-n8', to: 'rayburn-b-n12', weight: 15, distance: 200, type: EdgeType.HALLWAY, accessible: true },
  { from: 'rayburn-b-n1', to: 'rayburn-b-n14', weight: 15, distance: 200, type: EdgeType.HALLWAY, accessible: true },

  // rayburn-1 hallways
  { from: 'rayburn-1-n1', to: 'rayburn-1-n2', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'rayburn-1-n2', to: 'rayburn-1-n3', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'rayburn-1-n3', to: 'rayburn-1-n4', weight: 15, distance: 200, type: EdgeType.HALLWAY, accessible: true },
  { from: 'rayburn-1-n4', to: 'rayburn-1-n5', weight: 15, distance: 200, type: EdgeType.HALLWAY, accessible: true },
  { from: 'rayburn-1-n5', to: 'rayburn-1-n6', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'rayburn-1-n6', to: 'rayburn-1-n7', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'rayburn-1-n4', to: 'rayburn-1-n8', weight: 31, distance: 400, type: EdgeType.HALLWAY, accessible: true },
  { from: 'rayburn-1-n4', to: 'rayburn-1-n9', weight: 31, distance: 400, type: EdgeType.HALLWAY, accessible: true },
  { from: 'rayburn-1-n8', to: 'rayburn-1-n10', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'rayburn-1-n8', to: 'rayburn-1-n11', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'rayburn-1-n9', to: 'rayburn-1-n12', weight: 15, distance: 200, type: EdgeType.HALLWAY, accessible: true },
  { from: 'rayburn-1-n9', to: 'rayburn-1-n13', weight: 15, distance: 200, type: EdgeType.HALLWAY, accessible: true },
  { from: 'rayburn-1-n1', to: 'rayburn-1-n14', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },

  // rayburn-2 hallways
  { from: 'rayburn-2-n1', to: 'rayburn-2-n2', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'rayburn-2-n2', to: 'rayburn-2-n3', weight: 31, distance: 400, type: EdgeType.HALLWAY, accessible: true },
  { from: 'rayburn-2-n3', to: 'rayburn-2-n4', weight: 31, distance: 400, type: EdgeType.HALLWAY, accessible: true },
  { from: 'rayburn-2-n4', to: 'rayburn-2-n5', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'rayburn-2-n3', to: 'rayburn-2-n6', weight: 31, distance: 400, type: EdgeType.HALLWAY, accessible: true },
  { from: 'rayburn-2-n3', to: 'rayburn-2-n7', weight: 31, distance: 400, type: EdgeType.HALLWAY, accessible: true },
  { from: 'rayburn-2-n6', to: 'rayburn-2-n8', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'rayburn-2-n6', to: 'rayburn-2-n9', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'rayburn-2-n7', to: 'rayburn-2-n10', weight: 15, distance: 200, type: EdgeType.HALLWAY, accessible: true },
  { from: 'rayburn-2-n7', to: 'rayburn-2-n11', weight: 15, distance: 200, type: EdgeType.HALLWAY, accessible: true },

  // rayburn-3 hallways
  { from: 'rayburn-3-n1', to: 'rayburn-3-n2', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'rayburn-3-n2', to: 'rayburn-3-n3', weight: 31, distance: 400, type: EdgeType.HALLWAY, accessible: true },
  { from: 'rayburn-3-n3', to: 'rayburn-3-n4', weight: 31, distance: 400, type: EdgeType.HALLWAY, accessible: true },
  { from: 'rayburn-3-n4', to: 'rayburn-3-n5', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'rayburn-3-n3', to: 'rayburn-3-n6', weight: 31, distance: 400, type: EdgeType.HALLWAY, accessible: true },
  { from: 'rayburn-3-n3', to: 'rayburn-3-n7', weight: 31, distance: 400, type: EdgeType.HALLWAY, accessible: true },
  { from: 'rayburn-3-n6', to: 'rayburn-3-n8', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'rayburn-3-n6', to: 'rayburn-3-n9', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'rayburn-3-n7', to: 'rayburn-3-n10', weight: 15, distance: 200, type: EdgeType.HALLWAY, accessible: true },
  { from: 'rayburn-3-n7', to: 'rayburn-3-n11', weight: 15, distance: 200, type: EdgeType.HALLWAY, accessible: true },

  // RAYBURN — ELEVATOR EDGES (between floors)
  { from: 'rayburn-b-n9', to: 'rayburn-1-n10', weight: 30, distance: 10, type: EdgeType.ELEVATOR, accessible: true },
  { from: 'rayburn-1-n10', to: 'rayburn-2-n8', weight: 30, distance: 10, type: EdgeType.ELEVATOR, accessible: true },
  { from: 'rayburn-2-n8', to: 'rayburn-3-n8', weight: 30, distance: 10, type: EdgeType.ELEVATOR, accessible: true },
  { from: 'rayburn-b-n10', to: 'rayburn-1-n11', weight: 30, distance: 10, type: EdgeType.ELEVATOR, accessible: true },
  { from: 'rayburn-1-n11', to: 'rayburn-2-n9', weight: 30, distance: 10, type: EdgeType.ELEVATOR, accessible: true },
  { from: 'rayburn-2-n9', to: 'rayburn-3-n9', weight: 30, distance: 10, type: EdgeType.ELEVATOR, accessible: true },

  // RAYBURN — STAIR EDGES (between adjacent floors)
  { from: 'rayburn-b-n11', to: 'rayburn-1-n12', weight: 45, distance: 10, type: EdgeType.STAIRS_UP, accessible: false },
  { from: 'rayburn-1-n12', to: 'rayburn-2-n10', weight: 45, distance: 10, type: EdgeType.STAIRS_UP, accessible: false },
  { from: 'rayburn-2-n10', to: 'rayburn-3-n10', weight: 45, distance: 10, type: EdgeType.STAIRS_UP, accessible: false },
  { from: 'rayburn-b-n12', to: 'rayburn-1-n13', weight: 45, distance: 10, type: EdgeType.STAIRS_UP, accessible: false },
  { from: 'rayburn-1-n13', to: 'rayburn-2-n11', weight: 45, distance: 10, type: EdgeType.STAIRS_UP, accessible: false },
  { from: 'rayburn-2-n11', to: 'rayburn-3-n11', weight: 45, distance: 10, type: EdgeType.STAIRS_UP, accessible: false },

  // ============================================================
  // LONGWORTH — INTRA-FLOOR HALLWAY EDGES
  // ============================================================

  // longworth-b hallways
  { from: 'longworth-b-n1', to: 'longworth-b-n2', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'longworth-b-n2', to: 'longworth-b-n3', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'longworth-b-n3', to: 'longworth-b-n4', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'longworth-b-n4', to: 'longworth-b-n5', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'longworth-b-n5', to: 'longworth-b-n6', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'longworth-b-n6', to: 'longworth-b-n13', weight: 15, distance: 200, type: EdgeType.HALLWAY, accessible: true },
  { from: 'longworth-b-n4', to: 'longworth-b-n7', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'longworth-b-n4', to: 'longworth-b-n8', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'longworth-b-n7', to: 'longworth-b-n9', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'longworth-b-n7', to: 'longworth-b-n10', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'longworth-b-n8', to: 'longworth-b-n11', weight: 15, distance: 200, type: EdgeType.HALLWAY, accessible: true },
  { from: 'longworth-b-n8', to: 'longworth-b-n12', weight: 15, distance: 200, type: EdgeType.HALLWAY, accessible: true },
  { from: 'longworth-b-n7', to: 'longworth-b-n14', weight: 8, distance: 100, type: EdgeType.HALLWAY, accessible: true },

  // longworth-1 hallways
  { from: 'longworth-1-n1', to: 'longworth-1-n2', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'longworth-1-n2', to: 'longworth-1-n3', weight: 31, distance: 400, type: EdgeType.HALLWAY, accessible: true },
  { from: 'longworth-1-n3', to: 'longworth-1-n4', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'longworth-1-n4', to: 'longworth-1-n5', weight: 31, distance: 400, type: EdgeType.HALLWAY, accessible: true },
  { from: 'longworth-1-n3', to: 'longworth-1-n6', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'longworth-1-n3', to: 'longworth-1-n7', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'longworth-1-n6', to: 'longworth-1-n8', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'longworth-1-n6', to: 'longworth-1-n9', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'longworth-1-n7', to: 'longworth-1-n10', weight: 15, distance: 200, type: EdgeType.HALLWAY, accessible: true },
  { from: 'longworth-1-n7', to: 'longworth-1-n11', weight: 15, distance: 200, type: EdgeType.HALLWAY, accessible: true },
  { from: 'longworth-1-n1', to: 'longworth-1-n12', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },

  // longworth-2 hallways
  { from: 'longworth-2-n1', to: 'longworth-2-n2', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'longworth-2-n2', to: 'longworth-2-n3', weight: 31, distance: 400, type: EdgeType.HALLWAY, accessible: true },
  { from: 'longworth-2-n3', to: 'longworth-2-n4', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'longworth-2-n4', to: 'longworth-2-n5', weight: 31, distance: 400, type: EdgeType.HALLWAY, accessible: true },
  { from: 'longworth-2-n3', to: 'longworth-2-n6', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'longworth-2-n3', to: 'longworth-2-n7', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'longworth-2-n6', to: 'longworth-2-n8', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'longworth-2-n6', to: 'longworth-2-n9', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'longworth-2-n7', to: 'longworth-2-n10', weight: 15, distance: 200, type: EdgeType.HALLWAY, accessible: true },
  { from: 'longworth-2-n7', to: 'longworth-2-n11', weight: 15, distance: 200, type: EdgeType.HALLWAY, accessible: true },

  // LONGWORTH — ELEVATORS
  { from: 'longworth-b-n9', to: 'longworth-1-n8', weight: 30, distance: 10, type: EdgeType.ELEVATOR, accessible: true },
  { from: 'longworth-1-n8', to: 'longworth-2-n8', weight: 30, distance: 10, type: EdgeType.ELEVATOR, accessible: true },
  { from: 'longworth-b-n10', to: 'longworth-1-n9', weight: 30, distance: 10, type: EdgeType.ELEVATOR, accessible: true },
  { from: 'longworth-1-n9', to: 'longworth-2-n9', weight: 30, distance: 10, type: EdgeType.ELEVATOR, accessible: true },

  // LONGWORTH — STAIRS
  { from: 'longworth-b-n11', to: 'longworth-1-n10', weight: 45, distance: 10, type: EdgeType.STAIRS_UP, accessible: false },
  { from: 'longworth-1-n10', to: 'longworth-2-n10', weight: 45, distance: 10, type: EdgeType.STAIRS_UP, accessible: false },
  { from: 'longworth-b-n12', to: 'longworth-1-n11', weight: 45, distance: 10, type: EdgeType.STAIRS_UP, accessible: false },
  { from: 'longworth-1-n11', to: 'longworth-2-n11', weight: 45, distance: 10, type: EdgeType.STAIRS_UP, accessible: false },

  // ============================================================
  // CANNON — INTRA-FLOOR HALLWAY EDGES
  // ============================================================

  // cannon-b hallways
  { from: 'cannon-b-n1', to: 'cannon-b-n2', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'cannon-b-n2', to: 'cannon-b-n3', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'cannon-b-n3', to: 'cannon-b-n4', weight: 15, distance: 200, type: EdgeType.HALLWAY, accessible: true },
  { from: 'cannon-b-n4', to: 'cannon-b-n5', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'cannon-b-n5', to: 'cannon-b-n6', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'cannon-b-n6', to: 'cannon-b-n14', weight: 15, distance: 200, type: EdgeType.HALLWAY, accessible: true },
  { from: 'cannon-b-n4', to: 'cannon-b-n7', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'cannon-b-n4', to: 'cannon-b-n8', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'cannon-b-n7', to: 'cannon-b-n9', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'cannon-b-n7', to: 'cannon-b-n10', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'cannon-b-n8', to: 'cannon-b-n11', weight: 15, distance: 200, type: EdgeType.HALLWAY, accessible: true },
  { from: 'cannon-b-n8', to: 'cannon-b-n12', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'cannon-b-n7', to: 'cannon-b-n13', weight: 8, distance: 100, type: EdgeType.HALLWAY, accessible: true },

  // cannon-1 hallways
  { from: 'cannon-1-n1', to: 'cannon-1-n2', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'cannon-1-n2', to: 'cannon-1-n3', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'cannon-1-n3', to: 'cannon-1-n4', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'cannon-1-n4', to: 'cannon-1-n5', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'cannon-1-n3', to: 'cannon-1-n6', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'cannon-1-n3', to: 'cannon-1-n7', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'cannon-1-n6', to: 'cannon-1-n8', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'cannon-1-n6', to: 'cannon-1-n9', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'cannon-1-n7', to: 'cannon-1-n10', weight: 15, distance: 200, type: EdgeType.HALLWAY, accessible: true },
  { from: 'cannon-1-n7', to: 'cannon-1-n11', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'cannon-1-n1', to: 'cannon-1-n12', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },

  // cannon-2 hallways
  { from: 'cannon-2-n1', to: 'cannon-2-n2', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'cannon-2-n2', to: 'cannon-2-n3', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'cannon-2-n3', to: 'cannon-2-n4', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'cannon-2-n4', to: 'cannon-2-n5', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'cannon-2-n3', to: 'cannon-2-n6', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'cannon-2-n3', to: 'cannon-2-n7', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'cannon-2-n6', to: 'cannon-2-n8', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'cannon-2-n6', to: 'cannon-2-n9', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'cannon-2-n7', to: 'cannon-2-n10', weight: 15, distance: 200, type: EdgeType.HALLWAY, accessible: true },
  { from: 'cannon-2-n7', to: 'cannon-2-n11', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },

  // cannon-3 hallways
  { from: 'cannon-3-n1', to: 'cannon-3-n2', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'cannon-3-n2', to: 'cannon-3-n3', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'cannon-3-n3', to: 'cannon-3-n4', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'cannon-3-n4', to: 'cannon-3-n5', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'cannon-3-n3', to: 'cannon-3-n8', weight: 15, distance: 200, type: EdgeType.HALLWAY, accessible: true },
  { from: 'cannon-3-n3', to: 'cannon-3-n9', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'cannon-3-n1', to: 'cannon-3-n6', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'cannon-3-n5', to: 'cannon-3-n7', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },

  // cannon-4 hallways
  { from: 'cannon-4-n1', to: 'cannon-4-n2', weight: 38, distance: 500, type: EdgeType.HALLWAY, accessible: true },
  { from: 'cannon-4-n2', to: 'cannon-4-n3', weight: 38, distance: 500, type: EdgeType.HALLWAY, accessible: true },
  { from: 'cannon-4-n1', to: 'cannon-4-n4', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'cannon-4-n3', to: 'cannon-4-n5', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'cannon-4-n2', to: 'cannon-4-n6', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'cannon-4-n2', to: 'cannon-4-n7', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },

  // cannon-5 hallways
  { from: 'cannon-5-n1', to: 'cannon-5-n2', weight: 38, distance: 500, type: EdgeType.HALLWAY, accessible: true },
  { from: 'cannon-5-n2', to: 'cannon-5-n3', weight: 38, distance: 500, type: EdgeType.HALLWAY, accessible: true },
  { from: 'cannon-5-n1', to: 'cannon-5-n4', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'cannon-5-n3', to: 'cannon-5-n5', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'cannon-5-n2', to: 'cannon-5-n6', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'cannon-5-n2', to: 'cannon-5-n7', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },

  // CANNON — ELEVATORS
  { from: 'cannon-b-n9', to: 'cannon-1-n8', weight: 30, distance: 10, type: EdgeType.ELEVATOR, accessible: true },
  { from: 'cannon-1-n8', to: 'cannon-2-n8', weight: 30, distance: 10, type: EdgeType.ELEVATOR, accessible: true },
  { from: 'cannon-2-n8', to: 'cannon-3-n6', weight: 30, distance: 10, type: EdgeType.ELEVATOR, accessible: true },
  { from: 'cannon-3-n6', to: 'cannon-4-n4', weight: 30, distance: 10, type: EdgeType.ELEVATOR, accessible: true },
  { from: 'cannon-4-n4', to: 'cannon-5-n4', weight: 30, distance: 10, type: EdgeType.ELEVATOR, accessible: true },
  { from: 'cannon-b-n10', to: 'cannon-1-n9', weight: 30, distance: 10, type: EdgeType.ELEVATOR, accessible: true },
  { from: 'cannon-1-n9', to: 'cannon-2-n9', weight: 30, distance: 10, type: EdgeType.ELEVATOR, accessible: true },
  { from: 'cannon-2-n9', to: 'cannon-3-n7', weight: 30, distance: 10, type: EdgeType.ELEVATOR, accessible: true },
  { from: 'cannon-3-n7', to: 'cannon-4-n5', weight: 30, distance: 10, type: EdgeType.ELEVATOR, accessible: true },
  { from: 'cannon-4-n5', to: 'cannon-5-n5', weight: 30, distance: 10, type: EdgeType.ELEVATOR, accessible: true },

  // CANNON — STAIRS
  { from: 'cannon-b-n11', to: 'cannon-1-n10', weight: 45, distance: 10, type: EdgeType.STAIRS_UP, accessible: false },
  { from: 'cannon-1-n10', to: 'cannon-2-n10', weight: 45, distance: 10, type: EdgeType.STAIRS_UP, accessible: false },
  { from: 'cannon-2-n10', to: 'cannon-3-n8', weight: 45, distance: 10, type: EdgeType.STAIRS_UP, accessible: false },
  { from: 'cannon-3-n8', to: 'cannon-4-n6', weight: 45, distance: 10, type: EdgeType.STAIRS_UP, accessible: false },
  { from: 'cannon-4-n6', to: 'cannon-5-n6', weight: 45, distance: 10, type: EdgeType.STAIRS_UP, accessible: false },
  { from: 'cannon-b-n12', to: 'cannon-1-n11', weight: 45, distance: 10, type: EdgeType.STAIRS_UP, accessible: false },
  { from: 'cannon-1-n11', to: 'cannon-2-n11', weight: 45, distance: 10, type: EdgeType.STAIRS_UP, accessible: false },
  { from: 'cannon-2-n11', to: 'cannon-3-n9', weight: 45, distance: 10, type: EdgeType.STAIRS_UP, accessible: false },
  { from: 'cannon-3-n9', to: 'cannon-4-n7', weight: 45, distance: 10, type: EdgeType.STAIRS_UP, accessible: false },
  { from: 'cannon-4-n7', to: 'cannon-5-n7', weight: 45, distance: 10, type: EdgeType.STAIRS_UP, accessible: false },

  // ============================================================
  // HART — INTRA-FLOOR HALLWAY EDGES
  // ============================================================

  // hart-b hallways
  { from: 'hart-b-n1', to: 'hart-b-n2', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'hart-b-n2', to: 'hart-b-n3', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'hart-b-n3', to: 'hart-b-n4', weight: 15, distance: 200, type: EdgeType.HALLWAY, accessible: true },
  { from: 'hart-b-n4', to: 'hart-b-n5', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'hart-b-n5', to: 'hart-b-n6', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'hart-b-n4', to: 'hart-b-n7', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'hart-b-n4', to: 'hart-b-n8', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'hart-b-n7', to: 'hart-b-n9', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'hart-b-n7', to: 'hart-b-n10', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'hart-b-n8', to: 'hart-b-n11', weight: 15, distance: 200, type: EdgeType.HALLWAY, accessible: true },
  { from: 'hart-b-n8', to: 'hart-b-n12', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },

  // hart-1 hallways
  { from: 'hart-1-n1', to: 'hart-1-n2', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'hart-1-n2', to: 'hart-1-n3', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'hart-1-n3', to: 'hart-1-n4', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'hart-1-n4', to: 'hart-1-n5', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'hart-1-n3', to: 'hart-1-n6', weight: 27, distance: 350, type: EdgeType.HALLWAY, accessible: true },
  { from: 'hart-1-n3', to: 'hart-1-n7', weight: 27, distance: 350, type: EdgeType.HALLWAY, accessible: true },
  { from: 'hart-1-n6', to: 'hart-1-n8', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'hart-1-n6', to: 'hart-1-n9', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'hart-1-n7', to: 'hart-1-n10', weight: 15, distance: 200, type: EdgeType.HALLWAY, accessible: true },
  { from: 'hart-1-n7', to: 'hart-1-n11', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'hart-1-n1', to: 'hart-1-n12', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },

  // hart-2 hallways
  { from: 'hart-2-n1', to: 'hart-2-n2', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'hart-2-n2', to: 'hart-2-n3', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'hart-2-n3', to: 'hart-2-n4', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'hart-2-n4', to: 'hart-2-n5', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'hart-2-n1', to: 'hart-2-n6', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'hart-2-n5', to: 'hart-2-n7', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'hart-2-n2', to: 'hart-2-n8', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'hart-2-n4', to: 'hart-2-n9', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },

  // hart-3 hallways
  { from: 'hart-3-n1', to: 'hart-3-n2', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'hart-3-n2', to: 'hart-3-n3', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'hart-3-n3', to: 'hart-3-n4', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'hart-3-n4', to: 'hart-3-n5', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'hart-3-n1', to: 'hart-3-n6', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'hart-3-n5', to: 'hart-3-n7', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'hart-3-n2', to: 'hart-3-n8', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'hart-3-n4', to: 'hart-3-n9', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },

  // hart-4 hallways
  { from: 'hart-4-n1', to: 'hart-4-n2', weight: 38, distance: 500, type: EdgeType.HALLWAY, accessible: true },
  { from: 'hart-4-n2', to: 'hart-4-n3', weight: 38, distance: 500, type: EdgeType.HALLWAY, accessible: true },
  { from: 'hart-4-n1', to: 'hart-4-n4', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'hart-4-n3', to: 'hart-4-n5', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'hart-4-n2', to: 'hart-4-n6', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'hart-4-n2', to: 'hart-4-n7', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },

  // hart-5 hallways
  { from: 'hart-5-n1', to: 'hart-5-n2', weight: 38, distance: 500, type: EdgeType.HALLWAY, accessible: true },
  { from: 'hart-5-n2', to: 'hart-5-n3', weight: 38, distance: 500, type: EdgeType.HALLWAY, accessible: true },
  { from: 'hart-5-n1', to: 'hart-5-n4', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'hart-5-n3', to: 'hart-5-n5', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'hart-5-n2', to: 'hart-5-n6', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'hart-5-n2', to: 'hart-5-n7', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },

  // HART — ELEVATORS
  { from: 'hart-b-n9', to: 'hart-1-n8', weight: 30, distance: 10, type: EdgeType.ELEVATOR, accessible: true },
  { from: 'hart-1-n8', to: 'hart-2-n6', weight: 30, distance: 10, type: EdgeType.ELEVATOR, accessible: true },
  { from: 'hart-2-n6', to: 'hart-3-n6', weight: 30, distance: 10, type: EdgeType.ELEVATOR, accessible: true },
  { from: 'hart-3-n6', to: 'hart-4-n4', weight: 30, distance: 10, type: EdgeType.ELEVATOR, accessible: true },
  { from: 'hart-4-n4', to: 'hart-5-n4', weight: 30, distance: 10, type: EdgeType.ELEVATOR, accessible: true },
  { from: 'hart-b-n10', to: 'hart-1-n9', weight: 30, distance: 10, type: EdgeType.ELEVATOR, accessible: true },
  { from: 'hart-1-n9', to: 'hart-2-n7', weight: 30, distance: 10, type: EdgeType.ELEVATOR, accessible: true },
  { from: 'hart-2-n7', to: 'hart-3-n7', weight: 30, distance: 10, type: EdgeType.ELEVATOR, accessible: true },
  { from: 'hart-3-n7', to: 'hart-4-n5', weight: 30, distance: 10, type: EdgeType.ELEVATOR, accessible: true },
  { from: 'hart-4-n5', to: 'hart-5-n5', weight: 30, distance: 10, type: EdgeType.ELEVATOR, accessible: true },

  // HART — STAIRS
  { from: 'hart-b-n11', to: 'hart-1-n10', weight: 45, distance: 10, type: EdgeType.STAIRS_UP, accessible: false },
  { from: 'hart-1-n10', to: 'hart-2-n8', weight: 45, distance: 10, type: EdgeType.STAIRS_UP, accessible: false },
  { from: 'hart-2-n8', to: 'hart-3-n8', weight: 45, distance: 10, type: EdgeType.STAIRS_UP, accessible: false },
  { from: 'hart-3-n8', to: 'hart-4-n6', weight: 45, distance: 10, type: EdgeType.STAIRS_UP, accessible: false },
  { from: 'hart-4-n6', to: 'hart-5-n6', weight: 45, distance: 10, type: EdgeType.STAIRS_UP, accessible: false },
  { from: 'hart-b-n12', to: 'hart-1-n11', weight: 45, distance: 10, type: EdgeType.STAIRS_UP, accessible: false },
  { from: 'hart-1-n11', to: 'hart-2-n9', weight: 45, distance: 10, type: EdgeType.STAIRS_UP, accessible: false },
  { from: 'hart-2-n9', to: 'hart-3-n9', weight: 45, distance: 10, type: EdgeType.STAIRS_UP, accessible: false },
  { from: 'hart-3-n9', to: 'hart-4-n7', weight: 45, distance: 10, type: EdgeType.STAIRS_UP, accessible: false },
  { from: 'hart-4-n7', to: 'hart-5-n7', weight: 45, distance: 10, type: EdgeType.STAIRS_UP, accessible: false },

  // ============================================================
  // DIRKSEN — INTRA-FLOOR HALLWAY EDGES
  // ============================================================

  // dirksen-b hallways
  { from: 'dirksen-b-n1', to: 'dirksen-b-n2', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'dirksen-b-n2', to: 'dirksen-b-n3', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'dirksen-b-n3', to: 'dirksen-b-n4', weight: 15, distance: 200, type: EdgeType.HALLWAY, accessible: true },
  { from: 'dirksen-b-n4', to: 'dirksen-b-n5', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'dirksen-b-n5', to: 'dirksen-b-n6', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'dirksen-b-n6', to: 'dirksen-b-n13', weight: 15, distance: 200, type: EdgeType.HALLWAY, accessible: true },
  { from: 'dirksen-b-n4', to: 'dirksen-b-n7', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'dirksen-b-n4', to: 'dirksen-b-n8', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'dirksen-b-n7', to: 'dirksen-b-n9', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'dirksen-b-n7', to: 'dirksen-b-n10', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'dirksen-b-n8', to: 'dirksen-b-n11', weight: 15, distance: 200, type: EdgeType.HALLWAY, accessible: true },
  { from: 'dirksen-b-n8', to: 'dirksen-b-n12', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'dirksen-b-n7', to: 'dirksen-b-n14', weight: 8, distance: 100, type: EdgeType.HALLWAY, accessible: true },
  { from: 'dirksen-b-n14', to: 'dirksen-b-n15', weight: 15, distance: 200, type: EdgeType.HALLWAY, accessible: true },

  // dirksen-1 hallways
  { from: 'dirksen-1-n1', to: 'dirksen-1-n2', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'dirksen-1-n2', to: 'dirksen-1-n3', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'dirksen-1-n3', to: 'dirksen-1-n4', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'dirksen-1-n4', to: 'dirksen-1-n5', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'dirksen-1-n3', to: 'dirksen-1-n6', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'dirksen-1-n3', to: 'dirksen-1-n7', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'dirksen-1-n6', to: 'dirksen-1-n8', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'dirksen-1-n6', to: 'dirksen-1-n9', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'dirksen-1-n7', to: 'dirksen-1-n10', weight: 15, distance: 200, type: EdgeType.HALLWAY, accessible: true },
  { from: 'dirksen-1-n7', to: 'dirksen-1-n11', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'dirksen-1-n1', to: 'dirksen-1-n12', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },

  // dirksen-2 hallways
  { from: 'dirksen-2-n1', to: 'dirksen-2-n2', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'dirksen-2-n2', to: 'dirksen-2-n3', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'dirksen-2-n3', to: 'dirksen-2-n4', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'dirksen-2-n4', to: 'dirksen-2-n5', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'dirksen-2-n1', to: 'dirksen-2-n6', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'dirksen-2-n5', to: 'dirksen-2-n7', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'dirksen-2-n2', to: 'dirksen-2-n8', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'dirksen-2-n4', to: 'dirksen-2-n9', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },

  // dirksen-3 hallways
  { from: 'dirksen-3-n1', to: 'dirksen-3-n2', weight: 46, distance: 600, type: EdgeType.HALLWAY, accessible: true },
  { from: 'dirksen-3-n2', to: 'dirksen-3-n3', weight: 46, distance: 600, type: EdgeType.HALLWAY, accessible: true },
  { from: 'dirksen-3-n1', to: 'dirksen-3-n4', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'dirksen-3-n3', to: 'dirksen-3-n5', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'dirksen-3-n2', to: 'dirksen-3-n6', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'dirksen-3-n2', to: 'dirksen-3-n7', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },

  // dirksen-4 hallways
  { from: 'dirksen-4-n1', to: 'dirksen-4-n2', weight: 46, distance: 600, type: EdgeType.HALLWAY, accessible: true },
  { from: 'dirksen-4-n2', to: 'dirksen-4-n3', weight: 46, distance: 600, type: EdgeType.HALLWAY, accessible: true },
  { from: 'dirksen-4-n1', to: 'dirksen-4-n4', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'dirksen-4-n3', to: 'dirksen-4-n5', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'dirksen-4-n2', to: 'dirksen-4-n6', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'dirksen-4-n2', to: 'dirksen-4-n7', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },

  // DIRKSEN — ELEVATORS
  { from: 'dirksen-b-n9', to: 'dirksen-1-n8', weight: 30, distance: 10, type: EdgeType.ELEVATOR, accessible: true },
  { from: 'dirksen-1-n8', to: 'dirksen-2-n6', weight: 30, distance: 10, type: EdgeType.ELEVATOR, accessible: true },
  { from: 'dirksen-2-n6', to: 'dirksen-3-n4', weight: 30, distance: 10, type: EdgeType.ELEVATOR, accessible: true },
  { from: 'dirksen-3-n4', to: 'dirksen-4-n4', weight: 30, distance: 10, type: EdgeType.ELEVATOR, accessible: true },
  { from: 'dirksen-b-n10', to: 'dirksen-1-n9', weight: 30, distance: 10, type: EdgeType.ELEVATOR, accessible: true },
  { from: 'dirksen-1-n9', to: 'dirksen-2-n7', weight: 30, distance: 10, type: EdgeType.ELEVATOR, accessible: true },
  { from: 'dirksen-2-n7', to: 'dirksen-3-n5', weight: 30, distance: 10, type: EdgeType.ELEVATOR, accessible: true },
  { from: 'dirksen-3-n5', to: 'dirksen-4-n5', weight: 30, distance: 10, type: EdgeType.ELEVATOR, accessible: true },

  // DIRKSEN — STAIRS
  { from: 'dirksen-b-n11', to: 'dirksen-1-n10', weight: 45, distance: 10, type: EdgeType.STAIRS_UP, accessible: false },
  { from: 'dirksen-1-n10', to: 'dirksen-2-n8', weight: 45, distance: 10, type: EdgeType.STAIRS_UP, accessible: false },
  { from: 'dirksen-2-n8', to: 'dirksen-3-n6', weight: 45, distance: 10, type: EdgeType.STAIRS_UP, accessible: false },
  { from: 'dirksen-3-n6', to: 'dirksen-4-n6', weight: 45, distance: 10, type: EdgeType.STAIRS_UP, accessible: false },
  { from: 'dirksen-b-n12', to: 'dirksen-1-n11', weight: 45, distance: 10, type: EdgeType.STAIRS_UP, accessible: false },
  { from: 'dirksen-1-n11', to: 'dirksen-2-n9', weight: 45, distance: 10, type: EdgeType.STAIRS_UP, accessible: false },
  { from: 'dirksen-2-n9', to: 'dirksen-3-n7', weight: 45, distance: 10, type: EdgeType.STAIRS_UP, accessible: false },
  { from: 'dirksen-3-n7', to: 'dirksen-4-n7', weight: 45, distance: 10, type: EdgeType.STAIRS_UP, accessible: false },

  // ============================================================
  // RUSSELL — INTRA-FLOOR HALLWAY EDGES
  // ============================================================

  // russell-b hallways
  { from: 'russell-b-n1', to: 'russell-b-n2', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'russell-b-n2', to: 'russell-b-n3', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'russell-b-n3', to: 'russell-b-n4', weight: 15, distance: 200, type: EdgeType.HALLWAY, accessible: true },
  { from: 'russell-b-n4', to: 'russell-b-n5', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'russell-b-n5', to: 'russell-b-n6', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'russell-b-n4', to: 'russell-b-n7', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'russell-b-n4', to: 'russell-b-n8', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'russell-b-n7', to: 'russell-b-n9', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'russell-b-n7', to: 'russell-b-n10', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'russell-b-n8', to: 'russell-b-n11', weight: 15, distance: 200, type: EdgeType.HALLWAY, accessible: true },
  { from: 'russell-b-n8', to: 'russell-b-n12', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'russell-b-n7', to: 'russell-b-n13', weight: 8, distance: 100, type: EdgeType.HALLWAY, accessible: true },
  { from: 'russell-b-n13', to: 'russell-b-n14', weight: 15, distance: 200, type: EdgeType.HALLWAY, accessible: true },

  // russell-1 hallways
  { from: 'russell-1-n1', to: 'russell-1-n2', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'russell-1-n2', to: 'russell-1-n3', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'russell-1-n3', to: 'russell-1-n4', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'russell-1-n4', to: 'russell-1-n5', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'russell-1-n3', to: 'russell-1-n6', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'russell-1-n3', to: 'russell-1-n7', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'russell-1-n6', to: 'russell-1-n8', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'russell-1-n6', to: 'russell-1-n9', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'russell-1-n7', to: 'russell-1-n10', weight: 15, distance: 200, type: EdgeType.HALLWAY, accessible: true },
  { from: 'russell-1-n7', to: 'russell-1-n11', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'russell-1-n1', to: 'russell-1-n12', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },

  // russell-2 hallways
  { from: 'russell-2-n1', to: 'russell-2-n2', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'russell-2-n2', to: 'russell-2-n3', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'russell-2-n3', to: 'russell-2-n4', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'russell-2-n4', to: 'russell-2-n5', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'russell-2-n1', to: 'russell-2-n6', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'russell-2-n5', to: 'russell-2-n7', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'russell-2-n2', to: 'russell-2-n8', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'russell-2-n4', to: 'russell-2-n9', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },

  // russell-3 hallways
  { from: 'russell-3-n1', to: 'russell-3-n2', weight: 46, distance: 600, type: EdgeType.HALLWAY, accessible: true },
  { from: 'russell-3-n2', to: 'russell-3-n3', weight: 46, distance: 600, type: EdgeType.HALLWAY, accessible: true },
  { from: 'russell-3-n1', to: 'russell-3-n4', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'russell-3-n3', to: 'russell-3-n5', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'russell-3-n2', to: 'russell-3-n6', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'russell-3-n2', to: 'russell-3-n7', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },

  // RUSSELL — ELEVATORS
  { from: 'russell-b-n9', to: 'russell-1-n8', weight: 30, distance: 10, type: EdgeType.ELEVATOR, accessible: true },
  { from: 'russell-1-n8', to: 'russell-2-n6', weight: 30, distance: 10, type: EdgeType.ELEVATOR, accessible: true },
  { from: 'russell-2-n6', to: 'russell-3-n4', weight: 30, distance: 10, type: EdgeType.ELEVATOR, accessible: true },
  { from: 'russell-b-n10', to: 'russell-1-n9', weight: 30, distance: 10, type: EdgeType.ELEVATOR, accessible: true },
  { from: 'russell-1-n9', to: 'russell-2-n7', weight: 30, distance: 10, type: EdgeType.ELEVATOR, accessible: true },
  { from: 'russell-2-n7', to: 'russell-3-n5', weight: 30, distance: 10, type: EdgeType.ELEVATOR, accessible: true },

  // RUSSELL — STAIRS
  { from: 'russell-b-n11', to: 'russell-1-n10', weight: 45, distance: 10, type: EdgeType.STAIRS_UP, accessible: false },
  { from: 'russell-1-n10', to: 'russell-2-n8', weight: 45, distance: 10, type: EdgeType.STAIRS_UP, accessible: false },
  { from: 'russell-2-n8', to: 'russell-3-n6', weight: 45, distance: 10, type: EdgeType.STAIRS_UP, accessible: false },
  { from: 'russell-b-n12', to: 'russell-1-n11', weight: 45, distance: 10, type: EdgeType.STAIRS_UP, accessible: false },
  { from: 'russell-1-n11', to: 'russell-2-n9', weight: 45, distance: 10, type: EdgeType.STAIRS_UP, accessible: false },
  { from: 'russell-2-n9', to: 'russell-3-n7', weight: 45, distance: 10, type: EdgeType.STAIRS_UP, accessible: false },

  // ============================================================
  // CAPITOL — INTRA-FLOOR HALLWAY EDGES
  // ============================================================

  // capitol-b hallways
  { from: 'capitol-b-n1', to: 'capitol-b-n2', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'capitol-b-n2', to: 'capitol-b-n3', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'capitol-b-n3', to: 'capitol-b-n4', weight: 15, distance: 200, type: EdgeType.HALLWAY, accessible: true },
  { from: 'capitol-b-n4', to: 'capitol-b-n5', weight: 15, distance: 200, type: EdgeType.HALLWAY, accessible: true },
  { from: 'capitol-b-n5', to: 'capitol-b-n6', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'capitol-b-n6', to: 'capitol-b-n7', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'capitol-b-n4', to: 'capitol-b-n8', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'capitol-b-n4', to: 'capitol-b-n9', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'capitol-b-n8', to: 'capitol-b-n10', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'capitol-b-n8', to: 'capitol-b-n11', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'capitol-b-n9', to: 'capitol-b-n12', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'capitol-b-n9', to: 'capitol-b-n13', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'capitol-b-n2', to: 'capitol-b-n14', weight: 8, distance: 100, type: EdgeType.HALLWAY, accessible: true },
  { from: 'capitol-b-n2', to: 'capitol-b-n15', weight: 8, distance: 100, type: EdgeType.HALLWAY, accessible: true },
  { from: 'capitol-b-n6', to: 'capitol-b-n16', weight: 8, distance: 100, type: EdgeType.HALLWAY, accessible: true },
  { from: 'capitol-b-n9', to: 'capitol-b-n17', weight: 15, distance: 200, type: EdgeType.HALLWAY, accessible: true },
  { from: 'capitol-b-n1', to: 'capitol-b-n18', weight: 8, distance: 100, type: EdgeType.HALLWAY, accessible: true },
  { from: 'capitol-b-n7', to: 'capitol-b-n19', weight: 8, distance: 100, type: EdgeType.HALLWAY, accessible: true },

  // capitol-1 hallways
  { from: 'capitol-1-n1', to: 'capitol-1-n2', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'capitol-1-n2', to: 'capitol-1-n3', weight: 31, distance: 400, type: EdgeType.HALLWAY, accessible: true },
  { from: 'capitol-1-n3', to: 'capitol-1-n4', weight: 31, distance: 400, type: EdgeType.HALLWAY, accessible: true },
  { from: 'capitol-1-n4', to: 'capitol-1-n5', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'capitol-1-n3', to: 'capitol-1-n6', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'capitol-1-n3', to: 'capitol-1-n7', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'capitol-1-n6', to: 'capitol-1-n8', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'capitol-1-n6', to: 'capitol-1-n9', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'capitol-1-n7', to: 'capitol-1-n10', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'capitol-1-n7', to: 'capitol-1-n11', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'capitol-1-n7', to: 'capitol-1-n12', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },

  // capitol-2 hallways
  { from: 'capitol-2-n1', to: 'capitol-2-n2', weight: 31, distance: 400, type: EdgeType.HALLWAY, accessible: true },
  { from: 'capitol-2-n2', to: 'capitol-2-n3', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'capitol-2-n3', to: 'capitol-2-n4', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'capitol-2-n4', to: 'capitol-2-n5', weight: 31, distance: 400, type: EdgeType.HALLWAY, accessible: true },
  { from: 'capitol-2-n2', to: 'capitol-2-n6', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'capitol-2-n4', to: 'capitol-2-n7', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'capitol-2-n2', to: 'capitol-2-n8', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'capitol-2-n4', to: 'capitol-2-n9', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },

  // capitol-3 hallways
  { from: 'capitol-3-n1', to: 'capitol-3-n2', weight: 46, distance: 600, type: EdgeType.HALLWAY, accessible: true },
  { from: 'capitol-3-n2', to: 'capitol-3-n3', weight: 46, distance: 600, type: EdgeType.HALLWAY, accessible: true },
  { from: 'capitol-3-n1', to: 'capitol-3-n4', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'capitol-3-n3', to: 'capitol-3-n5', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'capitol-3-n2', to: 'capitol-3-n6', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'capitol-3-n2', to: 'capitol-3-n7', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },

  // CAPITOL — ELEVATORS
  { from: 'capitol-b-n10', to: 'capitol-1-n8', weight: 30, distance: 10, type: EdgeType.ELEVATOR, accessible: true },
  { from: 'capitol-1-n8', to: 'capitol-2-n6', weight: 30, distance: 10, type: EdgeType.ELEVATOR, accessible: true },
  { from: 'capitol-2-n6', to: 'capitol-3-n4', weight: 30, distance: 10, type: EdgeType.ELEVATOR, accessible: true },
  { from: 'capitol-b-n11', to: 'capitol-1-n9', weight: 30, distance: 10, type: EdgeType.ELEVATOR, accessible: true },
  { from: 'capitol-1-n9', to: 'capitol-2-n7', weight: 30, distance: 10, type: EdgeType.ELEVATOR, accessible: true },
  { from: 'capitol-2-n7', to: 'capitol-3-n5', weight: 30, distance: 10, type: EdgeType.ELEVATOR, accessible: true },

  // CAPITOL — STAIRS
  { from: 'capitol-b-n12', to: 'capitol-1-n10', weight: 45, distance: 10, type: EdgeType.STAIRS_UP, accessible: false },
  { from: 'capitol-1-n10', to: 'capitol-2-n8', weight: 45, distance: 10, type: EdgeType.STAIRS_UP, accessible: false },
  { from: 'capitol-2-n8', to: 'capitol-3-n6', weight: 45, distance: 10, type: EdgeType.STAIRS_UP, accessible: false },
  { from: 'capitol-b-n13', to: 'capitol-1-n11', weight: 45, distance: 10, type: EdgeType.STAIRS_UP, accessible: false },
  { from: 'capitol-1-n11', to: 'capitol-2-n9', weight: 45, distance: 10, type: EdgeType.STAIRS_UP, accessible: false },
  { from: 'capitol-2-n9', to: 'capitol-3-n7', weight: 45, distance: 10, type: EdgeType.STAIRS_UP, accessible: false },

  // ============================================================
  // CVC — INTRA-FLOOR HALLWAY EDGES
  // ============================================================

  // cvc-lower hallways
  { from: 'cvc-lower-n1', to: 'cvc-lower-n2', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'cvc-lower-n2', to: 'cvc-lower-n3', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'cvc-lower-n3', to: 'cvc-lower-n4', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'cvc-lower-n4', to: 'cvc-lower-n5', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'cvc-lower-n5', to: 'cvc-lower-n6', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'cvc-lower-n4', to: 'cvc-lower-n7', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'cvc-lower-n4', to: 'cvc-lower-n8', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'cvc-lower-n7', to: 'cvc-lower-n9', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'cvc-lower-n7', to: 'cvc-lower-n10', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'cvc-lower-n8', to: 'cvc-lower-n11', weight: 15, distance: 200, type: EdgeType.HALLWAY, accessible: true },
  { from: 'cvc-lower-n8', to: 'cvc-lower-n12', weight: 15, distance: 200, type: EdgeType.HALLWAY, accessible: true },
  { from: 'cvc-lower-n7', to: 'cvc-lower-n13', weight: 8, distance: 100, type: EdgeType.HALLWAY, accessible: true },

  // cvc-upper hallways
  { from: 'cvc-upper-n1', to: 'cvc-upper-n2', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'cvc-upper-n2', to: 'cvc-upper-n3', weight: 31, distance: 400, type: EdgeType.HALLWAY, accessible: true },
  { from: 'cvc-upper-n3', to: 'cvc-upper-n4', weight: 31, distance: 400, type: EdgeType.HALLWAY, accessible: true },
  { from: 'cvc-upper-n4', to: 'cvc-upper-n5', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'cvc-upper-n3', to: 'cvc-upper-n6', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'cvc-upper-n3', to: 'cvc-upper-n7', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'cvc-upper-n6', to: 'cvc-upper-n8', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'cvc-upper-n6', to: 'cvc-upper-n9', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'cvc-upper-n7', to: 'cvc-upper-n10', weight: 15, distance: 200, type: EdgeType.HALLWAY, accessible: true },
  { from: 'cvc-upper-n7', to: 'cvc-upper-n11', weight: 15, distance: 200, type: EdgeType.HALLWAY, accessible: true },
  { from: 'cvc-upper-n6', to: 'cvc-upper-n12', weight: 8, distance: 100, type: EdgeType.HALLWAY, accessible: true },
  { from: 'cvc-upper-n7', to: 'cvc-upper-n13', weight: 8, distance: 100, type: EdgeType.HALLWAY, accessible: true },

  // CVC — ELEVATORS (lower <-> upper)
  { from: 'cvc-lower-n9', to: 'cvc-upper-n8', weight: 30, distance: 10, type: EdgeType.ELEVATOR, accessible: true },
  { from: 'cvc-lower-n10', to: 'cvc-upper-n9', weight: 30, distance: 10, type: EdgeType.ELEVATOR, accessible: true },

  // CVC — STAIRS (lower <-> upper)
  { from: 'cvc-lower-n11', to: 'cvc-upper-n10', weight: 45, distance: 10, type: EdgeType.STAIRS_UP, accessible: false },
  { from: 'cvc-lower-n12', to: 'cvc-upper-n11', weight: 45, distance: 10, type: EdgeType.STAIRS_UP, accessible: false },

  // CVC — ESCALATOR (lower <-> upper)
  { from: 'cvc-lower-n13', to: 'cvc-upper-n12', weight: 25, distance: 10, type: EdgeType.ESCALATOR_UP, accessible: true },

  // ============================================================
  // LOC JEFFERSON — INTRA-FLOOR HALLWAY EDGES
  // ============================================================

  // loc-jefferson-g hallways
  { from: 'loc-jefferson-g-n1', to: 'loc-jefferson-g-n2', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'loc-jefferson-g-n2', to: 'loc-jefferson-g-n3', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'loc-jefferson-g-n3', to: 'loc-jefferson-g-n4', weight: 15, distance: 200, type: EdgeType.HALLWAY, accessible: true },
  { from: 'loc-jefferson-g-n4', to: 'loc-jefferson-g-n5', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'loc-jefferson-g-n5', to: 'loc-jefferson-g-n6', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'loc-jefferson-g-n6', to: 'loc-jefferson-g-n13', weight: 15, distance: 200, type: EdgeType.HALLWAY, accessible: true },
  { from: 'loc-jefferson-g-n4', to: 'loc-jefferson-g-n7', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'loc-jefferson-g-n4', to: 'loc-jefferson-g-n8', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'loc-jefferson-g-n7', to: 'loc-jefferson-g-n9', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'loc-jefferson-g-n7', to: 'loc-jefferson-g-n10', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'loc-jefferson-g-n8', to: 'loc-jefferson-g-n11', weight: 15, distance: 200, type: EdgeType.HALLWAY, accessible: true },
  { from: 'loc-jefferson-g-n8', to: 'loc-jefferson-g-n12', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'loc-jefferson-g-n8', to: 'loc-jefferson-g-n14', weight: 15, distance: 200, type: EdgeType.HALLWAY, accessible: true },

  // loc-jefferson-1 hallways
  { from: 'loc-jefferson-1-n1', to: 'loc-jefferson-1-n2', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'loc-jefferson-1-n2', to: 'loc-jefferson-1-n3', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'loc-jefferson-1-n3', to: 'loc-jefferson-1-n4', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'loc-jefferson-1-n4', to: 'loc-jefferson-1-n5', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'loc-jefferson-1-n1', to: 'loc-jefferson-1-n6', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'loc-jefferson-1-n5', to: 'loc-jefferson-1-n7', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'loc-jefferson-1-n2', to: 'loc-jefferson-1-n8', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'loc-jefferson-1-n4', to: 'loc-jefferson-1-n9', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },

  // loc-jefferson-2 hallways
  { from: 'loc-jefferson-2-n1', to: 'loc-jefferson-2-n2', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'loc-jefferson-2-n2', to: 'loc-jefferson-2-n3', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'loc-jefferson-2-n3', to: 'loc-jefferson-2-n4', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'loc-jefferson-2-n4', to: 'loc-jefferson-2-n5', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'loc-jefferson-2-n1', to: 'loc-jefferson-2-n6', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'loc-jefferson-2-n5', to: 'loc-jefferson-2-n7', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'loc-jefferson-2-n2', to: 'loc-jefferson-2-n8', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'loc-jefferson-2-n4', to: 'loc-jefferson-2-n9', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },

  // LOC JEFFERSON — ELEVATORS
  { from: 'loc-jefferson-g-n9', to: 'loc-jefferson-1-n6', weight: 30, distance: 10, type: EdgeType.ELEVATOR, accessible: true },
  { from: 'loc-jefferson-1-n6', to: 'loc-jefferson-2-n6', weight: 30, distance: 10, type: EdgeType.ELEVATOR, accessible: true },
  { from: 'loc-jefferson-g-n10', to: 'loc-jefferson-1-n7', weight: 30, distance: 10, type: EdgeType.ELEVATOR, accessible: true },
  { from: 'loc-jefferson-1-n7', to: 'loc-jefferson-2-n7', weight: 30, distance: 10, type: EdgeType.ELEVATOR, accessible: true },

  // LOC JEFFERSON — STAIRS
  { from: 'loc-jefferson-g-n11', to: 'loc-jefferson-1-n8', weight: 45, distance: 10, type: EdgeType.STAIRS_UP, accessible: false },
  { from: 'loc-jefferson-1-n8', to: 'loc-jefferson-2-n8', weight: 45, distance: 10, type: EdgeType.STAIRS_UP, accessible: false },
  { from: 'loc-jefferson-g-n12', to: 'loc-jefferson-1-n9', weight: 45, distance: 10, type: EdgeType.STAIRS_UP, accessible: false },
  { from: 'loc-jefferson-1-n9', to: 'loc-jefferson-2-n9', weight: 45, distance: 10, type: EdgeType.STAIRS_UP, accessible: false },

  // ============================================================
  // LOC ADAMS — INTRA-FLOOR HALLWAY EDGES
  // ============================================================

  // loc-adams-1 hallways
  { from: 'loc-adams-1-n1', to: 'loc-adams-1-n2', weight: 15, distance: 200, type: EdgeType.HALLWAY, accessible: true },
  { from: 'loc-adams-1-n2', to: 'loc-adams-1-n3', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'loc-adams-1-n3', to: 'loc-adams-1-n4', weight: 12, distance: 150, type: EdgeType.HALLWAY, accessible: true },
  { from: 'loc-adams-1-n4', to: 'loc-adams-1-n5', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'loc-adams-1-n5', to: 'loc-adams-1-n6', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'loc-adams-1-n6', to: 'loc-adams-1-n13', weight: 8, distance: 100, type: EdgeType.HALLWAY, accessible: true },
  { from: 'loc-adams-1-n4', to: 'loc-adams-1-n7', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'loc-adams-1-n4', to: 'loc-adams-1-n8', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'loc-adams-1-n7', to: 'loc-adams-1-n9', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'loc-adams-1-n7', to: 'loc-adams-1-n10', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'loc-adams-1-n8', to: 'loc-adams-1-n11', weight: 15, distance: 200, type: EdgeType.HALLWAY, accessible: true },
  { from: 'loc-adams-1-n8', to: 'loc-adams-1-n12', weight: 15, distance: 200, type: EdgeType.HALLWAY, accessible: true },
  { from: 'loc-adams-1-n8', to: 'loc-adams-1-n14', weight: 8, distance: 100, type: EdgeType.HALLWAY, accessible: true },

  // loc-adams-2 hallways
  { from: 'loc-adams-2-n1', to: 'loc-adams-2-n2', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'loc-adams-2-n2', to: 'loc-adams-2-n3', weight: 15, distance: 200, type: EdgeType.HALLWAY, accessible: true },
  { from: 'loc-adams-2-n3', to: 'loc-adams-2-n4', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'loc-adams-2-n4', to: 'loc-adams-2-n5', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'loc-adams-2-n1', to: 'loc-adams-2-n6', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'loc-adams-2-n5', to: 'loc-adams-2-n7', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'loc-adams-2-n2', to: 'loc-adams-2-n8', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'loc-adams-2-n4', to: 'loc-adams-2-n9', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },

  // loc-adams-3 hallways
  { from: 'loc-adams-3-n1', to: 'loc-adams-3-n2', weight: 38, distance: 500, type: EdgeType.HALLWAY, accessible: true },
  { from: 'loc-adams-3-n2', to: 'loc-adams-3-n3', weight: 38, distance: 500, type: EdgeType.HALLWAY, accessible: true },
  { from: 'loc-adams-3-n1', to: 'loc-adams-3-n4', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'loc-adams-3-n3', to: 'loc-adams-3-n5', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'loc-adams-3-n2', to: 'loc-adams-3-n6', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'loc-adams-3-n2', to: 'loc-adams-3-n7', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },

  // LOC ADAMS — ELEVATORS
  { from: 'loc-adams-1-n9', to: 'loc-adams-2-n6', weight: 30, distance: 10, type: EdgeType.ELEVATOR, accessible: true },
  { from: 'loc-adams-2-n6', to: 'loc-adams-3-n4', weight: 30, distance: 10, type: EdgeType.ELEVATOR, accessible: true },
  { from: 'loc-adams-1-n10', to: 'loc-adams-2-n7', weight: 30, distance: 10, type: EdgeType.ELEVATOR, accessible: true },
  { from: 'loc-adams-2-n7', to: 'loc-adams-3-n5', weight: 30, distance: 10, type: EdgeType.ELEVATOR, accessible: true },

  // LOC ADAMS — STAIRS
  { from: 'loc-adams-1-n11', to: 'loc-adams-2-n8', weight: 45, distance: 10, type: EdgeType.STAIRS_UP, accessible: false },
  { from: 'loc-adams-2-n8', to: 'loc-adams-3-n6', weight: 45, distance: 10, type: EdgeType.STAIRS_UP, accessible: false },
  { from: 'loc-adams-1-n12', to: 'loc-adams-2-n9', weight: 45, distance: 10, type: EdgeType.STAIRS_UP, accessible: false },
  { from: 'loc-adams-2-n9', to: 'loc-adams-3-n7', weight: 45, distance: 10, type: EdgeType.STAIRS_UP, accessible: false },

  // ============================================================
  // LOC MADISON — INTRA-FLOOR HALLWAY EDGES
  // ============================================================

  // loc-madison-g hallways
  { from: 'loc-madison-g-n1', to: 'loc-madison-g-n2', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'loc-madison-g-n2', to: 'loc-madison-g-n3', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'loc-madison-g-n3', to: 'loc-madison-g-n4', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'loc-madison-g-n4', to: 'loc-madison-g-n5', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'loc-madison-g-n5', to: 'loc-madison-g-n6', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'loc-madison-g-n4', to: 'loc-madison-g-n7', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'loc-madison-g-n4', to: 'loc-madison-g-n8', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'loc-madison-g-n7', to: 'loc-madison-g-n9', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'loc-madison-g-n7', to: 'loc-madison-g-n10', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'loc-madison-g-n8', to: 'loc-madison-g-n11', weight: 15, distance: 200, type: EdgeType.HALLWAY, accessible: true },
  { from: 'loc-madison-g-n8', to: 'loc-madison-g-n12', weight: 15, distance: 200, type: EdgeType.HALLWAY, accessible: true },
  { from: 'loc-madison-g-n8', to: 'loc-madison-g-n13', weight: 8, distance: 100, type: EdgeType.HALLWAY, accessible: true },

  // loc-madison-1 hallways
  { from: 'loc-madison-1-n1', to: 'loc-madison-1-n2', weight: 31, distance: 400, type: EdgeType.HALLWAY, accessible: true },
  { from: 'loc-madison-1-n2', to: 'loc-madison-1-n3', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'loc-madison-1-n3', to: 'loc-madison-1-n4', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'loc-madison-1-n4', to: 'loc-madison-1-n5', weight: 31, distance: 400, type: EdgeType.HALLWAY, accessible: true },
  { from: 'loc-madison-1-n1', to: 'loc-madison-1-n6', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'loc-madison-1-n5', to: 'loc-madison-1-n7', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'loc-madison-1-n2', to: 'loc-madison-1-n8', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'loc-madison-1-n4', to: 'loc-madison-1-n9', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },

  // loc-madison-2 hallways
  { from: 'loc-madison-2-n1', to: 'loc-madison-2-n2', weight: 31, distance: 400, type: EdgeType.HALLWAY, accessible: true },
  { from: 'loc-madison-2-n2', to: 'loc-madison-2-n3', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'loc-madison-2-n3', to: 'loc-madison-2-n4', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'loc-madison-2-n4', to: 'loc-madison-2-n5', weight: 31, distance: 400, type: EdgeType.HALLWAY, accessible: true },
  { from: 'loc-madison-2-n1', to: 'loc-madison-2-n6', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'loc-madison-2-n5', to: 'loc-madison-2-n7', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'loc-madison-2-n2', to: 'loc-madison-2-n8', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'loc-madison-2-n4', to: 'loc-madison-2-n9', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },

  // loc-madison-3 hallways
  { from: 'loc-madison-3-n1', to: 'loc-madison-3-n2', weight: 54, distance: 700, type: EdgeType.HALLWAY, accessible: true },
  { from: 'loc-madison-3-n2', to: 'loc-madison-3-n3', weight: 54, distance: 700, type: EdgeType.HALLWAY, accessible: true },
  { from: 'loc-madison-3-n1', to: 'loc-madison-3-n4', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'loc-madison-3-n3', to: 'loc-madison-3-n5', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'loc-madison-3-n2', to: 'loc-madison-3-n6', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'loc-madison-3-n2', to: 'loc-madison-3-n7', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },

  // loc-madison-4 hallways
  { from: 'loc-madison-4-n1', to: 'loc-madison-4-n2', weight: 54, distance: 700, type: EdgeType.HALLWAY, accessible: true },
  { from: 'loc-madison-4-n2', to: 'loc-madison-4-n3', weight: 54, distance: 700, type: EdgeType.HALLWAY, accessible: true },
  { from: 'loc-madison-4-n1', to: 'loc-madison-4-n4', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'loc-madison-4-n3', to: 'loc-madison-4-n5', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'loc-madison-4-n2', to: 'loc-madison-4-n6', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'loc-madison-4-n2', to: 'loc-madison-4-n7', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },

  // loc-madison-5 hallways
  { from: 'loc-madison-5-n1', to: 'loc-madison-5-n2', weight: 54, distance: 700, type: EdgeType.HALLWAY, accessible: true },
  { from: 'loc-madison-5-n2', to: 'loc-madison-5-n3', weight: 54, distance: 700, type: EdgeType.HALLWAY, accessible: true },
  { from: 'loc-madison-5-n1', to: 'loc-madison-5-n4', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'loc-madison-5-n3', to: 'loc-madison-5-n5', weight: 19, distance: 250, type: EdgeType.HALLWAY, accessible: true },
  { from: 'loc-madison-5-n2', to: 'loc-madison-5-n6', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },
  { from: 'loc-madison-5-n2', to: 'loc-madison-5-n7', weight: 23, distance: 300, type: EdgeType.HALLWAY, accessible: true },

  // LOC MADISON — ELEVATORS
  { from: 'loc-madison-g-n9', to: 'loc-madison-1-n6', weight: 30, distance: 10, type: EdgeType.ELEVATOR, accessible: true },
  { from: 'loc-madison-1-n6', to: 'loc-madison-2-n6', weight: 30, distance: 10, type: EdgeType.ELEVATOR, accessible: true },
  { from: 'loc-madison-2-n6', to: 'loc-madison-3-n4', weight: 30, distance: 10, type: EdgeType.ELEVATOR, accessible: true },
  { from: 'loc-madison-3-n4', to: 'loc-madison-4-n4', weight: 30, distance: 10, type: EdgeType.ELEVATOR, accessible: true },
  { from: 'loc-madison-4-n4', to: 'loc-madison-5-n4', weight: 30, distance: 10, type: EdgeType.ELEVATOR, accessible: true },
  { from: 'loc-madison-g-n10', to: 'loc-madison-1-n7', weight: 30, distance: 10, type: EdgeType.ELEVATOR, accessible: true },
  { from: 'loc-madison-1-n7', to: 'loc-madison-2-n7', weight: 30, distance: 10, type: EdgeType.ELEVATOR, accessible: true },
  { from: 'loc-madison-2-n7', to: 'loc-madison-3-n5', weight: 30, distance: 10, type: EdgeType.ELEVATOR, accessible: true },
  { from: 'loc-madison-3-n5', to: 'loc-madison-4-n5', weight: 30, distance: 10, type: EdgeType.ELEVATOR, accessible: true },
  { from: 'loc-madison-4-n5', to: 'loc-madison-5-n5', weight: 30, distance: 10, type: EdgeType.ELEVATOR, accessible: true },

  // LOC MADISON — STAIRS
  { from: 'loc-madison-g-n11', to: 'loc-madison-1-n8', weight: 45, distance: 10, type: EdgeType.STAIRS_UP, accessible: false },
  { from: 'loc-madison-1-n8', to: 'loc-madison-2-n8', weight: 45, distance: 10, type: EdgeType.STAIRS_UP, accessible: false },
  { from: 'loc-madison-2-n8', to: 'loc-madison-3-n6', weight: 45, distance: 10, type: EdgeType.STAIRS_UP, accessible: false },
  { from: 'loc-madison-3-n6', to: 'loc-madison-4-n6', weight: 45, distance: 10, type: EdgeType.STAIRS_UP, accessible: false },
  { from: 'loc-madison-4-n6', to: 'loc-madison-5-n6', weight: 45, distance: 10, type: EdgeType.STAIRS_UP, accessible: false },
  { from: 'loc-madison-g-n12', to: 'loc-madison-1-n9', weight: 45, distance: 10, type: EdgeType.STAIRS_UP, accessible: false },
  { from: 'loc-madison-1-n9', to: 'loc-madison-2-n9', weight: 45, distance: 10, type: EdgeType.STAIRS_UP, accessible: false },
  { from: 'loc-madison-2-n9', to: 'loc-madison-3-n7', weight: 45, distance: 10, type: EdgeType.STAIRS_UP, accessible: false },
  { from: 'loc-madison-3-n7', to: 'loc-madison-4-n7', weight: 45, distance: 10, type: EdgeType.STAIRS_UP, accessible: false },
  { from: 'loc-madison-4-n7', to: 'loc-madison-5-n7', weight: 45, distance: 10, type: EdgeType.STAIRS_UP, accessible: false },

  // ============================================================
  // TUNNEL / CROSS-BUILDING EDGES (CRITICAL FOR CONNECTIVITY)
  // ============================================================

  // Rayburn basement <-> Capitol basement (with subway)
  { from: 'rayburn-b-n1', to: 'capitol-b-n1', weight: 180, distance: 700, type: EdgeType.TUNNEL, accessible: true, description: 'Rayburn tunnel to Capitol' },
  { from: 'rayburn-b-n14', to: 'capitol-b-n18', weight: 120, distance: 700, type: EdgeType.SUBWAY, accessible: true, description: 'House subway Rayburn to Capitol' },

  // Longworth basement <-> Capitol basement
  { from: 'longworth-b-n14', to: 'capitol-b-n14', weight: 150, distance: 600, type: EdgeType.TUNNEL, accessible: true, description: 'Longworth tunnel to Capitol' },

  // Cannon basement <-> Capitol basement
  { from: 'cannon-b-n13', to: 'capitol-b-n15', weight: 150, distance: 600, type: EdgeType.TUNNEL, accessible: true, description: 'Cannon tunnel to Capitol' },

  // Capitol basement <-> Russell basement (with subway)
  { from: 'capitol-b-n7', to: 'russell-b-n13', weight: 180, distance: 800, type: EdgeType.TUNNEL, accessible: true, description: 'Capitol tunnel to Russell' },
  { from: 'capitol-b-n19', to: 'russell-b-n14', weight: 75, distance: 800, type: EdgeType.SUBWAY, accessible: true, description: 'Senate subway Capitol to Russell' },

  // Capitol basement <-> Dirksen basement (with subway)
  { from: 'capitol-b-n16', to: 'dirksen-b-n14', weight: 180, distance: 800, type: EdgeType.TUNNEL, accessible: true, description: 'Capitol tunnel to Dirksen' },
  { from: 'capitol-b-n19', to: 'dirksen-b-n15', weight: 75, distance: 800, type: EdgeType.SUBWAY, accessible: true, description: 'Senate subway Capitol to Dirksen' },

  // Dirksen basement <-> Hart basement
  { from: 'dirksen-b-n1', to: 'hart-b-n1', weight: 90, distance: 400, type: EdgeType.TUNNEL, accessible: true, description: 'Dirksen tunnel to Hart' },

  // Russell basement <-> Dirksen basement
  { from: 'russell-b-n1', to: 'dirksen-b-n13', weight: 60, distance: 300, type: EdgeType.TUNNEL, accessible: true, description: 'Russell-Dirksen connector (adjacent buildings)' },
  // Shortcut: Russell elevator area directly to tunnel node
  { from: 'russell-b-n9', to: 'russell-b-n1', weight: 30, distance: 150, type: EdgeType.HALLWAY, accessible: true },
  // Shortcut: Dirksen tunnel node directly to elevator area
  { from: 'dirksen-b-n13', to: 'dirksen-b-n9', weight: 30, distance: 150, type: EdgeType.HALLWAY, accessible: true },

  // Cannon basement <-> LOC Jefferson ground
  { from: 'cannon-b-n14', to: 'loc-jefferson-g-n1', weight: 180, distance: 700, type: EdgeType.TUNNEL, accessible: true, description: 'Cannon tunnel to LOC Jefferson' },

  // LOC Jefferson <-> LOC Adams
  { from: 'loc-jefferson-g-n13', to: 'loc-adams-1-n1', weight: 120, distance: 500, type: EdgeType.TUNNEL, accessible: true, description: 'Jefferson tunnel to Adams' },

  // LOC Adams <-> LOC Madison
  { from: 'loc-adams-1-n13', to: 'loc-madison-g-n1', weight: 120, distance: 500, type: EdgeType.TUNNEL, accessible: true, description: 'Adams tunnel to Madison' },

  // Capitol basement <-> CVC lower
  { from: 'capitol-b-n17', to: 'cvc-lower-n1', weight: 90, distance: 400, type: EdgeType.TUNNEL, accessible: true, description: 'Capitol tunnel to CVC' },

  // Longworth basement <-> Rayburn basement
  { from: 'longworth-b-n1', to: 'rayburn-b-n13', weight: 45, distance: 200, type: EdgeType.TUNNEL, accessible: true, description: 'Longworth-Rayburn connector' },
  // Shortcut: Longworth elevator area to tunnel node
  { from: 'longworth-b-n9', to: 'longworth-b-n1', weight: 20, distance: 100, type: EdgeType.HALLWAY, accessible: true },
  // Shortcut: Rayburn tunnel node to elevator area
  { from: 'rayburn-b-n13', to: 'rayburn-b-n9', weight: 20, distance: 100, type: EdgeType.HALLWAY, accessible: true },

  // Longworth basement <-> Cannon basement
  { from: 'longworth-b-n13', to: 'cannon-b-n1', weight: 45, distance: 200, type: EdgeType.TUNNEL, accessible: true, description: 'Longworth-Cannon connector' },
  // Shortcut: Longworth far tunnel node to elevator
  { from: 'longworth-b-n13', to: 'longworth-b-n10', weight: 20, distance: 100, type: EdgeType.HALLWAY, accessible: true },
  // Shortcut: Cannon tunnel node to elevator area
  { from: 'cannon-b-n1', to: 'cannon-b-n9', weight: 20, distance: 100, type: EdgeType.HALLWAY, accessible: true },

  // ============================================================
  // OUTDOOR WALKING PATHS BETWEEN BUILDINGS
  // People walk outside between buildings — these are direct outdoor routes
  // ============================================================

  // House buildings (south side of campus) — adjacent to each other
  { from: 'rayburn-1-n14', to: 'longworth-1-n12', weight: 90, distance: 400, type: EdgeType.OUTDOOR, accessible: true, description: 'Walk outside from Rayburn to Longworth' },
  { from: 'longworth-1-n12', to: 'cannon-1-n12', weight: 90, distance: 400, type: EdgeType.OUTDOOR, accessible: true, description: 'Walk outside from Longworth to Cannon' },
  { from: 'rayburn-1-n14', to: 'cannon-1-n12', weight: 180, distance: 800, type: EdgeType.OUTDOOR, accessible: true, description: 'Walk outside from Rayburn to Cannon' },

  // Senate buildings (north side of campus) — adjacent to each other
  { from: 'russell-1-n12', to: 'dirksen-1-n12', weight: 90, distance: 400, type: EdgeType.OUTDOOR, accessible: true, description: 'Walk outside from Russell to Dirksen' },
  { from: 'dirksen-1-n12', to: 'hart-1-n12', weight: 90, distance: 400, type: EdgeType.OUTDOOR, accessible: true, description: 'Walk outside from Dirksen to Hart' },
  { from: 'russell-1-n12', to: 'hart-1-n12', weight: 150, distance: 700, type: EdgeType.OUTDOOR, accessible: true, description: 'Walk outside from Russell to Hart' },

  // House to Senate (cross campus)
  { from: 'rayburn-1-n14', to: 'russell-1-n12', weight: 360, distance: 1600, type: EdgeType.OUTDOOR, accessible: true, description: 'Walk outside from Rayburn to Russell' },
  { from: 'rayburn-1-n14', to: 'dirksen-1-n12', weight: 390, distance: 1700, type: EdgeType.OUTDOOR, accessible: true, description: 'Walk outside from Rayburn to Dirksen' },
  { from: 'rayburn-1-n14', to: 'hart-1-n12', weight: 420, distance: 1900, type: EdgeType.OUTDOOR, accessible: true, description: 'Walk outside from Rayburn to Hart' },
  { from: 'longworth-1-n12', to: 'russell-1-n12', weight: 330, distance: 1500, type: EdgeType.OUTDOOR, accessible: true, description: 'Walk outside from Longworth to Russell' },
  { from: 'longworth-1-n12', to: 'dirksen-1-n12', weight: 300, distance: 1400, type: EdgeType.OUTDOOR, accessible: true, description: 'Walk outside from Longworth to Dirksen' },
  { from: 'longworth-1-n12', to: 'hart-1-n12', weight: 360, distance: 1600, type: EdgeType.OUTDOOR, accessible: true, description: 'Walk outside from Longworth to Hart' },
  { from: 'cannon-1-n12', to: 'russell-1-n12', weight: 300, distance: 1400, type: EdgeType.OUTDOOR, accessible: true, description: 'Walk outside from Cannon to Russell' },
  { from: 'cannon-1-n12', to: 'dirksen-1-n12', weight: 270, distance: 1200, type: EdgeType.OUTDOOR, accessible: true, description: 'Walk outside from Cannon to Dirksen' },
  { from: 'cannon-1-n12', to: 'hart-1-n12', weight: 300, distance: 1400, type: EdgeType.OUTDOOR, accessible: true, description: 'Walk outside from Cannon to Hart' },

  // To/from Capitol
  { from: 'rayburn-1-n14', to: 'capitol-1-n12', weight: 240, distance: 1100, type: EdgeType.OUTDOOR, accessible: true, description: 'Walk outside from Rayburn to Capitol' },
  { from: 'longworth-1-n12', to: 'capitol-1-n12', weight: 180, distance: 800, type: EdgeType.OUTDOOR, accessible: true, description: 'Walk outside from Longworth to Capitol' },
  { from: 'cannon-1-n12', to: 'capitol-1-n12', weight: 150, distance: 700, type: EdgeType.OUTDOOR, accessible: true, description: 'Walk outside from Cannon to Capitol' },
  { from: 'russell-1-n12', to: 'capitol-1-n12', weight: 180, distance: 800, type: EdgeType.OUTDOOR, accessible: true, description: 'Walk outside from Russell to Capitol' },
  { from: 'dirksen-1-n12', to: 'capitol-1-n12', weight: 180, distance: 800, type: EdgeType.OUTDOOR, accessible: true, description: 'Walk outside from Dirksen to Capitol' },
  { from: 'hart-1-n12', to: 'capitol-1-n12', weight: 240, distance: 1100, type: EdgeType.OUTDOOR, accessible: true, description: 'Walk outside from Hart to Capitol' },

  // To/from LOC buildings
  { from: 'cannon-1-n12', to: 'loc-jefferson-g-n14', weight: 120, distance: 500, type: EdgeType.OUTDOOR, accessible: true, description: 'Walk outside from Cannon to LOC Jefferson' },
  { from: 'loc-jefferson-g-n14', to: 'loc-adams-1-n14', weight: 90, distance: 400, type: EdgeType.OUTDOOR, accessible: true, description: 'Walk outside from LOC Jefferson to LOC Adams' },
  { from: 'loc-adams-1-n14', to: 'loc-madison-g-n13', weight: 90, distance: 400, type: EdgeType.OUTDOOR, accessible: true, description: 'Walk outside from LOC Adams to LOC Madison' },
];
