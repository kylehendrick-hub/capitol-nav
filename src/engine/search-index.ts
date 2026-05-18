import Fuse from 'fuse.js';
import { Room, Occupant, BuildingId } from '../types';
import { BUILDING_MAP } from '../data/buildings';

export interface SearchEntry {
  type: 'room' | 'occupant';
  id: string;
  roomId: string;
  displayName: string;
  subtitle: string;
  buildingId: BuildingId;
  floorLabel: string;
  searchText: string;
}

export interface SearchResult {
  entry: SearchEntry;
  score: number;
}

export class SearchIndex {
  private fuse: Fuse<SearchEntry>;
  private entries: SearchEntry[] = [];

  constructor(rooms: Room[], occupants: Occupant[]) {
    const occupantMap = new Map(occupants.map(o => [o.id, o]));

    // Index rooms
    for (const room of rooms) {
      const building = BUILDING_MAP.get(room.buildingId);
      if (!building) continue;

      const floor = building.floors.find(f => f.id === room.position.floorId);
      const floorLabel = floor?.label || '';

      const searchParts = [
        room.number,
        `${building.abbreviation} ${room.number}`,
        building.shortName,
        room.label || '',
      ];

      // Add occupant names to room search
      for (const occId of room.occupants) {
        const occ = occupantMap.get(occId);
        if (occ) {
          searchParts.push(occ.name, ...occ.searchTerms);
        }
      }

      this.entries.push({
        type: 'room',
        id: room.id,
        roomId: room.id,
        displayName: room.label
          ? `${building.abbreviation} ${room.number} — ${room.label}`
          : `${building.abbreviation} ${room.number}`,
        subtitle: `${building.shortName}, ${floorLabel}`,
        buildingId: room.buildingId,
        floorLabel,
        searchText: searchParts.join(' '),
      });
    }

    // Index occupants (pointing to their rooms)
    for (const occupant of occupants) {
      for (const roomId of occupant.roomIds) {
        const room = rooms.find(r => r.id === roomId);
        if (!room) continue;

        const building = BUILDING_MAP.get(room.buildingId);
        if (!building) continue;

        const floor = building.floors.find(f => f.id === room.position.floorId);

        this.entries.push({
          type: 'occupant',
          id: occupant.id,
          roomId: room.id,
          displayName: occupant.name,
          subtitle: `${occupant.title} — ${building.abbreviation} ${room.number}`,
          buildingId: room.buildingId,
          floorLabel: floor?.label || '',
          searchText: [
            occupant.name,
            occupant.title,
            occupant.party || '',
            occupant.state || '',
            ...occupant.searchTerms,
            room.number,
            building.abbreviation,
          ].join(' '),
        });
      }
    }

    this.fuse = new Fuse(this.entries, {
      keys: ['searchText', 'displayName'],
      threshold: 0.35,
      includeScore: true,
      minMatchCharLength: 2,
    });
  }

  search(query: string, limit = 20): SearchResult[] {
    if (!query.trim()) return [];

    const results = this.fuse.search(query, { limit });
    return results.map(r => ({
      entry: r.item,
      score: r.score ?? 1,
    }));
  }

  getAllRooms(): SearchEntry[] {
    return this.entries.filter(e => e.type === 'room');
  }

  getByRoomId(roomId: string): SearchEntry | undefined {
    return this.entries.find(e => e.roomId === roomId);
  }
}
