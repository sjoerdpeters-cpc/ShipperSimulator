import { useEffect, useState } from 'react';
import { ports } from '../data/ports';
import { vessels } from '../data/vessels';
import { PortMap } from '../domains/map/PortMap';
import { buildWaterwayRoute, getCoordinateAtProgress } from '../domains/route/waterwayRoutes';
import type { FleetVesselStatus } from '../domains/vessel/types';
import { useGameStore } from '../store/gameStore';

const euroFormatter = new Intl.NumberFormat('nl-NL', {
  style: 'currency',
  currency: 'EUR',
  maximumFractionDigits: 0,
});

function formatEuros(value: number) {
  return euroFormatter.format(value);
}

function getStatusLabel(status: FleetVesselStatus) {
  if (status === 'bunkering') {
    return 'Bunkeren';
  }

  if (status === 'route-planned') {
    return 'Route gepland';
  }

  if (status === 'sailing') {
    return 'Onderweg';
  }

  return 'Ligt stil';
}

export function App() {
  const [isFleetPanelOpen, setFleetPanelOpen] = useState(false);
  const vessel = useGameStore((state) => state.vessel);
  const port = useGameStore((state) => state.port);
  const balanceEuros = useGameStore((state) => state.balanceEuros);
  const fleet = useGameStore((state) => state.fleet);
  const activeFleetVesselId = useGameStore((state) => state.activeFleetVesselId);
  const simulation = useGameStore((state) => state.simulation);
  const timeScale = useGameStore((state) => state.timeScale);
  const setVessel = useGameStore((state) => state.setVessel);
  const clearSelectedVessel = useGameStore((state) => state.clearSelectedVessel);
  const setPort = useGameStore((state) => state.setPort);
  const buySelectedVessel = useGameStore((state) => state.buySelectedVessel);
  const setActiveFleetVessel = useGameStore((state) => state.setActiveFleetVessel);
  const bunkerActiveVessel = useGameStore((state) => state.bunkerActiveVessel);
  const planRouteForActiveVessel = useGameStore((state) => state.planRouteForActiveVessel);
  const startSailingActiveVessel = useGameStore((state) => state.startSailingActiveVessel);
  const idleActiveVessel = useGameStore((state) => state.idleActiveVessel);
  const setTimeScale = useGameStore((state) => state.setTimeScale);
  const tick = useGameStore((state) => state.tick);
  const selectedVessel = vessel ?? vessels[0];
  const selectedPort = port ?? ports[0];
  const activeFleetVessel = fleet.find((fleetVessel) => fleetVessel.id === activeFleetVesselId) ?? fleet[0];
  const activePort =
    ports.find((candidate) => candidate.id === activeFleetVessel?.currentPortId) ?? selectedPort;
  const destinationPort = ports.find(
    (candidate) => candidate.id === activeFleetVessel?.destinationPortId,
  );
  const voyageProgress =
    activeFleetVessel?.voyage && activeFleetVessel.voyage.durationDays > 0
      ? activeFleetVessel.voyage.progressDays / activeFleetVessel.voyage.durationDays
      : 0;
  const shipCoordinate = activeFleetVessel?.voyage
    ? getCoordinateAtProgress(activeFleetVessel.voyage.routeCoordinates, voyageProgress)
    : activePort.coordinates;
  const canStartSailing =
    activeFleetVessel?.status === 'route-planned' && activeFleetVessel.destinationPortId !== null;
  const plannedRoute =
    activeFleetVessel && destinationPort && !activeFleetVessel.voyage
      ? buildWaterwayRoute(activePort, destinationPort, activeFleetVessel.vessel.maxSpeedKmh)
      : null;
  const canBuy = vessel !== null && port !== null && balanceEuros >= selectedVessel.purchasePriceEuros;

  useEffect(() => {
    if (timeScale === 0) {
      return;
    }

    const timer = window.setInterval(() => {
      tick(timeScale);
    }, 1000);

    return () => window.clearInterval(timer);
  }, [tick, timeScale]);

  if (!port) {
    return (
      <main className="onboarding-shell">
        <section className="dialog-panel" aria-labelledby="home-port-title">
          <div className="dialog-copy">
            <span>Stap 1</span>
            <h1 id="home-port-title">Kies je thuishaven</h1>
            <p>
              De thuishaven bepaalt waar je eerste schip ligt, welke dieselprijs geldt en
              vanaf waar je straks routes plant.
            </p>
          </div>

          <div className="port-grid dialog-grid">
            {ports.map((candidate) => (
              <article className="port-card" key={candidate.id}>
                <img src={candidate.image.src} alt={candidate.image.alt} />
                <div className="port-card-content">
                  <div>
                    <span>{candidate.region}</span>
                    <h2>{candidate.name}</h2>
                    <p>{candidate.description}</p>
                  </div>
                  <dl className="vessel-stats">
                    <div>
                      <dt>GPS</dt>
                      <dd>
                        {candidate.coordinates[1].toFixed(4)}, {candidate.coordinates[0].toFixed(4)}
                      </dd>
                    </div>
                    <div>
                      <dt>Dieselprijs</dt>
                      <dd>EUR {candidate.dieselPricePerLiterEuros.toFixed(2)}/l</dd>
                    </div>
                    <div>
                      <dt>Ligkosten</dt>
                      <dd>EUR {candidate.mooringCostPerDayEuros}/dag</dd>
                    </div>
                    <div>
                      <dt>Aan/afmeerkosten</dt>
                      <dd>EUR {candidate.dockingCostEuros}</dd>
                    </div>
                  </dl>
                  <button type="button" onClick={() => setPort(candidate)}>
                    Kies thuishaven
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    );
  }

  if (!vessel) {
    return (
      <main className="onboarding-shell">
        <section className="dialog-panel" aria-labelledby="vessel-title">
          <div className="dialog-copy">
            <span>Stap 2</span>
            <h1 id="vessel-title">Kies je eerste schip</h1>
            <p>
              Je startsaldo is {formatEuros(balanceEuros)}. Na je keuze kun je het schip
              kopen en ga je naar het hoofdscherm.
            </p>
          </div>

          <div className="vessel-grid dialog-grid">
            {vessels.map((candidate) => (
              <article className="vessel-card" key={candidate.id}>
                <img src={candidate.image.src} alt={candidate.image.alt} />
                <div className="vessel-card-content">
                  <div>
                    <span>{candidate.label}</span>
                    <h2>{candidate.name}</h2>
                    <p>{candidate.description}</p>
                  </div>
                  <dl className="vessel-stats">
                    <div>
                      <dt>Vaarsnelheid</dt>
                      <dd>{candidate.maxSpeedKmh} km/u</dd>
                    </div>
                    <div>
                      <dt>Inhoud</dt>
                      <dd>{candidate.capacityLabel}</dd>
                    </div>
                    <div>
                      <dt>Kosten per km</dt>
                      <dd>EUR {candidate.costPerKmEuros}</dd>
                    </div>
                    <div>
                      <dt>Aankoopprijs</dt>
                      <dd>{formatEuros(candidate.purchasePriceEuros)}</dd>
                    </div>
                  </dl>
                  <button
                    disabled={balanceEuros < candidate.purchasePriceEuros}
                    type="button"
                    onClick={() => setVessel(candidate)}
                  >
                    Kies schip
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    );
  }

  if (!activeFleetVessel) {
    return (
      <main className="onboarding-shell">
        <section className="purchase-dialog" aria-labelledby="purchase-title">
          <img src={selectedVessel.image.src} alt={selectedVessel.image.alt} />
          <div className="purchase-copy">
            <span>Bevestigen</span>
            <h1 id="purchase-title">Koop {selectedVessel.name}</h1>
            <p>
              Thuishaven: {selectedPort.name}. Na aankoop wordt dit schip toegevoegd aan
              je vloot en opent het hoofdscherm.
            </p>
            <dl>
              <div>
                <dt>Startsaldo</dt>
                <dd>{formatEuros(balanceEuros)}</dd>
              </div>
              <div>
                <dt>Aankoopprijs</dt>
                <dd>{formatEuros(selectedVessel.purchasePriceEuros)}</dd>
              </div>
              <div>
                <dt>Na aankoop</dt>
                <dd>{formatEuros(balanceEuros - selectedVessel.purchasePriceEuros)}</dd>
              </div>
            </dl>
            <div className="purchase-actions">
              <button type="button" onClick={clearSelectedVessel}>
                Ander schip
              </button>
              <button className="buy-button" disabled={!canBuy} onClick={buySelectedVessel} type="button">
                Koop schip
              </button>
            </div>
          </div>
        </section>
      </main>
    );
  }

  if (activeFleetVessel) {
    return (
      <main className="map-game-shell">
        <header className="top-app-bar" aria-label="Hoofdnavigatie">
          <div className="top-brand">
            <strong>Dutch Waterways</strong>
            <nav aria-label="Modules" className="top-menu">
              <button
                className="top-menu-button"
                data-active={isFleetPanelOpen}
                onClick={() => setFleetPanelOpen(true)}
                type="button"
              >
                Vloot
              </button>
              <span>Routes</span>
              <span>Havens</span>
              <span>Financien</span>
            </nav>
          </div>
          <div className="simulation-controls" aria-label="Simulatie-acties">
            <button data-selected={timeScale === 0} onClick={() => setTimeScale(0)} type="button">
              Pauze
            </button>
            <button data-selected={timeScale === 1} onClick={() => setTimeScale(1)} type="button">
              Normaal 1 dag/sec
            </button>
            <button data-selected={timeScale === 2} onClick={() => setTimeScale(2)} type="button">
              Snel 2 dagen/sec
            </button>
          </div>
          <div className="top-status">
            <span>{activeFleetVessel.name}</span>
            <span>Dag {simulation.day}</span>
            <span>{formatEuros(balanceEuros)}</span>
          </div>
        </header>

        <PortMap
          fullscreen
          port={activePort}
          routeCoordinates={activeFleetVessel.voyage?.routeCoordinates}
          shipCoordinate={shipCoordinate}
          vessel={activeFleetVessel.vessel}
        />

        {isFleetPanelOpen ? (
          <aside className="fleet-panel" aria-label="Vlootbeheer">
            <div className="panel-heading">
              <div>
                <span>Vlootbeheer</span>
                <h1>{activeFleetVessel.name}</h1>
              </div>
              <button
                className="drawer-close"
                onClick={() => setFleetPanelOpen(false)}
                type="button"
                aria-label="Sluit vlootdetails"
              >
                Sluiten
              </button>
            </div>

            <div className="fleet-list">
              {fleet.map((fleetVessel) => (
                <button
                  className="fleet-button"
                  data-selected={fleetVessel.id === activeFleetVessel.id}
                  key={fleetVessel.id}
                  onClick={() => setActiveFleetVessel(fleetVessel.id)}
                  type="button"
                >
                  <span>{fleetVessel.vessel.label}</span>
                  <strong>{fleetVessel.name}</strong>
                </button>
              ))}
            </div>

            <section className="status-panel">
              <h2>{activeFleetVessel.name}</h2>
              <dl>
                <div>
                  <dt>Schiptype</dt>
                  <dd>{activeFleetVessel.vessel.name}</dd>
                </div>
                <div>
                  <dt>Thuishaven</dt>
                  <dd>{ports.find((candidate) => candidate.id === activeFleetVessel.homePortId)?.name}</dd>
                </div>
                <div>
                  <dt>Ligplaats</dt>
                  <dd>{activePort.name}</dd>
                </div>
                <div>
                  <dt>Status</dt>
                  <dd>{getStatusLabel(activeFleetVessel.status)}</dd>
                </div>
                {activeFleetVessel.voyage ? (
                  <>
                    <div>
                      <dt>Afstand</dt>
                      <dd>{activeFleetVessel.voyage.distanceKm} km</dd>
                    </div>
                    <div>
                      <dt>Voortgang</dt>
                      <dd>
                        Dag {activeFleetVessel.voyage.progressDays} /{' '}
                        {activeFleetVessel.voyage.durationDays}
                      </dd>
                    </div>
                  </>
                ) : null}
                <div>
                  <dt>Brandstof</dt>
                  <dd>
                    {Math.round(activeFleetVessel.fuelLiters)} /{' '}
                    {activeFleetVessel.vessel.fuelCapacityLiters} l
                  </dd>
                </div>
                <div>
                  <dt>Bestemming</dt>
                  <dd>{destinationPort?.name ?? 'Geen'}</dd>
                </div>
                {plannedRoute ? (
                  <>
                    <div>
                      <dt>Route</dt>
                      <dd>{plannedRoute.distanceKm} km</dd>
                    </div>
                    <div>
                      <dt>Vaartijd</dt>
                      <dd>{plannedRoute.durationDays} dagen</dd>
                    </div>
                  </>
                ) : null}
              </dl>
            </section>

            <section className="action-panel" aria-label="Scheepsacties">
              <h2>Acties</h2>
              <button type="button" onClick={() => bunkerActiveVessel(activePort)}>
                Bunkeren
              </button>
              <label>
                Route kiezen
                <select
                  disabled={activeFleetVessel.status === 'sailing'}
                  onChange={(event) => planRouteForActiveVessel(event.target.value)}
                  value={activeFleetVessel.destinationPortId ?? ''}
                >
                  <option value="" disabled>
                    Kies bestemming
                  </option>
                  {ports
                    .filter((candidate) => candidate.id !== activePort.id)
                    .map((candidate) => (
                      <option key={candidate.id} value={candidate.id}>
                        {candidate.name}
                      </option>
                    ))}
                </select>
              </label>
              <button disabled={!canStartSailing} type="button" onClick={startSailingActiveVessel}>
                Start varen
              </button>
              <button type="button" onClick={idleActiveVessel}>
                Laat liggen
              </button>
              <button type="button" onClick={() => tick(1)}>
                Simuleer 1 dag
              </button>
            </section>
          </aside>
        ) : null}
      </main>
    );
  }

  return null;
}
