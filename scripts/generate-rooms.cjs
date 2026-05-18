const fs = require('fs');
const memberRooms = JSON.parse(fs.readFileSync('./member-rooms.json', 'utf8'));
const memberOccupants = JSON.parse(fs.readFileSync('./member-occupants.json', 'utf8'));

const bounds = {
  rayburn: [2000, 1200], longworth: [1800, 1000], cannon: [1600, 1000],
  hart: [1600, 1200], dirksen: [1600, 1000], russell: [1600, 1000],
  capitol: [2000, 1400], 'visitor-center': [1800, 1000],
  'loc-jefferson': [1600, 1200], 'loc-adams': [1400, 1000], 'loc-madison': [1800, 1000]
};

function getWing(x, y, w, h) {
  const cx = w / 2, cy = h / 2;
  if (x < cx && y < cy) return 'Wing.NORTH';
  if (x >= cx && y < cy) return 'Wing.EAST';
  if (x < cx && y >= cy) return 'Wing.WEST';
  return 'Wing.SOUTH';
}

// ===== ROOMS.TS =====
let roomsTs = `import { Room, RoomType, Wing } from '../types';
import { BuildingId } from '../types';

export const ROOMS: Room[] = [
`;

const existingIds = new Set();

// Add all member offices
memberRooms.forEach(r => {
  existingIds.add(r.id);
  const [w, h] = bounds[r.buildingId] || [1600, 1000];
  const wing = getWing(r.x, r.y, w, h);
  const bidEnum = r.buildingId.toUpperCase().replace(/-/g, '_');
  const label = r.label.replace(/"/g, "'");
  roomsTs += `  { id: '${r.id}', number: '${r.number}', buildingId: BuildingId.${bidEnum}, position: { floorId: '${r.floorId}', x: ${r.x}, y: ${r.y}, wing: ${wing} }, type: RoomType.OFFICE, label: "${label}", occupants: ['${r.occupantId}'], nearestNodeId: '${r.floorId}-n1' },\n`;
});

// Committee rooms and landmarks
const infraRooms = [
  // RAYBURN
  { id: 'rayburn-2154', number: '2154', bid: 'RAYBURN', fid: 'rayburn-2', x: 800, y: 400, type: 'COMMITTEE', label: 'Committee on Ways and Means' },
  { id: 'rayburn-2167', number: '2167', bid: 'RAYBURN', fid: 'rayburn-2', x: 1200, y: 400, type: 'HEARING', label: 'Committee on Appropriations' },
  { id: 'rayburn-2172', number: '2172', bid: 'RAYBURN', fid: 'rayburn-2', x: 1400, y: 300, type: 'HEARING', label: 'Committee on Budget' },
  { id: 'rayburn-2175', number: '2175', bid: 'RAYBURN', fid: 'rayburn-2', x: 1500, y: 400, type: 'HEARING', label: 'Committee on Energy and Commerce' },
  { id: 'rayburn-2128', number: '2128', bid: 'RAYBURN', fid: 'rayburn-2', x: 400, y: 300, type: 'HEARING', label: 'Committee on Armed Services' },
  { id: 'rayburn-2141', number: '2141', bid: 'RAYBURN', fid: 'rayburn-2', x: 600, y: 500, type: 'HEARING', label: 'Committee on Financial Services' },
  { id: 'rayburn-2123', number: '2123', bid: 'RAYBURN', fid: 'rayburn-2', x: 350, y: 500, type: 'HEARING', label: 'Committee on Education and the Workforce' },
  { id: 'rayburn-2237', number: '2237', bid: 'RAYBURN', fid: 'rayburn-2', x: 700, y: 700, type: 'HEARING', label: 'Committee on Science, Space, and Technology' },
  { id: 'rayburn-2247', number: '2247', bid: 'RAYBURN', fid: 'rayburn-2', x: 800, y: 800, type: 'HEARING', label: 'Committee on Foreign Affairs' },
  { id: 'rayburn-2255', number: '2255', bid: 'RAYBURN', fid: 'rayburn-2', x: 900, y: 700, type: 'HEARING', label: 'Committee on the Judiciary' },
  { id: 'rayburn-2360', number: '2360', bid: 'RAYBURN', fid: 'rayburn-3', x: 1000, y: 600, type: 'HEARING', label: 'Committee on Natural Resources' },
  { id: 'rayburn-2261', number: '2261', bid: 'RAYBURN', fid: 'rayburn-2', x: 1000, y: 700, type: 'HEARING', label: 'Committee on Transportation and Infrastructure' },
  { id: 'rayburn-2322', number: '2322', bid: 'RAYBURN', fid: 'rayburn-3', x: 700, y: 400, type: 'HEARING', label: 'Committee on Oversight and Accountability' },

  // LONGWORTH
  { id: 'longworth-1100', number: '1100', bid: 'LONGWORTH', fid: 'longworth-1', x: 900, y: 500, type: 'COMMITTEE', label: 'Longworth Ways and Means Hearing Room' },
  { id: 'longworth-1310', number: '1310', bid: 'LONGWORTH', fid: 'longworth-1', x: 600, y: 300, type: 'HEARING', label: 'Committee on Agriculture' },
  { id: 'longworth-1334', number: '1334', bid: 'LONGWORTH', fid: 'longworth-1', x: 800, y: 300, type: 'HEARING', label: 'Committee on Veterans Affairs' },
  { id: 'longworth-1324', number: '1324', bid: 'LONGWORTH', fid: 'longworth-1', x: 700, y: 400, type: 'HEARING', label: 'Committee on Small Business' },

  // CANNON
  { id: 'cannon-210', number: '210', bid: 'CANNON', fid: 'cannon-2', x: 600, y: 300, type: 'HEARING', label: 'Cannon Caucus Room' },
  { id: 'cannon-334', number: '334', bid: 'CANNON', fid: 'cannon-3', x: 700, y: 500, type: 'HEARING', label: 'Committee on Homeland Security' },
  { id: 'cannon-121', number: '121', bid: 'CANNON', fid: 'cannon-1', x: 400, y: 400, type: 'HEARING', label: 'Committee on Ethics' },

  // HART
  { id: 'hart-216', number: 'SH-216', bid: 'HART', fid: 'hart-2', x: 800, y: 600, type: 'HEARING', label: 'Hart Hearing Room 216' },
  { id: 'hart-902', number: 'SH-902', bid: 'HART', fid: 'hart-5', x: 800, y: 400, type: 'HEARING', label: 'Senate Select Committee on Intelligence' },

  // DIRKSEN
  { id: 'dirksen-106', number: 'SD-106', bid: 'DIRKSEN', fid: 'dirksen-1', x: 500, y: 400, type: 'HEARING', label: 'Committee on the Judiciary' },
  { id: 'dirksen-192', number: 'SD-192', bid: 'DIRKSEN', fid: 'dirksen-1', x: 800, y: 400, type: 'HEARING', label: 'Committee on Banking' },
  { id: 'dirksen-226', number: 'SD-226', bid: 'DIRKSEN', fid: 'dirksen-2', x: 500, y: 500, type: 'HEARING', label: 'Dirksen Hearing Room' },
  { id: 'dirksen-366', number: 'SD-366', bid: 'DIRKSEN', fid: 'dirksen-3', x: 800, y: 500, type: 'HEARING', label: 'Committee on Appropriations' },
  { id: 'dirksen-430', number: 'SD-430', bid: 'DIRKSEN', fid: 'dirksen-4', x: 500, y: 300, type: 'HEARING', label: 'Committee on Commerce' },
  { id: 'dirksen-562', number: 'SD-562', bid: 'DIRKSEN', fid: 'dirksen-4', x: 800, y: 300, type: 'HEARING', label: 'Committee on Finance' },
  { id: 'dirksen-628', number: 'SD-628', bid: 'DIRKSEN', fid: 'dirksen-4', x: 600, y: 400, type: 'HEARING', label: 'Committee on Health, Education, Labor and Pensions' },

  // RUSSELL
  { id: 'russell-253', number: 'SR-253', bid: 'RUSSELL', fid: 'russell-2', x: 800, y: 400, type: 'HEARING', label: 'Kennedy Caucus Room' },
  { id: 'russell-325', number: 'SR-325', bid: 'RUSSELL', fid: 'russell-3', x: 700, y: 500, type: 'HEARING', label: 'Committee on Armed Services' },
  { id: 'russell-301', number: 'SR-301', bid: 'RUSSELL', fid: 'russell-3', x: 500, y: 400, type: 'OTHER', label: 'Russell Rotunda Gallery' },
  { id: 'russell-385', number: 'SR-385', bid: 'RUSSELL', fid: 'russell-3', x: 900, y: 500, type: 'HEARING', label: 'Committee on Environment and Public Works' },

  // CAPITOL
  { id: 'capitol-rotunda', number: 'Rotunda', bid: 'CAPITOL', fid: 'capitol-2', x: 1000, y: 700, type: 'OTHER', label: 'The Rotunda' },
  { id: 'capitol-statuary', number: 'Statuary Hall', bid: 'CAPITOL', fid: 'capitol-2', x: 700, y: 700, type: 'OTHER', label: 'National Statuary Hall' },
  { id: 'capitol-crypt', number: 'The Crypt', bid: 'CAPITOL', fid: 'capitol-1', x: 1000, y: 700, type: 'OTHER', label: 'The Crypt' },
  { id: 'capitol-old-senate', number: 'Old Senate', bid: 'CAPITOL', fid: 'capitol-2', x: 1000, y: 400, type: 'OTHER', label: 'Old Senate Chamber' },
  { id: 'capitol-senate-chamber', number: 'S-Chamber', bid: 'CAPITOL', fid: 'capitol-2', x: 1200, y: 500, type: 'OTHER', label: 'Senate Chamber' },
  { id: 'capitol-house-chamber', number: 'H-Chamber', bid: 'CAPITOL', fid: 'capitol-2', x: 800, y: 900, type: 'OTHER', label: 'House Chamber' },
  { id: 'capitol-speakers-lobby', number: 'H-Lobby', bid: 'CAPITOL', fid: 'capitol-2', x: 700, y: 800, type: 'OTHER', label: "Speaker's Lobby" },
  { id: 'capitol-senate-lobby', number: 'S-Lobby', bid: 'CAPITOL', fid: 'capitol-2', x: 1300, y: 500, type: 'OTHER', label: 'Senate Lobby' },
  { id: 'capitol-s120', number: 'S-120', bid: 'CAPITOL', fid: 'capitol-1', x: 1200, y: 400, type: 'OTHER', label: 'Senate Reception Room' },
  { id: 'capitol-h230', number: 'H-230', bid: 'CAPITOL', fid: 'capitol-2', x: 600, y: 800, type: 'OFFICE', label: "Speaker of the House Office" },

  // CVC
  { id: 'cvc-emancipation', number: 'CVC-Main', bid: 'VISITOR_CENTER', fid: 'cvc-upper', x: 900, y: 500, type: 'OTHER', label: 'Emancipation Hall' },
  { id: 'cvc-exhibition', number: 'CVC-Exhibit', bid: 'VISITOR_CENTER', fid: 'cvc-lower', x: 900, y: 500, type: 'OTHER', label: 'Exhibition Hall' },
  { id: 'cvc-theater', number: 'CVC-Theater', bid: 'VISITOR_CENTER', fid: 'cvc-lower', x: 600, y: 400, type: 'OTHER', label: 'Orientation Theater' },
  { id: 'cvc-gift', number: 'CVC-Gift', bid: 'VISITOR_CENTER', fid: 'cvc-upper', x: 600, y: 600, type: 'OTHER', label: 'Gift Shop' },
  { id: 'cvc-200', number: 'CVC-200', bid: 'VISITOR_CENTER', fid: 'cvc-upper', x: 400, y: 400, type: 'HEARING', label: 'Congressional Auditorium' },

  // LOC
  { id: 'loc-j-reading', number: 'LJ-Main', bid: 'LOC_JEFFERSON', fid: 'loc-jefferson-1', x: 800, y: 600, type: 'OTHER', label: 'Main Reading Room' },
  { id: 'loc-j-greathall', number: 'LJ-Hall', bid: 'LOC_JEFFERSON', fid: 'loc-jefferson-1', x: 800, y: 300, type: 'OTHER', label: 'Great Hall' },
  { id: 'loc-a-reading', number: 'LA-Reading', bid: 'LOC_ADAMS', fid: 'loc-adams-1', x: 700, y: 500, type: 'OTHER', label: 'Adams Building Reading Room' },
  { id: 'loc-m-reading', number: 'LM-Reading', bid: 'LOC_MADISON', fid: 'loc-madison-1', x: 900, y: 500, type: 'OTHER', label: 'Madison Reading Room' },
  { id: 'loc-m-crs', number: 'LM-CRS', bid: 'LOC_MADISON', fid: 'loc-madison-2', x: 500, y: 400, type: 'OTHER', label: 'Congressional Research Service' },
];

infraRooms.forEach(r => {
  if (existingIds.has(r.id)) return;
  existingIds.add(r.id);
  const bidLower = r.bid.toLowerCase().replace(/_/g, '-');
  const [w, h] = bounds[bidLower] || [1600, 1000];
  const wing = getWing(r.x, r.y, w, h);
  const label = r.label.replace(/"/g, "'");
  roomsTs += `  { id: '${r.id}', number: '${r.number}', buildingId: BuildingId.${r.bid}, position: { floorId: '${r.fid}', x: ${r.x}, y: ${r.y}, wing: ${wing} }, type: RoomType.${r.type}, label: "${label}", occupants: [], nearestNodeId: '${r.fid}-n1' },\n`;
});

// Infrastructure per building
const buildingList = [
  { id: 'rayburn', bid: 'RAYBURN', floors: ['rayburn-b', 'rayburn-1', 'rayburn-2', 'rayburn-3'] },
  { id: 'longworth', bid: 'LONGWORTH', floors: ['longworth-b', 'longworth-1', 'longworth-2'] },
  { id: 'cannon', bid: 'CANNON', floors: ['cannon-b', 'cannon-1', 'cannon-2', 'cannon-3', 'cannon-4', 'cannon-5'] },
  { id: 'hart', bid: 'HART', floors: ['hart-b', 'hart-1', 'hart-2', 'hart-3', 'hart-4', 'hart-5'] },
  { id: 'dirksen', bid: 'DIRKSEN', floors: ['dirksen-b', 'dirksen-1', 'dirksen-2', 'dirksen-3', 'dirksen-4'] },
  { id: 'russell', bid: 'RUSSELL', floors: ['russell-b', 'russell-1', 'russell-2', 'russell-3'] },
  { id: 'capitol', bid: 'CAPITOL', floors: ['capitol-b', 'capitol-1', 'capitol-2', 'capitol-3'] },
  { id: 'visitor-center', bid: 'VISITOR_CENTER', floors: ['cvc-lower', 'cvc-upper'] },
  { id: 'loc-jefferson', bid: 'LOC_JEFFERSON', floors: ['loc-jefferson-g', 'loc-jefferson-1', 'loc-jefferson-2'] },
  { id: 'loc-adams', bid: 'LOC_ADAMS', floors: ['loc-adams-1', 'loc-adams-2', 'loc-adams-3'] },
  { id: 'loc-madison', bid: 'LOC_MADISON', floors: ['loc-madison-g', 'loc-madison-1', 'loc-madison-2', 'loc-madison-3', 'loc-madison-4', 'loc-madison-5'] },
];

buildingList.forEach(b => {
  const [w, h] = bounds[b.id] || [1600, 1000];
  const cafFloor = b.floors.find(f => f.endsWith('-1') || f.endsWith('-b')) || b.floors[0];
  const entFloor = b.floors.find(f => f.endsWith('-1') || f.endsWith('-g') || f === 'cvc-upper') || b.floors[0];
  const basementFloor = b.floors.find(f => f.endsWith('-b') || f === 'cvc-lower' || f.endsWith('-g'));

  roomsTs += `  { id: '${b.id}-cafeteria', number: 'Cafeteria', buildingId: BuildingId.${b.bid}, position: { floorId: '${cafFloor}', x: ${Math.round(w * 0.3)}, y: ${Math.round(h * 0.8)}, wing: Wing.WEST }, type: RoomType.CAFETERIA, label: '${b.bid.charAt(0) + b.bid.slice(1).toLowerCase().replace(/_/g, ' ')} Cafeteria', occupants: [], nearestNodeId: '${cafFloor}-n1' },\n`;
  roomsTs += `  { id: '${b.id}-entrance', number: 'Main Entrance', buildingId: BuildingId.${b.bid}, position: { floorId: '${entFloor}', x: ${Math.round(w * 0.5)}, y: ${Math.round(h * 0.95)}, wing: Wing.SOUTH }, type: RoomType.ENTRANCE, label: 'Main Entrance', occupants: [], nearestNodeId: '${entFloor}-n1' },\n`;

  if (basementFloor) {
    roomsTs += `  { id: '${b.id}-tunnel', number: 'Tunnel', buildingId: BuildingId.${b.bid}, position: { floorId: '${basementFloor}', x: ${Math.round(w * 0.5)}, y: ${Math.round(h * 0.5)}, wing: Wing.CENTER }, type: RoomType.TUNNEL_ACCESS, label: 'Tunnel Access', occupants: [], nearestNodeId: '${basementFloor}-n1' },\n`;
  }

  b.floors.forEach((fid, fi) => {
    roomsTs += `  { id: '${b.id}-elev-${fi}', number: 'Elevator', buildingId: BuildingId.${b.bid}, position: { floorId: '${fid}', x: ${Math.round(w * 0.5)}, y: ${Math.round(h * 0.3)}, wing: Wing.CENTER }, type: RoomType.ELEVATOR, label: 'Elevator', occupants: [], nearestNodeId: '${fid}-n1' },\n`;
    roomsTs += `  { id: '${b.id}-restroom-m-${fi}', number: 'Restroom', buildingId: BuildingId.${b.bid}, position: { floorId: '${fid}', x: ${Math.round(w * 0.7)}, y: ${Math.round(h * 0.5)}, wing: Wing.EAST }, type: RoomType.RESTROOM, label: "Men's Restroom", occupants: [], nearestNodeId: '${fid}-n1' },\n`;
    roomsTs += `  { id: '${b.id}-restroom-w-${fi}', number: 'Restroom', buildingId: BuildingId.${b.bid}, position: { floorId: '${fid}', x: ${Math.round(w * 0.3)}, y: ${Math.round(h * 0.5)}, wing: Wing.WEST }, type: RoomType.RESTROOM, label: "Women's Restroom", occupants: [], nearestNodeId: '${fid}-n1' },\n`;
  });
});

// (roomsTs array kept open — filled rooms appended below before closing)

// ===== OCCUPANTS.TS =====
let occupantsTs = `import { Occupant } from '../types';

export const OCCUPANTS: Occupant[] = [
`;

memberOccupants.forEach(o => {
  const name = o.name.replace(/"/g, "'");
  occupantsTs += `  { id: '${o.id}', name: "${name}", title: '${o.title}', party: '${o.party}', state: '${o.state}', roomIds: ['${o.roomId}'], searchTerms: ${JSON.stringify(o.searchTerms)} },\n`;
});

// ===== Generate ALL physical room numbers in valid ranges =====
// This ensures rooms like 2239 Rayburn exist even if currently unoccupied

const allRoomRanges = [
  // Rayburn: 2[floor]01-2[floor]70 for floors 1-4
  ...Array.from({ length: 4 }, (_, floor) =>
    Array.from({ length: 70 }, (_, i) => ({
      buildingId: 'rayburn',
      bid: 'RAYBURN',
      number: `${2100 + floor * 100 + i + 1}`,
      floorId: `rayburn-${floor + 1}`,
    }))
  ).flat(),
  // Longworth: 1[floor]01-1[floor]50 for floors 0-5
  ...Array.from({ length: 6 }, (_, floor) =>
    Array.from({ length: 50 }, (_, i) => ({
      buildingId: 'longworth',
      bid: 'LONGWORTH',
      number: `${1000 + floor * 100 + i + 1}`,
      floorId: `longworth-${Math.min(floor, 2)}`,
    }))
  ).flat(),
  // Cannon: [floor]01-[floor]40 for floors 1-5
  ...Array.from({ length: 5 }, (_, floor) =>
    Array.from({ length: 40 }, (_, i) => ({
      buildingId: 'cannon',
      bid: 'CANNON',
      number: `${(floor + 1) * 100 + i + 1}`,
      floorId: `cannon-${floor + 1}`,
    }))
  ).flat(),
  // Hart: SH-[floor]01-SH-[floor]22 for floors 1-9
  ...Array.from({ length: 9 }, (_, floor) =>
    Array.from({ length: 22 }, (_, i) => ({
      buildingId: 'hart',
      bid: 'HART',
      number: `SH-${(floor + 1) * 100 + i + 1}`,
      floorId: `hart-${Math.min(floor + 1, 5)}`,
    }))
  ).flat(),
  // Dirksen: SD-[floor]01-SD-[floor]50 for floors 1-6
  ...Array.from({ length: 6 }, (_, floor) =>
    Array.from({ length: 50 }, (_, i) => ({
      buildingId: 'dirksen',
      bid: 'DIRKSEN',
      number: `SD-${(floor + 1) * 100 + i + 1}`,
      floorId: `dirksen-${Math.min(floor + 1, 4)}`,
    }))
  ).flat(),
  // Russell: SR-[floor]01-SR-[floor]50 for floors 1-4
  ...Array.from({ length: 4 }, (_, floor) =>
    Array.from({ length: 50 }, (_, i) => ({
      buildingId: 'russell',
      bid: 'RUSSELL',
      number: `SR-${(floor + 1) * 100 + i + 1}`,
      floorId: `russell-${Math.min(floor + 1, 3)}`,
    }))
  ).flat(),
  // Capitol: H-101 to H-250, S-101 to S-250
  ...Array.from({ length: 150 }, (_, i) => ({
    buildingId: 'capitol',
    bid: 'CAPITOL',
    number: `H-${101 + i}`,
    floorId: i < 50 ? 'capitol-1' : i < 100 ? 'capitol-2' : 'capitol-3',
  })),
  ...Array.from({ length: 150 }, (_, i) => ({
    buildingId: 'capitol',
    bid: 'CAPITOL',
    number: `S-${101 + i}`,
    floorId: i < 50 ? 'capitol-1' : i < 100 ? 'capitol-2' : 'capitol-3',
  })),
];

let filledCount = 0;
allRoomRanges.forEach(r => {
  // Create room ID
  const cleanNum = r.number.replace(/^(SH-|SD-|SR-|H-|S-)/, '');
  const roomId = `${r.buildingId}-${cleanNum}`;
  if (existingIds.has(roomId)) return; // Already exists as a member office or infra room
  existingIds.add(roomId);
  filledCount++;

  const hash = Math.abs((parseInt(cleanNum) * 2654435) % 100000);
  const [w, h] = bounds[r.buildingId] || [1600, 1000];
  const x = 100 + (hash % (w - 200));
  const y = 100 + ((hash >> 8) % (h - 200));
  const wing = getWing(x, y, w, h);

  roomsTs += `  { id: '${roomId}', number: '${r.number}', buildingId: BuildingId.${r.bid}, position: { floorId: '${r.floorId}', x: ${x}, y: ${y}, wing: ${wing} }, type: RoomType.OFFICE, label: '', occupants: [], nearestNodeId: '${r.floorId}-n1' },\n`;
});

roomsTs += '];\n';
fs.writeFileSync('./src/data/rooms.ts', roomsTs);

occupantsTs += '];\n';
fs.writeFileSync('./src/data/occupants.ts', occupantsTs);

// Stats
const roomCount = (roomsTs.match(/\{ id: '/g) || []).length;
console.log('ROOMS.ts:');
console.log('  Total rooms:', roomCount);
console.log('  Member offices:', memberRooms.length);
console.log('  Committee/landmark rooms:', infraRooms.filter(r => !memberRooms.some(mr => mr.id === r.id)).length);
console.log('  Infrastructure:', roomCount - memberRooms.length - infraRooms.filter(r => !memberRooms.some(mr => mr.id === r.id)).length);
console.log('OCCUPANTS.ts:');
console.log('  Total occupants:', memberOccupants.length);
