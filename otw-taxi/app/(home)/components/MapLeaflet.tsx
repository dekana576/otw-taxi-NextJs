"use client";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";

// FIX MARKER ICON
delete (L.Icon.Default.prototype as any)._getIconUrl;
const pickupIcon = L.icon({
  iconUrl: "https://maps.google.com/mapfiles/ms/icons/green-dot.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
});

const destinationIcon = L.icon({
  iconUrl: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
});

interface Props {
  lat: number;
  lng: number;
  pickup: L.LatLng | null;
  destination: L.LatLng | null;
  setPickup: (latlng: L.LatLng) => void;
  setDestination: (latlng: L.LatLng) => void;
}

function MapClickHandler({
  pickup,
  destination,
  setPickup,
  setDestination,
}: any) {
  useMapEvents({
    click(e) {
      if (!pickup) {
        setPickup(e.latlng);
      } else if (!destination) {
        setDestination(e.latlng);
      } else {
        // reset kalau dua sudah terisi
        setPickup(e.latlng);
        setDestination(null);
      }
    },
  });

  return null;
}

export default function UserMap({
  lat,
  lng,
  pickup,
  destination,
  setPickup,
  setDestination,
}: Props) {
  return (
    <MapContainer
      center={[lat, lng]}
      zoom={15}
      style={{ height: "300px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />

      <MapClickHandler
        pickup={pickup}
        destination={destination}
        setPickup={setPickup}
        setDestination={setDestination}
      />

      {pickup && (
        <Marker position={pickup} icon={pickupIcon}>
    <Popup>Pickup Location</Popup>
  </Marker>
      )}

      {destination && (
        <Marker position={destination} icon={destinationIcon}>
    <Popup>Destination Location</Popup>
  </Marker>
      )}
    </MapContainer>
  );
}