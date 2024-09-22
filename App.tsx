/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';

import NavigationStack from './src/navigation/NavigationStack';
import CustomSafeAreaView from './src/components/CustomSafeAreaView';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { EliteCodeNavigationRef } from './src/navigation/NavigationModule';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaProvider>
      <CustomSafeAreaView>
        <GestureHandlerRootView style={{ flex: 1, backgroundColor: 'white' }}>
          <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
          <NavigationContainer ref={EliteCodeNavigationRef}>
            <NavigationStack />
          </NavigationContainer>
        </GestureHandlerRootView>
      </CustomSafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
