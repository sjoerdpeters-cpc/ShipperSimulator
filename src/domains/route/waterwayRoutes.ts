import type { Port } from '../port/types';

type Coordinate = [longitude: number, latitude: number];

const waterwayAnchors: Record<string, Coordinate[]> = {
  rotterdam: [
    [4.47917, 51.9225],
    [4.65, 51.89],
    [4.88, 51.86],
    [5.14, 51.84],
    [5.42917, 51.8875],
  ],
  amsterdam: [
    [4.89517, 52.37022],
    [4.94, 52.31],
    [5.0, 52.18],
    [5.1, 52.08],
    [5.27, 51.98],
    [5.42917, 51.8875],
  ],
  moerdijk: [
    [4.62611, 51.70167],
    [4.78, 51.76],
    [5.02, 51.82],
    [5.42917, 51.8875],
  ],
  'vlissingen-terneuzen': [
    [3.82039, 51.32723],
    [3.95, 51.38],
    [4.18, 51.52],
    [4.42, 51.65],
    [4.62611, 51.70167],
    [5.02, 51.82],
    [5.42917, 51.8875],
  ],
  eemshaven: [
    [6.83278, 53.44222],
    [6.45, 53.27],
    [5.76, 52.98],
    [5.47, 52.57],
    [5.3, 52.25],
    [5.42917, 51.8875],
  ],
  nijmegen: [
    [5.85278, 51.8425],
    [5.66, 51.86],
    [5.42917, 51.8875],
  ],
  tiel: [[5.42917, 51.8875]],
  venlo: [
    [6.17278, 51.37],
    [6.05, 51.5],
    [5.92, 51.7],
    [5.85278, 51.8425],
    [5.66, 51.86],
    [5.42917, 51.8875],
  ],
  utrecht: [
    [5.12142, 52.09074],
    [5.23, 51.99],
    [5.35, 51.93],
    [5.42917, 51.8875],
  ],
  'deventer-zutphen': [
    [6.16064, 52.255],
    [6.1, 52.14],
    [5.95, 52.02],
    [5.8, 51.94],
    [5.42917, 51.8875],
  ],
  arnhem: [
    [5.89873, 51.9851],
    [5.8, 51.94],
    [5.66, 51.9],
    [5.42917, 51.8875],
  ],
  maastricht: [
    [5.69097, 50.85137],
    [5.77, 51.05],
    [5.86, 51.25],
    [6.05, 51.5],
    [5.92, 51.7],
    [5.85278, 51.8425],
    [5.42917, 51.8875],
  ],
};

const networkHub: Coordinate = [5.42917, 51.8875];
const earthRadiusKm = 6371;

function toRadians(value: number) {
  return (value * Math.PI) / 180;
}

function getDistanceKm(from: Coordinate, to: Coordinate) {
  const deltaLatitude = toRadians(to[1] - from[1]);
  const deltaLongitude = toRadians(to[0] - from[0]);
  const fromLatitude = toRadians(from[1]);
  const toLatitude = toRadians(to[1]);

  const a =
    Math.sin(deltaLatitude / 2) ** 2 +
    Math.cos(fromLatitude) * Math.cos(toLatitude) * Math.sin(deltaLongitude / 2) ** 2;

  return 2 * earthRadiusKm * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function compactCoordinates(coordinates: Coordinate[]) {
  return coordinates.filter((coordinate, index, list) => {
    const previous = list[index - 1];
    return !previous || previous[0] !== coordinate[0] || previous[1] !== coordinate[1];
  });
}

export function buildWaterwayRoute(origin: Port, destination: Port, speedKmh: number) {
  const originLeg = waterwayAnchors[origin.id] ?? [origin.coordinates, networkHub];
  const destinationLeg = waterwayAnchors[destination.id] ?? [destination.coordinates, networkHub];
  const routeCoordinates = compactCoordinates([...originLeg, ...[...destinationLeg].reverse()]);
  const distanceKm = routeCoordinates.reduce((total, coordinate, index) => {
    const next = routeCoordinates[index + 1];
    return next ? total + getDistanceKm(coordinate, next) : total;
  }, 0);
  const sailingHoursPerDay = 10;
  const durationDays = Math.max(1, Math.ceil(distanceKm / (speedKmh * sailingHoursPerDay)));

  return {
    routeCoordinates,
    distanceKm: Math.round(distanceKm),
    durationDays,
  };
}

export function getCoordinateAtProgress(coordinates: Coordinate[], progress: number): Coordinate {
  if (coordinates.length === 0) {
    return networkHub;
  }

  if (coordinates.length === 1 || progress <= 0) {
    return coordinates[0];
  }

  if (progress >= 1) {
    return coordinates[coordinates.length - 1];
  }

  const segmentDistances = coordinates.slice(0, -1).map((coordinate, index) =>
    getDistanceKm(coordinate, coordinates[index + 1]),
  );
  const totalDistance = segmentDistances.reduce((total, distance) => total + distance, 0);
  let targetDistance = totalDistance * progress;

  for (let index = 0; index < segmentDistances.length; index += 1) {
    const segmentDistance = segmentDistances[index];

    if (targetDistance <= segmentDistance) {
      const from = coordinates[index];
      const to = coordinates[index + 1];
      const segmentProgress = segmentDistance === 0 ? 0 : targetDistance / segmentDistance;

      return [
        from[0] + (to[0] - from[0]) * segmentProgress,
        from[1] + (to[1] - from[1]) * segmentProgress,
      ];
    }

    targetDistance -= segmentDistance;
  }

  return coordinates[coordinates.length - 1];
}
