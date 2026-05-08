import { ports } from '../data/ports';
import { vessels } from '../data/vessels';
import { PortMap } from '../domains/map/PortMap';
import { useGameStore } from '../store/gameStore';

export function App() {
  const vessel = useGameStore((state) => state.vessel);
  const port = useGameStore((state) => state.port);
  const setVessel = useGameStore((state) => state.setVessel);
  const setPort = useGameStore((state) => state.setPort);
  const selectedVessel = vessel ?? vessels[0];
  const selectedPort = port ?? ports[0];
  const hasSelectedPort = port !== null;

  return (
    <main className="app-shell">
      <aside className="sidebar" aria-label="Game status">
        <p className="eyebrow">MVP 2</p>
        <h1>Shipper Simulator</h1>
        <p className="intro">
          Kies je startschip en vertrekhaven. Daarna verschijnt je schip op de kaart op
          de gekozen GPS-locatie.
        </p>

        <section className="status-panel" aria-labelledby="status-title">
          <h2 id="status-title">Geselecteerd schip</h2>
          <dl>
            <div>
              <dt>Type</dt>
              <dd>{selectedVessel.label}</dd>
            </div>
            <div>
              <dt>Snelheid</dt>
              <dd>{selectedVessel.maxSpeedKmh} km/u</dd>
            </div>
            <div>
              <dt>Inhoud</dt>
              <dd>{selectedVessel.capacityLabel}</dd>
            </div>
            <div>
              <dt>Kosten</dt>
              <dd>EUR {selectedVessel.costPerKmEuros}/km</dd>
            </div>
          </dl>
        </section>

        <section className="status-panel" aria-labelledby="port-status-title">
          <h2 id="port-status-title">Startpunt</h2>
          <dl>
            <div>
              <dt>Haven</dt>
              <dd>{selectedPort.name}</dd>
            </div>
            <div>
              <dt>Diesel</dt>
              <dd>EUR {selectedPort.dieselPricePerLiterEuros.toFixed(2)}/l</dd>
            </div>
            <div>
              <dt>Liggeld</dt>
              <dd>EUR {selectedPort.mooringCostPerDayEuros}/dag</dd>
            </div>
            <div>
              <dt>Aan/afmeren</dt>
              <dd>EUR {selectedPort.dockingCostEuros}</dd>
            </div>
          </dl>
        </section>

        <p className="selection-note">{selectedVessel.description}</p>
      </aside>

      <section className="workspace vessel-workspace" aria-label="Startschip en haven kiezen">
        <div className="vessel-hero">
          {hasSelectedPort ? (
            <PortMap port={selectedPort} vessel={selectedVessel} />
          ) : (
            <img src={selectedVessel.image.src} alt={selectedVessel.image.alt} />
          )}
          <div className="hero-copy">
            <span>{hasSelectedPort ? 'Gekozen startpunt' : selectedVessel.label}</span>
            <h2>{hasSelectedPort ? selectedPort.name : selectedVessel.name}</h2>
            <p>{hasSelectedPort ? selectedPort.description : selectedVessel.description}</p>
          </div>
        </div>

        <div className="section-heading">
          <div>
            <span>Stap 1</span>
            <h2>Kies een startschip</h2>
          </div>
        </div>

        <div className="vessel-grid vessel-grid-compact">
          {vessels.map((candidate) => {
            const isSelected = candidate.id === selectedVessel.id;

            return (
              <article className="vessel-card" data-selected={isSelected} key={candidate.id}>
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
                  </dl>
                  <button type="button" onClick={() => setVessel(candidate)}>
                    {isSelected ? 'Gekozen' : 'Kies schip'}
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        <div className="section-heading">
          <div>
            <span>Stap 2</span>
            <h2>Kies een startpunt op de haven</h2>
          </div>
        </div>

        <div className="port-grid">
          {ports.map((candidate) => {
            const isSelected = candidate.id === selectedPort.id;

            return (
              <article className="port-card" data-selected={isSelected} key={candidate.id}>
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
                    {isSelected && hasSelectedPort ? 'Op kaart' : 'Start hier'}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
