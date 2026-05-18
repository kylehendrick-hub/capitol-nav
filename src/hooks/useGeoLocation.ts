import { useState, useCallback } from 'react';
import { BuildingId } from '../types';
import { BUILDINGS } from '../data/buildings';

interface GeoResult {
  buildingId: BuildingId | null;
  buildingName: string;
  distance: number; // feet
  loading: boolean;
  error: string | null;
}

function haversineDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 20902231; // Earth radius in feet
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

export function useGeoLocation() {
  const [result, setResult] = useState<GeoResult>({
    buildingId: null,
    buildingName: '',
    distance: 0,
    loading: false,
    error: null,
  });

  const detect = useCallback(() => {
    if (!navigator.geolocation) {
      setResult(prev => ({ ...prev, error: 'GPS not available on this device' }));
      return;
    }

    setResult(prev => ({ ...prev, loading: true, error: null }));

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        let closest = { building: BUILDINGS[0], dist: Infinity };

        for (const building of BUILDINGS) {
          const dist = haversineDistance(
            latitude, longitude,
            building.coordinates.lat, building.coordinates.lng
          );
          if (dist < closest.dist) {
            closest = { building, dist };
          }
        }

        setResult({
          buildingId: closest.building.id,
          buildingName: closest.building.shortName,
          distance: Math.round(closest.dist),
          loading: false,
          error: closest.dist > 2640 ? 'You appear to be more than half a mile from Capitol Hill' : null,
        });
      },
      (err) => {
        setResult({
          buildingId: null,
          buildingName: '',
          distance: 0,
          loading: false,
          error: err.code === 1 ? 'Location access denied. Please enable location permissions.' :
                 err.code === 2 ? 'Could not determine your location.' :
                 'Location request timed out. Try again.',
        });
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 30000 }
    );
  }, []);

  return { ...result, detect };
}
