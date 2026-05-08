export type RoutePoint = {
  id: string;
  name: string;
  coordinates: [longitude: number, latitude: number];
};

export type RoutePlan = {
  id: string;
  origin: RoutePoint;
  destination: RoutePoint;
  distanceKm: number;
  estimatedDays: number;
  waypoints: RoutePoint[];
};
