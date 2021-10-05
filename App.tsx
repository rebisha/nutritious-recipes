import React from 'react';
import Index from './src/component/index';
import NavBar from './src/component/navbar';
import { Fonts } from './src/styles/fonts';
import { View } from 'react-native';

import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

const App = () => {
  let [fontsLoaded] = useFonts(Fonts);

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <>
        <NavBar />
        <Index name='Rebisha' enthusiasmLevel={1} />
      </>
    )
  }
  
}

export default App;

    // "@types/react-native": "0.63.4",