export type Vessel = {
  id: string;
  name: string;
  type: 'container' | 'tanker' | 'dry-cargo' | 'push-boat';
  label: string;
  description: string;
  image: {
    src: string;
    alt: string;
    credit: string;
    sourceUrl: string;
  };
  maxSpeedKmh: number;
  capacityLabel: string;
  capacityTonnes: number;
  costPerKmEuros: number;
  purchasePriceEuros: number;
  fuelCapacityLiters: number;
};

export type FleetVesselStatus = 'idle' | 'bunkering' | 'route-planned';

export type FleetVessel = {
  id: string;
  vessel: Vessel;
  homePortId: string;
  currentPortId: string;
  destinationPortId: string | null;
  fuelLiters: number;
  status: FleetVesselStatus;
};
