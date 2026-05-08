export type MapViewport = {
  center: [longitude: number, latitude: number];
  zoom: number;
};

export const initialNetherlandsViewport: MapViewport = {
  center: [5.2913, 52.1326],
  zoom: 7,
};
