import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  GoogleMap,
  StandaloneSearchBox,
  LoadScript,
  TrafficLayer,
} from "@react-google-maps/api";

const lib = ["places"];

function GoogleMapTraffic() {
  const [center, setCenter] = useState(null); // Initialize as null to avoid defaulting to a fixed location
  const [searchBox, setSearchBox] = useState(null);
  const [map, setMap] = useState(null);

  const navigate = useNavigate(); // Ensure that you have this line if using React Router

  // Get user's current location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCenter({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => {
        console.error("Error fetching geolocation:", error);
      }
    );
  }, []);

  const onPlacesChanged = () => {
    const [place] = searchBox.getPlaces();
    if (place) {
      setCenter({
        lat: place?.geometry?.location?.lat(),
        lng: place?.geometry?.location?.lng(),
      });
    }
  };

  const onSBLoad = (ref) => {
    setSearchBox(ref);
  };

  const onMapLoad = (map) => {
    setMap(map);
  };

  useEffect(() => {
    if (map && center) {
      const marker = new window.google.maps.Marker({
        position: center,
        map,
      });
    }
  }, [map, center]);

  return (
    <LoadScript
      googleMapsApiKey="API"
      libraries={lib}
    >
      {center ? (
        <GoogleMap
          mapContainerStyle={{ height: "100%", width: "100%" }}
          center={center}
          zoom={12}
          onLoad={onMapLoad}
          options={{
            mapTypeControl: false,
            draggable: true, // Enable map dragging
          }}
        >
          <StandaloneSearchBox
            onPlacesChanged={onPlacesChanged}
            onLoad={onSBLoad}
          >
            <div
              style={{ position: "absolute" }}
              className="form-groups no-border-break m-3"
            >
              {/* Input field can be added here */}
            </div>
          </StandaloneSearchBox>
          <TrafficLayer />
        </GoogleMap>
      ) : (
        <div>Loading map...</div> // Show a loading message while fetching location
      )}
    </LoadScript>
  );
}

export default GoogleMapTraffic;
