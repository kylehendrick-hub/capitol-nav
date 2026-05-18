import { Graph } from './graph';
import { GraphNode } from '../types';
import { BUILDING_DISTANCE_MATRIX } from '../data/buildings';

export interface PathResult {
  nodeIds: string[];
  totalWeight: number;
  totalDistance: number;
}

export interface PathOptions {
  accessible?: boolean;
  avoidOutdoor?: boolean;
}

class MinHeap<T> {
  private items: { item: T; priority: number }[] = [];

  push(item: T, priority: number): void {
    this.items.push({ item, priority });
    this.bubbleUp(this.items.length - 1);
  }

  pop(): T | undefined {
    if (this.items.length === 0) return undefined;
    const top = this.items[0].item;
    const last = this.items.pop()!;
    if (this.items.length > 0) {
      this.items[0] = last;
      this.sinkDown(0);
    }
    return top;
  }

  get size(): number {
    return this.items.length;
  }

  private bubbleUp(i: number): void {
    while (i > 0) {
      const parent = Math.floor((i - 1) / 2);
      if (this.items[parent].priority <= this.items[i].priority) break;
      [this.items[parent], this.items[i]] = [this.items[i], this.items[parent]];
      i = parent;
    }
  }

  private sinkDown(i: number): void {
    const len = this.items.length;
    while (true) {
      let smallest = i;
      const left = 2 * i + 1;
      const right = 2 * i + 2;
      if (left < len && this.items[left].priority < this.items[smallest].priority) smallest = left;
      if (right < len && this.items[right].priority < this.items[smallest].priority) smallest = right;
      if (smallest === i) break;
      [this.items[smallest], this.items[i]] = [this.items[i], this.items[smallest]];
      i = smallest;
    }
  }
}

// Real building widths in feet mapped to SVG viewBox widths
const FEET_PER_PIXEL: Record<string, number> = {
  'rayburn': 720 / 2000,     // ~0.36 ft/px
  'longworth': 550 / 1800,   // ~0.31 ft/px
  'cannon': 460 / 1600,      // ~0.29 ft/px
  'hart': 500 / 1600,        // ~0.31 ft/px
  'dirksen': 460 / 1600,     // ~0.29 ft/px
  'russell': 460 / 1600,     // ~0.29 ft/px
  'capitol': 750 / 2000,     // ~0.38 ft/px
  'visitor-center': 580 / 1800, // ~0.32 ft/px
  'loc-jefferson': 470 / 1600,  // ~0.29 ft/px
  'loc-adams': 400 / 1400,     // ~0.29 ft/px
  'loc-madison': 560 / 1800,   // ~0.31 ft/px
};

function heuristic(a: GraphNode, b: GraphNode): number {
  if (a.buildingId === b.buildingId) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    const pixelDist = Math.sqrt(dx * dx + dy * dy);
    const scale = FEET_PER_PIXEL[a.buildingId] || 0.3;
    const feet = pixelDist * scale;
    // Average walking speed ~4.5 ft/s indoors
    const floorPenalty = a.floorId !== b.floorId ? 30 : 0;
    return feet / 4.5 + floorPenalty;
  }

  // Different buildings: use precomputed minimum walking time
  // Scale factor must be LOW enough to stay admissible (never overestimate)
  const matrix = BUILDING_DISTANCE_MATRIX[a.buildingId];
  if (matrix && matrix[b.buildingId] !== undefined) {
    return matrix[b.buildingId] * 0.3; // Conservative — guarantees admissibility
  }

  return 0; // Fallback: no heuristic (Dijkstra)
}

export function findPath(
  graph: Graph,
  startNodeId: string,
  endNodeId: string,
  options: PathOptions = {}
): PathResult | null {
  const startNode = graph.getNode(startNodeId);
  const endNode = graph.getNode(endNodeId);
  if (!startNode || !endNode) return null;

  const openSet = new MinHeap<string>();
  const gScore = new Map<string, number>();
  const cameFrom = new Map<string, string>();
  const distTo = new Map<string, number>();

  gScore.set(startNodeId, 0);
  distTo.set(startNodeId, 0);
  openSet.push(startNodeId, heuristic(startNode, endNode));

  while (openSet.size > 0) {
    const current = openSet.pop()!;

    if (current === endNodeId) {
      // Reconstruct path
      const path: string[] = [current];
      let node = current;
      while (cameFrom.has(node)) {
        node = cameFrom.get(node)!;
        path.unshift(node);
      }
      return {
        nodeIds: path,
        totalWeight: gScore.get(endNodeId)!,
        totalDistance: distTo.get(endNodeId)!,
      };
    }

    const neighbors = graph.getNeighbors(current, options.accessible);
    for (const edge of neighbors) {
      if (options.avoidOutdoor && edge.type === 'outdoor') continue;

      const tentativeG = (gScore.get(current) ?? Infinity) + edge.weight;
      if (tentativeG < (gScore.get(edge.to) ?? Infinity)) {
        cameFrom.set(edge.to, current);
        gScore.set(edge.to, tentativeG);
        distTo.set(edge.to, (distTo.get(current) ?? 0) + edge.distance);

        const neighbor = graph.getNode(edge.to);
        if (neighbor) {
          openSet.push(edge.to, tentativeG + heuristic(neighbor, endNode));
        }
      }
    }
  }

  return null; // No path found
}
