import React from 'react';
import { Container as MapDiv, NaverMap, Marker, useNavermaps } from 'react-naver-maps';

const StoreMap = ({ latitude, longitude }) => {
  const navermaps = useNavermaps();

  return (
    <MapDiv style={{ height: 400 }}>
      <NaverMap defaultCenter={new navermaps.LatLng(latitude, longitude)} defaultZoom={20}>
        <Marker defaultPosition={{ lat: latitude, lng: longitude }} />
      </NaverMap>
    </MapDiv>
  );
};

export default StoreMap;