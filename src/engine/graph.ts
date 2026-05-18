import { GraphNode, GraphEdge, EdgeType } from '../types';

export class Graph {
  private adjacency = new Map<string, GraphEdge[]>();
  private nodes = new Map<string, GraphNode>();

  addNode(node: GraphNode): void {
    this.nodes.set(node.id, node);
    if (!this.adjacency.has(node.id)) {
      this.adjacency.set(node.id, []);
    }
  }

  addEdge(edge: GraphEdge): void {
    const fromEdges = this.adjacency.get(edge.from);
    if (fromEdges) fromEdges.push(edge);

    // Add reverse edge (all corridors are bidirectional)
    // Flip directional edge types for the reverse direction
    let reverseType = edge.type;
    if (edge.type === EdgeType.STAIRS_UP) reverseType = EdgeType.STAIRS_DOWN;
    else if (edge.type === EdgeType.STAIRS_DOWN) reverseType = EdgeType.STAIRS_UP;
    else if (edge.type === EdgeType.ESCALATOR_UP) reverseType = EdgeType.ESCALATOR_DOWN;
    else if (edge.type === EdgeType.ESCALATOR_DOWN) reverseType = EdgeType.ESCALATOR_UP;

    const reverseEdge: GraphEdge = {
      ...edge,
      from: edge.to,
      to: edge.from,
      type: reverseType,
    };
    const toEdges = this.adjacency.get(edge.to);
    if (toEdges) toEdges.push(reverseEdge);
  }

  getNode(nodeId: string): GraphNode | undefined {
    return this.nodes.get(nodeId);
  }

  getNeighbors(nodeId: string, accessible?: boolean): GraphEdge[] {
    const edges = this.adjacency.get(nodeId) || [];
    if (accessible) {
      return edges.filter(e => e.accessible);
    }
    return edges;
  }

  getAllNodes(): GraphNode[] {
    return Array.from(this.nodes.values());
  }

  getAllEdges(): GraphEdge[] {
    const seen = new Set<string>();
    const edges: GraphEdge[] = [];
    for (const edgeList of this.adjacency.values()) {
      for (const edge of edgeList) {
        const key = [edge.from, edge.to].sort().join('|');
        if (!seen.has(key)) {
          seen.add(key);
          edges.push(edge);
        }
      }
    }
    return edges;
  }

  getNodesOnFloor(floorId: string): GraphNode[] {
    return this.getAllNodes().filter(n => n.floorId === floorId);
  }

  getNodeCount(): number {
    return this.nodes.size;
  }

  getEdgeCount(): number {
    return this.getAllEdges().length;
  }
}
