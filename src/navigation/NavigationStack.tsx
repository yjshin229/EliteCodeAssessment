import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { useState, useEffect } from 'react'
import { SafeAreaView, View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { StackParamList } from './type'
import { BottomTabNavigationBar } from './BottomTabNavigationBar'

interface Props { }

const Stack = createNativeStackNavigator<StackParamList>()
const NavigationStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                animationDuration: 200,
                animation: 'slide_from_right'
            }}>
            <Stack.Screen name='BottomTabNavigationBar' component={BottomTabNavigationBar} />
        </Stack.Navigator>
    )
}


const styles = StyleSheet.create({
})

export default NavigationStack
