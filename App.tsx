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
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


const App = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, [])

  return (
    <SafeAreaProvider>
      <CustomSafeAreaView style={{ flex: 1 }}>
        <GestureHandlerRootView style={{ flex: 1, backgroundColor: 'transparent' }} >
          <StatusBar
            barStyle={'dark-content'}
            backgroundColor={"white"}
          />
          <NavigationContainer>
            <NavigationBar />
          </NavigationContainer>
        </GestureHandlerRootView>
      </CustomSafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
