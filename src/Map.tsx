import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import { LatLng } from "leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.css";

export const Map = () => {
  const position = new LatLng(35.455043578875, 139.63140391211587);
  const markers = [];
  markers.push(new LatLng(35.455043578875, 139.63140391211587));
  markers.push(new LatLng(35.69563646772557, 139.7820384931972));

  return (
    <>
    <div className="App">
      <MapContainer center={position} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://maps.gsi.go.jp/development/ichiran.html">国土地理院</a>'
          url="https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png"
        />
        
        {markers.map((item) => {
          return (
            <Marker position={item}>
            <Popup>
              ポップアップの中の文言はこんな感じに自由に書けるよ. <br /> 簡単にカスタマイズもできるよ.
            </Popup>
          </Marker>
          );
        })}
      </MapContainer>
    </div>
    </>
  )
}