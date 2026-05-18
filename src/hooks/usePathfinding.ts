import { useCallback } from 'react';
import { Graph } from '../engine/graph';
import { findPath } from '../engine/pathfinder';
import { buildRoute } from '../engine/route-builder';
import { Route, Room } from '../types';

export function usePathfinding(graph: Graph) {
  const computeRoute = useCallback(
    (
      startRoom: Room,
      endRoom: Room,
      options?: { accessible?: boolean; avoidOutdoor?: boolean }
    ): Route | null => {
      const path = findPath(
        graph,
        startRoom.nearestNodeId,
        endRoom.nearestNodeId,
        options
      );
      if (!path) return null;
      return buildRoute(path, graph, endRoom);
    },
    [graph]
  );

  return { computeRoute };
}
