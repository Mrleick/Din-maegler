import React from "react";
import GoogleMapReact from "google-map-react";
import GooglePin from "./GooglePin";

export default function SimpleMap() {
  const defaultProps = {
    center: {
      lat: 55.641085260181576,
      lng: 12.080318226980951,
    },
    zoom: 17,
  };

  return (
    // Important! Always set the container height explicitly
    <div className="h-[500px]" style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyD3u81FW1jiZZM0cegizo3fN4M5pRHK21Y" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <GooglePin lat={55.641085260181576} lng={12.080318226980951} />
      </GoogleMapReact>
    </div>
  );
}
