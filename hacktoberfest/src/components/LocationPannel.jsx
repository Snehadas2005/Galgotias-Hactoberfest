import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix default marker icon issue in React-Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

function LocationPanel({ isDarkMode }) {
  const defaultCoords = [28.3671232, 77.54045993787369]; 
  const [coords, setCoords] = useState(defaultCoords);
  const [location, setLocation] = useState("Galgotias University");
  const [city, setCity] = useState("Greater Noida, Uttar Pradesh, India");

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          setCoords([latitude, longitude]);
          try {
            const res = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
            );
            const data = await res.json();
            setLocation(
              data.address.city ||
              data.address.town ||
              data.address.village ||
              "Unknown location"
            );
            setCity(data.address.country || "Unknown country");
          } catch (err) {
            console.error(err);
          }
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }, []);

  return (
    <div className={`h-96 rounded-2xl overflow-hidden relative cyber-panel ${isDarkMode ? "bg-gray-800" : "bg-gray-200"}`}>
      <MapContainer
        center={coords}
        zoom={16}
        scrollWheelZoom={false}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={coords}>
          <Popup>
            {location}, {city}
          </Popup>
        </Marker>
      </MapContainer>

      {/* Optional pixelated astronaut overlay */}
      <div className="absolute top-4 left-4 z-10">
        <div className="pixelated-astronaut">
          <div className="astronaut-helmet"></div>
          <div className="astronaut-body"></div>
          <div className="astronaut-arms"></div>
        </div>
      </div>
    </div>
  );
}

export default LocationPanel;
