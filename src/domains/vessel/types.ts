export type Vessel = {
  id: string;
  name: string;
  type: 'spits' | 'kempenaar' | 'motorvrachtschip';
  maxSpeedKmh: number;
  cargoCapacityTonnes: number;
};
