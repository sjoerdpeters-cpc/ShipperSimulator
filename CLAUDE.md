# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start Vite dev server
npm run build      # TypeScript check + production build (dist/)
npm run lint       # ESLint
npm run preview    # Preview production build locally
```

CI runs on every push/PR to `main`: lint → build (Node 24). Vercel auto-deploys `main` from `dist/`.

## Architecture

**Shipper Simulator** is a browser-based Dutch inland waterways (binnenvaart) shipping game. Players manage a fleet of vessels, plan routes between 12 Dutch ports, and simulate sailing across the waterway network. All data is bundled locally — no backend or API.

Stack: React 18 + TypeScript, Vite, Zustand (state), MapLibre GL (map), custom CSS design tokens.

### State: `src/store/gameStore.ts`

Single Zustand store is the source of truth for all game state:
- `vessel` / `port` — selections during 3-stage onboarding
- `balanceEuros` — starts at EUR 250,000
- `fleet[]` — array of `FleetVessel` objects (purchases)
- `activeFleetVesselId` — currently selected vessel
- `simulation` — day counter + elapsed hours
- `timeScale` — 0 (paused) / 1 / 2 days per second

### Game Flow

**Onboarding (App.tsx):** Three conditional screens rendered in sequence:
1. Choose home port → 2. Choose vessel type → 3. Confirm purchase (deducts balance, creates `FleetVessel` with UUID, enters main game)

**Main Loop:** `tick()` fires every 1 second, advancing simulation by `timeScale` days. Voyage progress is tracked as `progressDays / durationDays`; the ship icon interpolates along route coordinates. On arrival, the vessel goes idle at the destination port.

### Domain Modules: `src/domains/`

| Domain | Status | Purpose |
|---|---|---|
| `map/` | Active | MapLibre GL wrapper (`PortMap.tsx`) |
| `route/` | Active | Route planning and progress calculation |
| `simulation/` | Active | Day/hour tick advancement |
| `vessel/`, `port/` | Active | Type definitions |
| `cargo/`, `economy/`, `events/` | Stubbed | Future revenue, pricing, events |

**Route Engine (`waterwayRoutes.ts`):** Hub-and-spoke network with Tiel as the central hub. Distance uses the Haversine formula; duration formula is `max(2, ceil(distanceKm / (min(vessel.maxSpeedKmh, 12) × 0.72 × 9)) + 1)` days (9 sailing hours/day, 1 day port delay). Progress is linear interpolation along pre-defined waypoint coordinates.

**Route Planning (`routeEngine.ts`):** Currently mocked — constructs a `RoutePlan` by combining hub waypoints; replace with real pathfinding when the waterway graph is built.

### Data: `src/data/`

Plain TypeScript arrays — no database:
- `ports.ts` — 12 Dutch ports with GPS coords, diesel price, mooring/docking costs, region
- `vessels.ts` — 4 vessel types (container, tanker, dry-cargo, push-boat) with speed, capacity, cost per km, purchase price, fuel capacity

Fuel estimation: `distanceKm × (costPerKmEuros / 10)` liters. Fuel is deducted from the `FleetVessel` object at sail start.

### UI: `src/app/App.tsx`

Single file (~420 lines) manages all screens. Main game screen:
- **Top bar:** brand, time controls (Pause/1×/2×), status (name/day/balance)
- **Map:** `PortMap` component — OSM raster tiles, ship marker (`data-vessel-type` for CSS), destination flag, GeoJSON route line, dynamic zoom (8 for voyage, 11 for port)
- **Fleet panel (sidebar):** vessel list, stats, action buttons (Bunker, Plan Route, Sail, Idle), route/fuel details

`PortMap.tsx` includes a CSS fallback if WebGL is unavailable and uses `ResizeObserver` for responsive map resizing.

### Styling: `src/styles/global.css`

CSS-first with design tokens (`--primary`, `--accent`, `--surface`, etc.). All UI text and port names are in Dutch.

## Key Conventions

- Coordinates are `[longitude, latitude]` tuples (GeoJSON standard).
- Vessel auto-naming: `{VesselName} {fleetIndex + 1}` (e.g., "Rijn Container 1").
- Fleet updates use Zustand spread-immutability patterns.
- New domains go in `src/domains/{name}/` — add types first, then logic, then expose via store actions.
- Port imagery lives in `public/assets/ports/`.
