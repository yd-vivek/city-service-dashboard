import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GoogleMap, Marker, InfoWindow } from "@react-google-maps/api";
import { getServices } from "../store/actions/serviceActions";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const Map = ({ onServiceSelect }) => {
  const services = useSelector((state) => state.services.data);

  return (
    <div>
      <h2 className="text-left">Service Map</h2>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{
          lat: 12.9716,
          lng: 77.5946,
        }}
        zoom={13}
      >
        {services.map((service) => (
          <Marker
            key={service.id}
            position={{ lat: service.lat, lng: service.lng }}
            onClick={() => {
              onServiceSelect(service.id);
            }}
          />
        ))}
      </GoogleMap>
    </div>
  );
};

export default Map;
