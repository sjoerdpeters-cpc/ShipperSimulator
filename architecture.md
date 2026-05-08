# Architectuur: Shipper Simulator

## 1. Doel

De architectuur ondersteunt een desktop-first binnenvaart simulator voor Nederland die per MVP kan groeien van een lokale mock-ervaring naar een realistischere simulatie met kaartdata, economie, wachttijden en visuele havenervaringen.

## 2. Ontwerpprincipes

- Data-driven: schepen, routes, havens, vracht en events komen uit gestructureerde data.
- Local-first: de game werkt eerst offline met mockdata.
- Los gekoppeld: UI, kaart, route-engine en simulatie-engine hebben eigen verantwoordelijkheden.
- MVP-gericht: elke module mag klein starten, maar moet uitbreidbaar blijven.
- Externe API's zijn optioneel en alleen voor verrijking.

## 3. Mappenstructuur

```text
src/
  app/             App shell en globale compositie
  data/            Mockdata en later data-adapters
  domains/
    cargo/         Vrachtopdrachten
    economy/       Kosten, opbrengsten, brandstof en onderhoud
    events/        Spelgebeurtenissen
    map/           Kaarttypes, lagen en MapLibre-integratie
    port/          Havens en startlocaties
    route/         Route-engine en routeplanning
    simulation/    Simulatietijd en voortgang
    vessel/        Schepen en eigenschappen
  store/           Centrale Zustand game state
  styles/          Globale CSS en design tokens
```

## 4. Domeinmodules

- `map`: beheert kaartconfiguratie, lagen en later MapLibre-componenten.
- `port`: beschrijft havens, GPS-locaties, dieselprijs, ligkosten en aan/afmeerkosten.
- `vessel`: beschrijft scheepstypes, snelheid, capaciteit en status.
- `route`: berekent en valideert routes los van MapLibre.
- `cargo`: levert vrachtopdrachten en contractinformatie.
- `economy`: verwerkt geld, brandstof, onderhoud en planning.
- `simulation`: beheert tijdstappen en dagprogressie.
- `events`: vertaalt simulatie-uitkomsten naar spelgebeurtenissen.

## 5. Dataflow

UI-componenten lezen state uit Zustand en roepen domeinacties aan. Domeinmodules leveren pure berekeningen of data-transformaties. Kaartweergave consumeert route- en mapstate, maar berekent geen routes zelf.

## 6. Game State

De centrale store bevat alleen gedeelde game state: actieve MVP-status, spelerbalans, geselecteerd schip, gekozen haven, vloot, route, simulatietijd, opdrachten en events. Tijdelijke UI-state blijft lokaal in componenten.

## 7. Simulatietijd

De simulatie werkt met discrete ticks. Een tick kan later worden vertaald naar minuten, uren of dagen. MVP 2 introduceert realistische reistijd in dagen; MVP 0 levert alleen de technische basis.

## 8. Kaartlaag

MapLibre GL wordt de kaartlaag. De Nederlandse waterkaart volgt na MVP 1 op basis van mock- of statische data. Echte kaartdata wordt later via adapters toegevoegd.

## 9. Route-engine

De route-engine blijft los van de kaart. Eerst retourneert die routes uit mockdata met vereenvoudigde vaarwegcorridors tussen havens. Later kan deze echte waterwegen, bruggen, sluizen, diepgang en wachttijden meenemen.

## 10. Mobiel/PWA

De webapp is desktop-first, maar houdt rekening met latere PWA/mobile uitbreiding door responsieve layout, beperkte platformkoppeling en local-first dataopslag.

## 11. Roadmap

- MVP 0: technische basis, deployment, architectuur en kwaliteitschecks.
- MVP 1: startschip kiezen met configureerbare scheepsdata en lokale foto's.
- MVP 2: startpunt op haven kiezen en schipicoon tonen op MapLibre-kaart.
- MVP 3: schip kopen, vloot beheren, thuishaven gebruiken en tijd simuleren.
- MVP x: Nederlandse waterkaart.
- MVP x: schip en route kiezen met simulatie in realistisch aantal dagen.
- MVP x: havens en vrachtopdrachten.
- MVP 4: bruggen, sluizen en wachttijden.
- MVP 5: geld, brandstof, onderhoud en planning.
- MVP 6: realistische binnenvaart-economie.
- MVP 7: 3D cockpit, havenbeelden en fotorealistische locaties.
