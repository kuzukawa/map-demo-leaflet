import { MapContainer, TileLayer } from "react-leaflet"
import { LatLng } from "leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.css";

export const Map = () => {
  const position = new LatLng(35.68, 139.76);
  return (
    <>
    <div className="App">
      <MapContainer center={position} zoom={15}>
        <TileLayer
          attribution='&copy; <a href="https://maps.gsi.go.jp/development/ichiran.html">国土地理院</a>'
          url="https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
    </>
  )
}