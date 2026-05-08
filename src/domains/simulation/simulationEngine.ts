import type { SimulationState } from './types';

const HOURS_PER_DAY = 24;

export function createInitialSimulationState(): SimulationState {
  return {
    day: 1,
    elapsedHours: 0,
  };
}

export function advanceSimulation(state: SimulationState, days = 1): SimulationState {
  const normalizedDays = Math.max(0, Math.floor(days));

  return {
    day: state.day + normalizedDays,
    elapsedHours: state.elapsedHours + normalizedDays * HOURS_PER_DAY,
  };
}
