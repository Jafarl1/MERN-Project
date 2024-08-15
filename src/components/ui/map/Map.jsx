import { MapContainer, TileLayer } from "react-leaflet";
import styles from "./map.module.css";

function Map({ position }) {
  const center = [position.lat, position.lng];

  return (
    <div className={styles.map}>
      <MapContainer center={center} zoom={10}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </MapContainer>
    </div>
  );
}

export default Map;
  