import { useMemo, useState, useCallback } from 'react';
import { SearchIndex, SearchResult } from '../engine/search-index';
import { ROOMS } from '../data/rooms';
import { OCCUPANTS } from '../data/occupants';

export function useSearch() {
  const index = useMemo(() => new SearchIndex(ROOMS, OCCUPANTS), []);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);

  const search = useCallback(
    (q: string) => {
      setQuery(q);
      if (q.trim().length < 2) {
        setResults([]);
        return;
      }
      setResults(index.search(q, 20));
    },
    [index]
  );

  const getByRoomId = useCallback(
    (roomId: string) => index.getByRoomId(roomId),
    [index]
  );

  return { query, search, results, getByRoomId };
}
