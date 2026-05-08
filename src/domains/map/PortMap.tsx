import { useEffect, useRef } from 'react';
import maplibregl from 'maplibre-gl';
import type { Port } from '../port/types';
import type { Vessel } from '../vessel/types';

type PortMapProps = {
  port: Port;
  vessel: Vessel;
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

export function PortMap({ port, vessel }: PortMapProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);
  const markerRef = useRef<maplibregl.Marker | null>(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) {
      return;
    }

    mapRef.current = new maplibregl.Map({
      container: containerRef.current,
      style: osmRasterStyle,
      center: port.coordinates,
      zoom: 11,
    });

    mapRef.current.addControl(new maplibregl.NavigationControl({ showCompass: false }), 'top-right');

    return () => {
      markerRef.current?.remove();
      mapRef.current?.remove();
      mapRef.current = null;
      markerRef.current = null;
    };
  }, [port.coordinates]);

  useEffect(() => {
    if (!mapRef.current) {
      return;
    }

    markerRef.current?.remove();

    const markerElement = document.createElement('div');
    markerElement.className = 'ship-marker';
    markerElement.setAttribute('aria-label', `${vessel.name} in ${port.name}`);
    markerElement.title = `${vessel.name} - ${port.name}`;

    markerRef.current = new maplibregl.Marker({ element: markerElement, anchor: 'center' })
      .setLngLat(port.coordinates)
      .addTo(mapRef.current);

    mapRef.current.flyTo({
      center: port.coordinates,
      zoom: 11,
      speed: 0.9,
      essential: true,
    });
  }, [port, vessel.name]);

  return <div className="port-map" ref={containerRef} />;
}
