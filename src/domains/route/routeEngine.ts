import type { RoutePlan } from './types';

export function getInitialRoutePlan(): RoutePlan {
  return {
    id: 'rotterdam-nijmegen',
    origin: {
      id: 'port-rotterdam',
      name: 'Rotterdam',
      coordinates: [4.47917, 51.9225],
    },
    destination: {
      id: 'port-nijmegen',
      name: 'Nijmegen',
      coordinates: [5.85278, 51.8425],
    },
    distanceKm: 124,
    estimatedDays: 2,
    waypoints: [
      {
        id: 'waal-tiel',
        name: 'Tiel',
        coordinates: [5.42917, 51.8875],
      },
    ],
  };
}
