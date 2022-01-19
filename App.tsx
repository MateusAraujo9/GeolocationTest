import React, {useEffect, useRef, useState} from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';

export default function App() {
  const map = useRef();
  const [mapLoc, setMapLoc] = useState({
    center: {
      latitude:37.78825,
      longitude:-122.4324
    },
    zoom:16,
    pitch:0,
    altitude:0,
    heading:0
  });

  function getMyCurrentPosition(){
    Geolocation.getCurrentPosition(
      (info)=>{
        console.log("COORDENADAS: ", info.coords);
      },
      (error)=>{
        console.log("Erro aqui: ", error);
      }
    );
  }

  useEffect(() => {
    Geocoder.init("AQUI_A_CHAVE", {language:'pt-br'});
    getMyCurrentPosition();
  }, []);

  return (
    <View style={{flex: 1}}>
      <MapView
        ref={map}
        style={{flex:1}}
        provider='google'
        camera={mapLoc}
      ></MapView>
    </View>
  );
}