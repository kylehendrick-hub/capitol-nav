import { Graph } from './graph';
import { PathResult } from './pathfinder';
import { Route, DirectionStep, StepType, BuildingId, EdgeType, NodeType } from '../types';
import { BUILDING_MAP, TUNNEL_CONNECTIONS } from '../data/buildings';
import { ROOMS } from '../data/rooms';
import { OCCUPANTS } from '../data/occupants';

function getAngle(x1: number, y1: number, x2: number, y2: number): number {
  return Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI);
}

function getTurnType(prevAngle: number, nextAngle: number): StepType {
  let diff = nextAngle - prevAngle;
  while (diff > 180) diff -= 360;
  while (diff < -180) diff += 360;

  if (Math.abs(diff) < 30) return StepType.GO_STRAIGHT;
  if (diff > 0) return StepType.TURN_RIGHT;
  return StepType.TURN_LEFT;
}

function getStepIcon(type: StepType): string {
  switch (type) {
    case StepType.WALK: return 'walk';
    case StepType.TURN_LEFT: return 'turn-left';
    case StepType.TURN_RIGHT: return 'turn-right';
    case StepType.GO_STRAIGHT: return 'straight';
    case StepType.TAKE_ELEVATOR: return 'elevator';
    case StepType.TAKE_STAIRS: return 'stairs';
    case StepType.TAKE_ESCALATOR: return 'escalator';
    case StepType.ENTER_TUNNEL: return 'tunnel';
    case StepType.EXIT_TUNNEL: return 'exit';
    case StepType.TAKE_SUBWAY: return 'subway';
    case StepType.ENTER_BUILDING: return 'building';
    case StepType.EXIT_BUILDING: return 'exit';
    case StepType.CHANGE_FLOOR: return 'floor';
    case StepType.ARRIVE: return 'arrive';
  }
}

function formatDistance(pixelDist: number): string {
  const feet = Math.round(pixelDist * 0.32);
  if (feet < 15) return '';
  if (feet < 100) return `${Math.round(feet / 10) * 10} ft`;
  if (feet < 500) return `${Math.round(feet / 25) * 25} ft`;
  return `${Math.round(feet / 50) * 50} ft`;
}

function formatDistanceFeet(pixelDist: number): number {
  return Math.round(pixelDist * 0.32);
}

function formatDuration(seconds: number): string {
  if (seconds < 60) return `${Math.round(seconds)}s`;
  const mins = Math.floor(seconds / 60);
  const secs = Math.round(seconds % 60);
  return secs > 0 ? `${mins}m ${secs}s` : `${mins}m`;
}

/**
 * Get a human-friendly floor label (e.g. "3rd floor", "basement level")
 */
function getFloorLabel(floorId: string): string {
  const parts = floorId.split('-');
  const level = parts[parts.length - 1];
  if (level === 'b') return 'basement level';
  if (level === 'g') return 'ground floor';
  if (level === 'lower') return 'lower level';
  if (level === 'upper') return 'upper level';
  const num = parseInt(level, 10);
  if (isNaN(num)) return level;
  if (num === 1) return '1st floor';
  if (num === 2) return '2nd floor';
  if (num === 3) return '3rd floor';
  return `${num}th floor`;
}

/**
 * Look up a tunnel connection label between two buildings
 */
function getTunnelLabel(fromBldg: BuildingId, toBldg: BuildingId): string | null {
  const conn = TUNNEL_CONNECTIONS.find(
    t => (t.from === fromBldg && t.to === toBldg) || (t.from === toBldg && t.to === fromBldg)
  );
  return conn?.label || null;
}

/**
 * Describe the hallway context using the node label or wing information
 */
function getCorridorDescription(node: { label?: string; buildingId: string; floorId: string }): string {
  if (node.label) return `toward ${node.label}`;
  return 'down the corridor';
}

/**
 * Get the room's occupant name if available
 */
function getRoomOccupant(roomId: string): string | null {
  const room = ROOMS.find((r: any) => r.id === roomId || r.nearestNodeId === roomId);
  if (!room || room.occupants.length === 0) return null;
  const occ = OCCUPANTS.find(o => o.id === room.occupants[0]);
  return occ?.name || null;
}

/**
 * Get rooms near a destination for the "which side of the hallway" info
 */
function getNearbyRoomHint(destRoom: any): string {
  if (!destRoom) return '';
  const wing = destRoom.position?.wing;
  const num = destRoom.number;
  // Parse room number to guess hallway side
  const lastDigit = parseInt(num.replace(/\D/g, '').slice(-1), 10);
  if (isNaN(lastDigit)) return '';
  // Even numbers are typically on one side, odd on the other
  return lastDigit % 2 === 0 ? 'on your left' : 'on your right';
}

export function buildRoute(path: PathResult, graph: Graph, destinationRoom?: any): Route {
  const { nodeIds, totalWeight, totalDistance } = path;
  const steps: DirectionStep[] = [];
  const buildings = new Set<BuildingId>();
  const floors = new Set<string>();
  let useTunnel = false;
  let useSubway = false;
  let accessible = true;

  if (nodeIds.length < 2) {
    const node = graph.getNode(nodeIds[0])!;
    return {
      steps: [{
        instruction: "You're already here!",
        distance: 0,
        duration: 0,
        floorId: node.floorId,
        buildingId: node.buildingId,
        startNodeId: node.id,
        endNodeId: node.id,
        type: StepType.ARRIVE,
        icon: getStepIcon(StepType.ARRIVE),
      }],
      nodeIds,
      totalDistance: 0,
      totalDuration: 0,
      buildings: [node.buildingId],
      floors: [node.floorId],
      useTunnel: false,
      useSubway: false,
      accessible: true,
    };
  }

  // Use the explicitly passed destination room, or try to find it from the graph
  const lastNodeId = nodeIds[nodeIds.length - 1];
  const lastNode = graph.getNode(lastNodeId)!;
  const destRoom = destinationRoom ||
    ROOMS.find((r: any) => r.nearestNodeId === lastNodeId || r.id === lastNodeId) ||
    ROOMS.find((r: any) => r.buildingId === lastNode.buildingId && r.position.floorId === lastNode.floorId &&
      Math.abs(r.position.x - lastNode.x) < 100 && Math.abs(r.position.y - lastNode.y) < 100);

  let prevAngle: number | null = null;

  for (let i = 0; i < nodeIds.length - 1; i++) {
    const currentNode = graph.getNode(nodeIds[i])!;
    const nextNode = graph.getNode(nodeIds[i + 1])!;
    buildings.add(currentNode.buildingId);
    floors.add(currentNode.floorId);

    const edge = graph.getNeighbors(nodeIds[i]).find(e => e.to === nodeIds[i + 1]);
    if (!edge) continue;

    if (!edge.accessible) accessible = false;

    const angle = getAngle(currentNode.x, currentNode.y, nextNode.x, nextNode.y);
    const fromBuilding = BUILDING_MAP.get(currentNode.buildingId);
    const toBuilding = BUILDING_MAP.get(nextNode.buildingId);

    // === BUILDING CHANGE ===
    if (currentNode.buildingId !== nextNode.buildingId) {
      if (edge.type === EdgeType.TUNNEL) {
        useTunnel = true;
        const tunnelLabel = getTunnelLabel(currentNode.buildingId, nextNode.buildingId);
        steps.push({
          instruction: `Follow the tunnel to ${toBuilding?.shortName}`,
          distance: edge.distance, duration: edge.weight,
          floorId: currentNode.floorId, buildingId: currentNode.buildingId,
          startNodeId: currentNode.id, endNodeId: nextNode.id,
          type: StepType.ENTER_TUNNEL, icon: getStepIcon(StepType.ENTER_TUNNEL),
        });
      } else if (edge.type === EdgeType.SUBWAY) {
        useSubway = true;
        steps.push({
          instruction: `Board the Capitol subway to ${toBuilding?.shortName}`,
          distance: edge.distance, duration: edge.weight,
          floorId: currentNode.floorId, buildingId: currentNode.buildingId,
          startNodeId: currentNode.id, endNodeId: nextNode.id,
          type: StepType.TAKE_SUBWAY, icon: getStepIcon(StepType.TAKE_SUBWAY),
        });
      } else if (edge.type === EdgeType.OUTDOOR) {
        // Calculate compass direction and distance using building coordinates
        const fromCoords = fromBuilding?.coordinates;
        const toCoords = toBuilding?.coordinates;
        const walkMins = Math.ceil(edge.weight / 60);
        const walkFeet = Math.round(edge.distance * 0.32);

        // Determine compass direction from lat/lng
        let direction = '';
        let streetHint = '';
        if (fromCoords && toCoords) {
          const dlat = toCoords.lat - fromCoords.lat;
          const dlng = toCoords.lng - fromCoords.lng;
          const absDlat = Math.abs(dlat);
          const absDlng = Math.abs(dlng);

          // Primary direction
          if (absDlat > absDlng * 1.5) {
            direction = dlat > 0 ? 'north' : 'south';
          } else if (absDlng > absDlat * 1.5) {
            direction = dlng > 0 ? 'east' : 'west';
          } else {
            direction = (dlat > 0 ? 'north' : 'south') + (dlng > 0 ? 'east' : 'west');
          }

          // Figure out which street to mention
          const isHouseToSenate = (fromBuilding?.chamber === 'house' && toBuilding?.chamber === 'senate');
          const isSenateToHouse = (fromBuilding?.chamber === 'senate' && toBuilding?.chamber === 'house');
          const isAdjacentHouse = fromBuilding?.chamber === 'house' && toBuilding?.chamber === 'house';
          const isAdjacentSenate = fromBuilding?.chamber === 'senate' && toBuilding?.chamber === 'senate';

          if (isHouseToSenate || isSenateToHouse) {
            streetHint = ' — cross Independence Ave and walk past the Capitol grounds';
          } else if (isAdjacentHouse) {
            streetHint = ' along Independence Ave';
          } else if (isAdjacentSenate) {
            streetHint = ' along Constitution Ave';
          }
        }

        // Exit step
        steps.push({
          instruction: `Exit ${fromBuilding?.shortName}`,
          distance: 0, duration: 10,
          floorId: currentNode.floorId, buildingId: currentNode.buildingId,
          startNodeId: currentNode.id, endNodeId: currentNode.id,
          type: StepType.EXIT_BUILDING, icon: getStepIcon(StepType.EXIT_BUILDING),
        });

        // Walk outside step with compass, distance, time, and street context
        steps.push({
          instruction: `Walk ${direction} to ${toBuilding?.shortName}${streetHint}`,
          distance: edge.distance, duration: edge.weight,
          floorId: currentNode.floorId, buildingId: currentNode.buildingId,
          startNodeId: currentNode.id, endNodeId: nextNode.id,
          type: StepType.WALK, icon: 'walk',
        });

        // Enter step with address
        steps.push({
          instruction: `Enter ${toBuilding?.shortName} (${toBuilding?.address || ''})`,
          distance: 0, duration: 10,
          floorId: nextNode.floorId, buildingId: nextNode.buildingId,
          startNodeId: nextNode.id, endNodeId: nextNode.id,
          type: StepType.ENTER_BUILDING, icon: getStepIcon(StepType.ENTER_BUILDING),
        });
      } else {
        steps.push({
          instruction: `Continue into ${toBuilding?.shortName}`,
          distance: edge.distance, duration: edge.weight,
          floorId: currentNode.floorId, buildingId: currentNode.buildingId,
          startNodeId: currentNode.id, endNodeId: nextNode.id,
          type: StepType.ENTER_BUILDING, icon: getStepIcon(StepType.ENTER_BUILDING),
        });
      }
      prevAngle = null;
      continue;
    }

    // === FLOOR CHANGE (collapse consecutive elevator/stair hops into one step) ===
    if (currentNode.floorId !== nextNode.floorId) {
      const isElevator = edge.type === EdgeType.ELEVATOR;

      // Look ahead: skip intermediate floors if we keep taking the same elevator/stairs
      let finalNode = nextNode;
      let totalDist = edge.distance;
      let totalDur = edge.weight;
      let j = i + 1;
      while (j < nodeIds.length - 1) {
        const peekCurrent = graph.getNode(nodeIds[j])!;
        const peekNext = graph.getNode(nodeIds[j + 1])!;
        const peekEdge = graph.getNeighbors(nodeIds[j]).find(e => e.to === nodeIds[j + 1]);
        if (!peekEdge) break;
        // Keep collapsing if same type (elevator/stairs) and still changing floors in same building
        const sameType = isElevator ? peekEdge.type === EdgeType.ELEVATOR : (peekEdge.type === EdgeType.STAIRS_UP || peekEdge.type === EdgeType.STAIRS_DOWN);
        if (sameType && peekCurrent.buildingId === peekNext.buildingId && peekCurrent.floorId !== peekNext.floorId) {
          finalNode = peekNext;
          totalDist += peekEdge.distance;
          totalDur += peekEdge.weight;
          j++;
        } else {
          break;
        }
      }
      // Skip the intermediate nodes we collapsed
      i = j - 1;

      const targetFloorLabel = getFloorLabel(finalNode.floorId);
      steps.push({
        instruction: isElevator
          ? `Take elevator to ${targetFloorLabel}`
          : `Take stairs to ${targetFloorLabel}`,
        distance: totalDist, duration: totalDur,
        floorId: currentNode.floorId, buildingId: currentNode.buildingId,
        startNodeId: currentNode.id, endNodeId: finalNode.id,
        type: isElevator ? StepType.TAKE_ELEVATOR : StepType.TAKE_STAIRS,
        icon: getStepIcon(isElevator ? StepType.TAKE_ELEVATOR : StepType.TAKE_STAIRS),
      });
      prevAngle = null;
      continue;
    }

    // === SAME FLOOR, SAME BUILDING ===
    // Figure out what's ahead to give useful context
    const nextIsElevator = nextNode.type === 'elevator';
    const nextIsStairs = nextNode.type === 'stairs';
    const nextIsTunnel = nextNode.type === 'tunnel-entry';
    const nextIsEntrance = nextNode.type === 'building-entrance';
    const landmark = nextNode.label || (nextIsElevator ? 'the elevators' : nextIsStairs ? 'the stairwell' : nextIsTunnel ? 'the tunnel entrance' : nextIsEntrance ? 'the entrance' : '');

    if (prevAngle !== null) {
      const turnType = getTurnType(prevAngle, angle);
      if (turnType !== StepType.GO_STRAIGHT) {
        const turnDir = turnType === StepType.TURN_LEFT ? 'Turn left' : 'Turn right';
        const context = landmark ? ` toward ${landmark}` : '';
        steps.push({
          instruction: `${turnDir}${context}`,
          distance: edge.distance, duration: edge.weight,
          floorId: currentNode.floorId, buildingId: currentNode.buildingId,
          startNodeId: currentNode.id, endNodeId: nextNode.id,
          type: turnType, landmark: nextNode.label,
          icon: getStepIcon(turnType),
        });
      } else {
        // Continue straight — merge with previous walking step
        const lastStep = steps[steps.length - 1];
        if (lastStep && [StepType.GO_STRAIGHT, StepType.WALK, StepType.TURN_LEFT, StepType.TURN_RIGHT].includes(lastStep.type)) {
          lastStep.distance += edge.distance;
          lastStep.duration += edge.weight;
          lastStep.endNodeId = nextNode.id;
        } else {
          steps.push({
            instruction: 'Continue straight',
            distance: edge.distance, duration: edge.weight,
            floorId: currentNode.floorId, buildingId: currentNode.buildingId,
            startNodeId: currentNode.id, endNodeId: nextNode.id,
            type: StepType.GO_STRAIGHT, icon: getStepIcon(StepType.GO_STRAIGHT),
          });
        }
      }
    } else {
      // First walking step after a transition or at the start
      const bldg = BUILDING_MAP.get(currentNode.buildingId);
      let instruction: string;
      if (steps.length === 0) {
        // Very first step — include building context
        instruction = landmark ? `Head toward ${landmark}` : `Walk down the corridor`;
      } else {
        // After floor/building change
        instruction = landmark ? `Walk toward ${landmark}` : `Continue down the corridor`;
      }
      steps.push({
        instruction, distance: edge.distance, duration: edge.weight,
        floorId: currentNode.floorId, buildingId: currentNode.buildingId,
        startNodeId: currentNode.id, endNodeId: nextNode.id,
        type: StepType.WALK, landmark: nextNode.label,
        icon: getStepIcon(StepType.WALK),
      });
    }

    prevAngle = angle;
  }

  // === ARRIVAL STEP ===
  buildings.add(lastNode.buildingId);
  floors.add(lastNode.floorId);

  const destBldg = BUILDING_MAP.get(lastNode.buildingId);
  let arrivalText = '';

  if (destRoom) {
    const occ = destRoom.occupants?.length
      ? OCCUPANTS.find((o: any) => o.id === destRoom.occupants[0])
      : null;
    const side = getNearbyRoomHint(destRoom);

    if (occ) {
      arrivalText = `Arrive at ${destRoom.number}${side ? ` (${side})` : ''} — ${occ.name}`;
    } else if (destRoom.label) {
      arrivalText = `Arrive at ${destRoom.number} — ${destRoom.label}`;
    } else {
      arrivalText = `Arrive at ${destRoom.number}`;
    }
  } else {
    arrivalText = lastNode.label ? `Arrive at ${lastNode.label}` : 'Arrive at destination';
  }

  steps.push({
    instruction: arrivalText,
    distance: 0,
    duration: 0,
    floorId: lastNode.floorId,
    buildingId: lastNode.buildingId,
    startNodeId: lastNode.id,
    endNodeId: lastNode.id,
    type: StepType.ARRIVE,
    icon: getStepIcon(StepType.ARRIVE),
  });

  // No post-processing — keep instructions short and clean

  return {
    steps,
    nodeIds,
    totalDistance,
    totalDuration: totalWeight,
    buildings: Array.from(buildings),
    floors: Array.from(floors),
    useTunnel,
    useSubway,
    accessible,
  };
}

export { formatDuration, formatDistance };
