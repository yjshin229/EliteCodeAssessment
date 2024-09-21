/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { GestureHandlerRootView } from 'react-native-gesture-handler'
import React, { useEffect } from 'react';
import {

  StatusBar,
  StyleSheet,

} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';


import { Row, Span } from './src/components/Design/StyleAsProps';
import { NavigationBar } from './src/navigation/NavigationBar';
import NavigationStack from './src/navigation/NavigationStack';
import CustomSafeAreaView from './src/components/CustomSafeAreaView';


const App = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, [])

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>


      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={"white"}
      />
      <NavigationContainer
      >
        <NavigationBar />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;
