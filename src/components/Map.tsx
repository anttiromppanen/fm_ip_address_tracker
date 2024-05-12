import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

interface Props {
  lat: number;
  lng: number;
}

function Map({ lat, lng }: Props) {
  return (
    <div className="relative z-0">
      <MapContainer center={[lat, lng]} zoom={20} scrollWheelZoom>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat, lng]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
