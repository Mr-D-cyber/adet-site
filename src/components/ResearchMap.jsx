import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Fix for default marker icons
const DefaultIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
})

export default function ResearchMap() {
  const locations = [
    { 
      name: "Kenya", 
      coords: [-1.2921, 36.8219],
      description: "Content moderation research hub"
    },
    { 
      name: "Lebanon", 
      coords: [33.8547, 35.8623],
      description: "Refugee data worker studies"
    },
    { 
      name: "Venezuela", 
      coords: [6.4238, -66.5897],
      description: "Freelance annotation collective"
    },
    { 
      name: "Brazil", 
      coords: [-14.2350, -51.9253],
      description: "AI training data workers"
    },
    { 
      name: "Germany", 
      coords: [51.1657, 10.4515],
      description: "Platform labor regulations"
    }
  ]

  return (
    <div className="h-[500px] w-full rounded-lg overflow-hidden shadow-md border border-gray-200">
      <MapContainer
        center={[10, 20]}
        zoom={2}
        style={{ height: '100%', width: '100%' }}
        className="bg-gray-50"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          className="filter grayscale-[30%]"
        />
        
        {locations.map((location, i) => (
          <Marker 
            key={i} 
            position={location.coords}
            icon={DefaultIcon}
          >
            <Popup className="rounded-md shadow-lg">
              <div className="p-2">
                <h3 className="font-bold text-lg text-gray-800">{location.name}</h3>
                <p className="text-gray-600">{location.description}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}