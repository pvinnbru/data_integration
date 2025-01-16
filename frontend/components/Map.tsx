"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import React, { useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";

// Fix Leaflet's default icon issues in Next.js
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const customIcon = new L.Icon({
  iconUrl: "/diving.svg",
  iconSize: [50, 50],
  iconAnchor: [25, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

interface MapProps {
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
}

const MarkerClusterGroup = dynamic(() => import("react-leaflet-cluster"), {
  ssr: false,
});

const Map = ({ latitude, longitude, markers, zoom, className }: MapProps) => {
  useEffect(() => {
    // Ensure window is defined and available for Leaflet

    if (typeof window !== "undefined") {
      L.map;
    }
  }, []);

  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={zoom || 13}
      className={cn("h-96 w-full z-[5]", className)}
    >
      {/* Link for different tilings: https://leaflet-extras.github.io/leaflet-providers/preview/index.html */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <MarkerClusterGroup chunkedloading>
        {markers.map((marker, index) => (
          <Marker
            key={index}
            position={[marker.latitude, marker.longitude]}
            icon={customIcon}
          >
            <Popup>
              <Link href={marker.href} className="font-semibold">
                {marker.title}
              </Link>
            </Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
};

export default Map;
