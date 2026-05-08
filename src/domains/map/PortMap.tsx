import { useEffect, useRef, useState } from 'react';
import maplibregl from 'maplibre-gl';
import type { Port } from '../port/types';
import type { Vessel } from '../vessel/types';

type PortMapProps = {
  port: Port;
  vessel: Vessel;
  fullscreen?: boolean;
  routeCoordinates?: [longitude: number, latitude: number][];
  shipCoordinate?: [longitude: number, latitude: number];
};

const osmRasterStyle: maplibregl.StyleSpecification = {
  version: 8,
  sources: {
    osm: {
      type: 'raster',
      tiles: ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'],
      tileSize: 256,
      attribution: 'OpenStreetMap contributors',
    },
  },
  layers: [
    {
      id: 'osm',
      type: 'raster',
      source: 'osm',
    },
  ],
};

export function PortMap({
  port,
  vessel,
  fullscreen = false,
  routeCoordinates,
  shipCoordinate,
}: PortMapProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);
  const markerRef = useRef<maplibregl.Marker | null>(null);
  const destinationMarkerRef = useRef<maplibregl.Marker | null>(null);
  const [mapError, setMapError] = useState(false);
  const activeCoordinate = shipCoordinate ?? port.coordinates;
  const reportMapError = () => {
    window.setTimeout(() => setMapError(true), 0);
  };

  useEffect(() => {
    if (!containerRef.current || mapRef.current) {
      return;
    }

    try {
      mapRef.current = new maplibregl.Map({
        container: containerRef.current,
        style: osmRasterStyle,
        center: port.coordinates,
        zoom: 11,
      });

      mapRef.current.addControl(
        new maplibregl.NavigationControl({ showCompass: false }),
        'top-right',
      );
    } catch {
      reportMapError();
    }

    return () => {
      markerRef.current?.remove();
      destinationMarkerRef.current?.remove();
      mapRef.current?.remove();
      mapRef.current = null;
      markerRef.current = null;
      destinationMarkerRef.current = null;
    };
  }, [port.coordinates]);

  useEffect(() => {
    if (!mapRef.current || mapError) {
      return;
    }

    try {
      if (!markerRef.current) {
        const markerElement = document.createElement('div');
        markerElement.className = 'ship-marker';

        markerRef.current = new maplibregl.Marker({ element: markerElement, anchor: 'center' }).addTo(
          mapRef.current,
        );
      }

      const markerElement = markerRef.current.getElement();
      markerElement.dataset.vesselType = vessel.type;
      markerElement.setAttribute('aria-label', `${vessel.name} in ${port.name}`);
      markerElement.title = `${vessel.name} - ${port.name}`;
      markerRef.current.setLngLat(activeCoordinate);

      mapRef.current.flyTo({
        center: activeCoordinate,
        zoom: routeCoordinates?.length ? 8 : 11,
        speed: 0.9,
        essential: true,
      });
    } catch {
      reportMapError();
    }
  }, [activeCoordinate, mapError, port.name, routeCoordinates?.length, vessel.name, vessel.type]);

  useEffect(() => {
    const map = mapRef.current;

    if (!map || mapError) {
      return;
    }

    const syncRoute = () => {
      try {
        if (map.getLayer('active-voyage-route')) {
          map.removeLayer('active-voyage-route');
        }

        if (map.getSource('active-voyage-route')) {
          map.removeSource('active-voyage-route');
        }

        destinationMarkerRef.current?.remove();
        destinationMarkerRef.current = null;

        if (!routeCoordinates || routeCoordinates.length < 2) {
          return;
        }

        map.addSource('active-voyage-route', {
          type: 'geojson',
          data: {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'LineString',
              coordinates: routeCoordinates,
            },
          },
        });

        map.addLayer({
          id: 'active-voyage-route',
          type: 'line',
          source: 'active-voyage-route',
          paint: {
            'line-color': '#176b78',
            'line-width': 5,
            'line-opacity': 0.78,
          },
        });

        const destinationElement = document.createElement('div');
        destinationElement.className = 'destination-marker';
        destinationElement.title = 'Bestemming';
        destinationMarkerRef.current = new maplibregl.Marker({
          element: destinationElement,
          anchor: 'center',
        })
          .setLngLat(routeCoordinates[routeCoordinates.length - 1])
          .addTo(map);

        const bounds = routeCoordinates.reduce(
          (currentBounds, coordinate) => currentBounds.extend(coordinate),
          new maplibregl.LngLatBounds(routeCoordinates[0], routeCoordinates[0]),
        );
        map.fitBounds(bounds, { padding: 90, maxZoom: 9, duration: 700 });
      } catch {
        reportMapError();
      }
    };

    if (map.isStyleLoaded()) {
      syncRoute();
      return;
    }

    map.once('load', syncRoute);
  }, [mapError, routeCoordinates]);

  if (mapError) {
    return (
      <div className={fullscreen ? 'fallback-map fallback-map-fullscreen' : 'fallback-map'}>
        <div className="fallback-waterway" />
        <div className="fallback-route" data-visible={Boolean(routeCoordinates?.length)} />
        <div className="ship-marker fallback-ship-marker" data-vessel-type={vessel.type} />
        <div>
          <span>{vessel.name}</span>
          <strong>{port.name}</strong>
        </div>
      </div>
    );
  }

  return <div className={fullscreen ? 'port-map port-map-fullscreen' : 'port-map'} ref={containerRef} />;
}
