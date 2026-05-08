* Deploy naar github: ShipperSimulator
* Doe altijd een UX-UI en speelbaarheid check
* Deploy altijd naar vercel - live

Aanvullende deployment acties:

* GitHub is de bron-repository: https://github.com/sjoerdpeters-cpc/ShipperSimulator
* Vercel project: shipper-simulator
* Live URL: https://shipper-simulator.vercel.app
* Pushes naar `main` moeten via de Vercel GitHub-koppeling automatisch naar productie deployen.
* Voor elke oplevering lokaal draaien:
  * `npm run lint`
  * `npm run build`
* Na deploy de live URL controleren op HTTP 200 en visueel/UX controleren.

