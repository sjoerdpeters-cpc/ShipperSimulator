import { create } from 'zustand';
import type { Port } from '../domains/port/types';
import type { RoutePlan } from '../domains/route/types';
import { advanceSimulation, createInitialSimulationState } from '../domains/simulation/simulationEngine';
import type { SimulationState } from '../domains/simulation/types';
import type { Vessel } from '../domains/vessel/types';

type GameStore = {
  vessel: Vessel | null;
  port: Port | null;
  route: RoutePlan | null;
  simulation: SimulationState;
  setVessel: (vessel: Vessel) => void;
  setPort: (port: Port) => void;
  setRoute: (route: RoutePlan) => void;
  tick: (days?: number) => void;
};

export const useGameStore = create<GameStore>((set) => ({
  vessel: null,
  port: null,
  route: null,
  simulation: createInitialSimulationState(),
  setVessel: (vessel) => set({ vessel }),
  setPort: (port) => set({ port }),
  setRoute: (route) => set({ route }),
  tick: (days = 1) =>
    set((state) => ({
      simulation: advanceSimulation(state.simulation, days),
    })),
}));
