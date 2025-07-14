"use client"

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

import iconUrlImport from 'leaflet/dist/images/marker-icon.png'
import iconShadowImport from 'leaflet/dist/images/marker-shadow.png'

type MapClientProps = {
  latitude: number
  longitude: number
}

const markerIcon = new L.Icon({
  iconUrl: iconUrlImport.src,
  iconRetinaUrl: iconUrlImport.src,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  shadowUrl: iconShadowImport.src,
  shadowSize: [41, 41],
  shadowAnchor: [12, 41],
})

export default function MapClient({ latitude, longitude }: MapClientProps) {
  const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`
  const wazeLink = `https://waze.com/ul?ll=${latitude},${longitude}&navigate=yes`

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <MapContainer
        center={[latitude, longitude]}
        zoom={15}
        scrollWheelZoom={false}
        style={{ width: '100%', height: '100%', borderRadius: '0.5rem' }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[latitude, longitude]} icon={markerIcon}>
          <Popup>
            <div className="flex flex-col gap-1">
              <strong>LAVC 2025 - Lugar del evento</strong>
              <a href={googleMapsLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                Abrir en Google Maps
              </a>
              <a href={wazeLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                Abrir en Waze
              </a>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}
