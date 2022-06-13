import 'react-native-gesture-handler';


import { NavigationContainer } from '@react-navigation/native';


import React, { useEffect } from 'react';

import SplashScreen from 'react-native-splash-screen'
import AppNavigator from './src/navigation/AppNavigator';
import Appbar from './src/components/Appbar';

const App = () => {
 
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000)
  },[])
  return (

    <>
    
    <NavigationContainer>
      <Appbar/>
    <AppNavigator />
  </NavigationContainer>
    
    </>
   
  );
};



export default App;
