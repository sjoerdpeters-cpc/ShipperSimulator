import type { Vessel } from '../domains/vessel/types';

export const mockVessels: Vessel[] = [
  {
    id: 'ms-stad-amersfoort',
    name: 'MS Stad Amersfoort',
    type: 'motorvrachtschip',
    maxSpeedKmh: 13,
    cargoCapacityTonnes: 1350,
  },
];
