// NaverMap.jsx
import React from 'react';
import { Container as MapDiv, NaverMap, Marker, useNavermaps } from 'react-naver-maps'


const MapComponent = ({ latitude, longitude }) => {
    const navermaps = useNavermaps();
  return (
    <NaverMap
      mapDivId="map"
      className="w-full h-96"
      defaultCenter={{ lat: latitude, lng: longitude }}
      defaultZoom={16}
    >
      <Marker
        position={{ lat: latitude, lng: longitude }}
        animation={2}
      />
    </NaverMap>
  );
};

const Map = ({ latitude, longitude }) => {
  return (
    <RenderAfterNavermapsLoaded
      ncpClientId="YOUR_NCP_CLIENT_ID"
      error={<p>Maps Load Error</p>}
      loading={<p>Maps Loading...</p>}
    >
      <MapComponent latitude={latitude} longitude={longitude} />
    </RenderAfterNavermapsLoaded>
  );
};

export default Map;