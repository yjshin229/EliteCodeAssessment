import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StackParamList } from './type';
import { BottomNavigation } from './BottomNavigation';
import HomeDetailScreen from '../screens/home/HomeDetailScreen';

const Stack = createNativeStackNavigator<StackParamList>();
const NavigationStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animationDuration: 200,
        animation: 'slide_from_right',
      }}>
      <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
      <Stack.Screen name="HomeDetailScreen" component={HomeDetailScreen} />
    </Stack.Navigator>
  );
};

export default NavigationStack;
