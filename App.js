import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native';
import * as Font from 'expo-font'
import Home from './screens/home';
import AppLoading from 'expo-app-loading';  
import About from './screens/about';
import ReviewDetails from './screens/reviewDetails';
import  Navigator  from './routes/homeStack';

const getFonts = () => Font.loadAsync({
  'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
  'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
});

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <Navigator />
      // <About />
      // <ReviewDetails />
    );
  } else {
    return (
      <AppLoading
          startAsync={getFonts}
          onFinish={() => setFontsLoaded( true )}
          onError={console.warn}
        />
    );
  }
}
