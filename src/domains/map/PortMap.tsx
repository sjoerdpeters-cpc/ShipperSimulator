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

const darkMapStyle: maplibregl.StyleSpecification = {
  version: 8,
  sources: {
    carto: {
      type: 'raster',
      tiles: [
        'https://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png',
        'https://b.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png',
        'https://c.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png',
      ],
      tileSize: 512,
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors © <a href="https://carto.com/attributions">CARTO</a>',
      maxzoom: 20,
    },
  },
  layers: [{ id: 'carto', type: 'raster', source: 'carto' }],
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
  const resizeObserverRef = useRef<ResizeObserver | null>(null);
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
        style: darkMapStyle,
        center: port.coordinates,
        zoom: 11,
      });

      mapRef.current.addControl(
        new maplibregl.NavigationControl({ showCompass: false }),
        'top-right',
      );
      mapRef.current.on('error', reportMapError);
      mapRef.current.once('load', () => {
        mapRef.current?.resize();
      });
      window.requestAnimationFrame(() => {
        mapRef.current?.resize();
      });
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
      resizeObserverRef.current?.disconnect();
      resizeObserverRef.current = null;
    };
  }, [port.coordinates]);

  useEffect(() => {
    const map = mapRef.current;

    if (!map || mapError) {
      return;
    }

    const syncMarker = () => {
      if (mapError) {
        return;
      }

      if (!markerRef.current) {
        const markerElement = document.createElement('div');
        markerElement.className = 'ship-marker';

        markerRef.current = new maplibregl.Marker({ element: markerElement, anchor: 'center' }).addTo(map);
      }

      const markerElement = markerRef.current.getElement();
      markerElement.dataset.vesselType = vessel.type;
      markerElement.setAttribute('aria-label', `${vessel.name} in ${port.name}`);
      markerElement.title = `${vessel.name} - ${port.name}`;
      markerRef.current.setLngLat(activeCoordinate);

      map.flyTo({
        center: activeCoordinate,
        zoom: routeCoordinates?.length ? 8 : 11,
        speed: 0.9,
        essential: true,
      });
    };

    if (map.isStyleLoaded()) {
      syncMarker();
      return;
    }

    map.once('load', syncMarker);
  }, [activeCoordinate, mapError, port.name, routeCoordinates?.length, vessel.name, vessel.type]);

  useEffect(() => {
    const map = mapRef.current;

    if (!map || mapError) {
      return;
    }

    const syncRoute = () => {
      if (mapError) {
        return;
      }

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
          'line-color': '#1eabd0',
          'line-width': 2,
          'line-opacity': 0.9,
          'line-dasharray': [5, 4],
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
    };

    if (map.isStyleLoaded()) {
      syncRoute();
      return;
    }

    map.once('load', syncRoute);
  }, [mapError, routeCoordinates]);

  useEffect(() => {
    const map = mapRef.current;

    if (!map || !containerRef.current || mapError) {
      return;
    }

    const supportsResizeObserver = typeof ResizeObserver !== 'undefined';

    if (supportsResizeObserver) {
      resizeObserverRef.current?.disconnect();
      resizeObserverRef.current = new ResizeObserver(() => {
        map.resize();
      });
      resizeObserverRef.current.observe(containerRef.current);
      return () => {
        resizeObserverRef.current?.disconnect();
        resizeObserverRef.current = null;
      };
    }

    const handleResize = () => map.resize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [mapError]);

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
