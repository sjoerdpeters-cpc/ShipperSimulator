import { create } from 'zustand';
import type { RoutePlan } from '../domains/route/types';
import { advanceSimulation, createInitialSimulationState } from '../domains/simulation/simulationEngine';
import type { SimulationState } from '../domains/simulation/types';
import type { Vessel } from '../domains/vessel/types';

type GameStore = {
  vessel: Vessel | null;
  route: RoutePlan | null;
  simulation: SimulationState;
  setVessel: (vessel: Vessel) => void;
  setRoute: (route: RoutePlan) => void;
  tick: (days?: number) => void;
};

export const useGameStore = create<GameStore>((set) => ({
  vessel: null,
  route: null,
  simulation: createInitialSimulationState(),
  setVessel: (vessel) => set({ vessel }),
  setRoute: (route) => set({ route }),
  tick: (days = 1) =>
    set((state) => ({
      simulation: advanceSimulation(state.simulation, days),
    })),
}));
