# Shipper Simulator

Desktop-first webapp voor een Nederlandse binnenvaart simulator.

## MVP 0

MVP 0 zet de technische basis neer:

- React + TypeScript + Vite
- MapLibre GL als kaartbibliotheek
- Zustand voor centrale game state
- Modulaire domeinstructuur
- Offline/local-first uitgangspunt met mockdata
- Simulatie-engine los van UI en kaart
- Route-engine los van MapView
- Build-, lint- en deployconfiguratie

## MVP 1

MVP 1 voegt de keuze voor een startschip toe:

- Containerschip
- Tankschip
- Drogeladingschip / vrachtschip
- Duwboot

De scheepsdata staat configureerbaar in `src/data/vessels.ts`. Lokale foto's staan in `public/assets/vessels/`.

## MVP 2

MVP 2 voegt de keuze voor een starthaven toe:

- Rotterdam
- Amsterdam
- Moerdijk
- Vlissingen/Terneuzen
- Eemshaven
- Nijmegen
- Tiel
- Venlo
- Utrecht
- Deventer/Zutphen
- Arnhem
- Maastricht

De havendata staat configureerbaar in `src/data/ports.ts`. Lokale havenfoto's staan in `public/assets/ports/`. Na het kiezen van een haven toont de MapLibre-kaart het gekozen schipicoon op de GPS-locatie van die haven.

## MVP 3

MVP 3 voegt de eerste vloot- en tijdsimulatie toe:

- Startsaldo: `EUR 250.000`
- Schip kopen met aankoopprijs per scheepstype
- Gekocht schip wordt toegevoegd aan de vloot
- Gekozen haven wordt thuishaven
- Na aankoop wordt de kaart beeldvullend
- Vlootacties: bunkeren, route kiezen en laten liggen
- Tijdcontrols: pauze, 1 dag/sec en 2 dagen/sec

## Lokale ontwikkeling

```bash
npm install
npm run dev
```

## Kwaliteitschecks

```bash
npm run lint
npm run build
```

## Deployment

GitHub remote:

```bash
git remote add origin https://github.com/sjoerdpeters-cpc/ShipperSimulator.git
git push -u origin main
```

Vercel production:

- Live URL: https://shipper-simulator.vercel.app
- Project: `shipper-simulator`
- GitHub repository: https://github.com/sjoerdpeters-cpc/ShipperSimulator

Vercel settings:

- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm install`

De Vercel-config staat in `vercel.json`. Het project is gekoppeld aan GitHub; pushes naar `main` horen automatisch een production deploy naar Vercel te starten.

Handmatige productie-deploy indien nodig:

```bash
vercel deploy --prod --yes
```
