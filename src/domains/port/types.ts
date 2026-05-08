export type Port = {
  id: string;
  name: string;
  region: string;
  description: string;
  coordinates: [longitude: number, latitude: number];
  dieselPricePerLiterEuros: number;
  mooringCostPerDayEuros: number;
  dockingCostEuros: number;
  image: {
    src: string;
    alt: string;
    credit: string;
    sourceUrl: string;
  };
};
