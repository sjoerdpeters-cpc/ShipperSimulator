import { vessels } from '../data/vessels';
import { useGameStore } from '../store/gameStore';

export function App() {
  const vessel = useGameStore((state) => state.vessel);
  const setVessel = useGameStore((state) => state.setVessel);
  const selectedVessel = vessel ?? vessels[0];

  return (
    <main className="app-shell">
      <aside className="sidebar" aria-label="Game status">
        <p className="eyebrow">MVP 1</p>
        <h1>Shipper Simulator</h1>
        <p className="intro">
          Kies je startschip. Elk type heeft eigen snelheid, capaciteit en kosten per
          kilometer.
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

        <p className="selection-note">{selectedVessel.description}</p>
      </aside>

      <section className="workspace vessel-workspace" aria-label="Startschip kiezen">
        <div className="vessel-hero">
          <img src={selectedVessel.image.src} alt={selectedVessel.image.alt} />
          <div>
            <span>{selectedVessel.label}</span>
            <h2>{selectedVessel.name}</h2>
            <p>{selectedVessel.description}</p>
          </div>
        </div>

        <div className="vessel-grid">
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
      </section>
    </main>
  );
}
