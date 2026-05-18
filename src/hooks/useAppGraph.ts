import { useMemo } from 'react';
import { Graph } from '../engine/graph';
import { GRAPH_NODES } from '../data/graph-nodes';
import { GRAPH_EDGES } from '../data/graph-edges';

export function useAppGraph(): Graph {
  return useMemo(() => {
    const graph = new Graph();
    for (const node of GRAPH_NODES) {
      graph.addNode(node);
    }
    for (const edge of GRAPH_EDGES) {
      graph.addEdge(edge);
    }
    return graph;
  }, []);
}
