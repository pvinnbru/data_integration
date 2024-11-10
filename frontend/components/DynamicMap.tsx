"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";

const Map = dynamic(() => import("./Map"), { ssr: false });

const DynamicMap = ({
  latitude,
  longitude,
  markers,
  zoom,
  className,
}: {
  latitude: number;
  longitude: number;
  markers: {
    latitude: number;
    longitude: number;
    title: string;
    href: string;
  }[];
  zoom?: number;
  className?: string;
}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return <p>Loading map...</p>;

  return (
    <Map
      latitude={latitude}
      longitude={longitude}
      markers={markers}
      zoom={zoom}
      className={className}
    />
  );
};

export default DynamicMap;
