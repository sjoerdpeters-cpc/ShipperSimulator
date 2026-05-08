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
