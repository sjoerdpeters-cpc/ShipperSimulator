import { create } from 'zustand';
import { ports } from '../data/ports';
import type { Port } from '../domains/port/types';
import type { RoutePlan } from '../domains/route/types';
import { buildWaterwayRoute } from '../domains/route/waterwayRoutes';
import { advanceSimulation, createInitialSimulationState } from '../domains/simulation/simulationEngine';
import type { SimulationState } from '../domains/simulation/types';
import type { FleetVessel, Vessel } from '../domains/vessel/types';

const STARTING_BALANCE_EUROS = 250000;
const BUNKER_LITERS_PER_ACTION = 1000;

type GameStore = {
  vessel: Vessel | null;
  port: Port | null;
  balanceEuros: number;
  fleet: FleetVessel[];
  activeFleetVesselId: string | null;
  timeScale: 0 | 1 | 2;
  route: RoutePlan | null;
  simulation: SimulationState;
  setVessel: (vessel: Vessel) => void;
  clearSelectedVessel: () => void;
  setPort: (port: Port) => void;
  buySelectedVessel: () => boolean;
  setActiveFleetVessel: (fleetVesselId: string) => void;
  bunkerActiveVessel: (port: Port) => void;
  planRouteForActiveVessel: (destinationPortId: string) => void;
  startSailingActiveVessel: () => void;
  idleActiveVessel: () => void;
  setTimeScale: (timeScale: 0 | 1 | 2) => void;
  setRoute: (route: RoutePlan) => void;
  tick: (days?: number) => void;
};

export const useGameStore = create<GameStore>((set) => ({
  vessel: null,
  port: null,
  balanceEuros: STARTING_BALANCE_EUROS,
  fleet: [],
  activeFleetVesselId: null,
  timeScale: 0,
  route: null,
  simulation: createInitialSimulationState(),
  setVessel: (vessel) => set({ vessel }),
  clearSelectedVessel: () => set({ vessel: null }),
  setPort: (port) => set({ port }),
  buySelectedVessel: () => {
    let didBuy = false;

    set((state) => {
      if (!state.vessel || !state.port || state.balanceEuros < state.vessel.purchasePriceEuros) {
        return state;
      }

      const fleetVessel: FleetVessel = {
        id: `${state.vessel.id}-${Date.now()}`,
        name: `${state.vessel.name} ${state.fleet.length + 1}`,
        vessel: state.vessel,
        homePortId: state.port.id,
        currentPortId: state.port.id,
        destinationPortId: null,
        fuelLiters: Math.round(state.vessel.fuelCapacityLiters * 0.35),
        status: 'idle',
        voyage: null,
      };

      didBuy = true;

      return {
        balanceEuros: state.balanceEuros - state.vessel.purchasePriceEuros,
        fleet: [...state.fleet, fleetVessel],
        activeFleetVesselId: fleetVessel.id,
      };
    });

    return didBuy;
  },
  setActiveFleetVessel: (fleetVesselId) => set({ activeFleetVesselId: fleetVesselId }),
  bunkerActiveVessel: (port) =>
    set((state) => {
      const active = state.fleet.find((fleetVessel) => fleetVessel.id === state.activeFleetVesselId);

      if (!active) {
        return state;
      }

      const litersToTank = Math.min(
        BUNKER_LITERS_PER_ACTION,
        active.vessel.fuelCapacityLiters - active.fuelLiters,
      );
      const cost = Math.round(litersToTank * port.dieselPricePerLiterEuros);

      if (litersToTank <= 0 || state.balanceEuros < cost) {
        return state;
      }

      return {
        balanceEuros: state.balanceEuros - cost,
        fleet: state.fleet.map((fleetVessel) =>
          fleetVessel.id === active.id
            ? {
                ...fleetVessel,
                fuelLiters: fleetVessel.fuelLiters + litersToTank,
                status: 'bunkering',
              }
            : fleetVessel,
        ),
      };
    }),
  planRouteForActiveVessel: (destinationPortId) =>
    set((state) => ({
      fleet: state.fleet.map((fleetVessel) =>
        fleetVessel.id === state.activeFleetVesselId
          ? {
              ...fleetVessel,
              destinationPortId,
              status: 'route-planned',
              voyage: null,
            }
          : fleetVessel,
      ),
    })),
  startSailingActiveVessel: () =>
    set((state) => {
      const active = state.fleet.find((fleetVessel) => fleetVessel.id === state.activeFleetVesselId);

      if (!active?.destinationPortId) {
        return state;
      }

      const origin = ports.find((candidate) => candidate.id === active.currentPortId);
      const destination = ports.find((candidate) => candidate.id === active.destinationPortId);

      if (!origin || !destination) {
        return state;
      }

      const route = buildWaterwayRoute(origin, destination, active.vessel.maxSpeedKmh);
      const estimatedFuelLiters = Math.round(route.distanceKm * (active.vessel.costPerKmEuros / 10));

      if (active.fuelLiters < estimatedFuelLiters) {
        return state;
      }

      return {
        fleet: state.fleet.map((fleetVessel) =>
          fleetVessel.id === active.id
            ? {
                ...fleetVessel,
                fuelLiters: fleetVessel.fuelLiters - estimatedFuelLiters,
                status: 'sailing',
                voyage: {
                  originPortId: origin.id,
                  destinationPortId: destination.id,
                  routeCoordinates: route.routeCoordinates,
                  distanceKm: route.distanceKm,
                  durationDays: route.durationDays,
                  progressDays: 0,
                },
              }
            : fleetVessel,
        ),
      };
    }),
  idleActiveVessel: () =>
    set((state) => ({
      fleet: state.fleet.map((fleetVessel) =>
        fleetVessel.id === state.activeFleetVesselId
          ? {
              ...fleetVessel,
              destinationPortId: null,
              status: 'idle',
              voyage: null,
            }
          : fleetVessel,
      ),
    })),
  setTimeScale: (timeScale) => set({ timeScale }),
  setRoute: (route) => set({ route }),
  tick: (days = 1) =>
    set((state) => ({
      simulation: advanceSimulation(state.simulation, days),
      fleet: state.fleet.map((fleetVessel) => {
        if (fleetVessel.status !== 'sailing' || !fleetVessel.voyage) {
          return fleetVessel;
        }

        const progressDays = Math.min(
          fleetVessel.voyage.durationDays,
          fleetVessel.voyage.progressDays + Math.max(0, Math.floor(days)),
        );

        if (progressDays >= fleetVessel.voyage.durationDays) {
          return {
            ...fleetVessel,
            currentPortId: fleetVessel.voyage.destinationPortId,
            destinationPortId: null,
            status: 'idle',
            voyage: null,
          };
        }

        return {
          ...fleetVessel,
          voyage: {
            ...fleetVessel.voyage,
            progressDays,
          },
        };
      }),
    })),
}));
