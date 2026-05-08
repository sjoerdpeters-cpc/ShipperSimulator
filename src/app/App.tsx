import { useMemo } from 'react';
import { getInitialRoutePlan } from '../domains/route/routeEngine';
import { advanceSimulation } from '../domains/simulation/simulationEngine';
import { mockVessels } from '../data/mockVessels';
import { useGameStore } from '../store/gameStore';

export function App() {
  const vessel = useGameStore((state) => state.vessel);
  const simulation = useGameStore((state) => state.simulation);
  const setVessel = useGameStore((state) => state.setVessel);
  const setRoute = useGameStore((state) => state.setRoute);
  const tick = useGameStore((state) => state.tick);

  const routePreview = useMemo(() => getInitialRoutePlan(), []);
  const nextSimulation = advanceSimulation(simulation, 1);

  return (
    <main className="app-shell">
      <aside className="sidebar" aria-label="Game status">
        <p className="eyebrow">MVP 0</p>
        <h1>Shipper Simulator</h1>
        <p className="intro">
          Technische basis voor een desktop-first binnenvaart simulator met losse kaart-,
          route- en simulatielagen.
        </p>

        <section className="status-panel" aria-labelledby="status-title">
          <h2 id="status-title">Status</h2>
          <dl>
            <div>
              <dt>Schip</dt>
              <dd>{vessel?.name ?? 'Nog niet gekozen'}</dd>
            </div>
            <div>
              <dt>Simulatiedag</dt>
              <dd>{simulation.day}</dd>
            </div>
            <div>
              <dt>Volgende tick</dt>
              <dd>Dag {nextSimulation.day}</dd>
            </div>
          </dl>
        </section>

        <div className="actions">
          <button type="button" onClick={() => setVessel(mockVessels[0])}>
            Kies startschip
          </button>
          <button type="button" onClick={() => setRoute(routePreview)}>
            Laad mockroute
          </button>
          <button type="button" onClick={() => tick(1)}>
            Simuleer dag
          </button>
        </div>
      </aside>

      <section className="workspace" aria-label="Simulator werkruimte">
        <div className="map-placeholder">
          <span>MapLibre kaartlaag</span>
          <strong>Nederlandse waterkaart volgt in MVP 1</strong>
        </div>

        <div className="module-grid">
          <article>
            <h2>Route-engine</h2>
            <p>{routePreview.origin.name} naar {routePreview.destination.name}</p>
          </article>
          <article>
            <h2>Game state</h2>
            <p>Zustand store actief met schip, route en simulatietijd.</p>
          </article>
          <article>
            <h2>Data</h2>
            <p>Mockdata eerst, echte kaart- en vaarwegdata later.</p>
          </article>
        </div>
      </section>
    </main>
  );
}
