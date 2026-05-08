export type CargoOrder = {
  id: string;
  title: string;
  originPortId: string;
  destinationPortId: string;
  tonnes: number;
  rewardEuros: number;
};
