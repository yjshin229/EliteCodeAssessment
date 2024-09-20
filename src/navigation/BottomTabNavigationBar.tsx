import React, { useState, useEffect } from 'react'
import { Dimensions, View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from 'react-native-elements'

import HomeScreen from '../screens/home/HomeScreen'
import SavedScreen from '../screens/saved/SavedScreen'
import SettingsScreen from '../screens/settings/SettingsScreen'
import { Row } from '../components/Design/StyleAsProps/Row'
import { BrandColor, NeutralColor } from '../components/Design/Library'
import { Colors } from '../components/Design/StyleAsProps/styleProps'
import { deviceInfo } from '../utilities/deviceInfo'
import { LabelS } from '../components/Design/Typography'

interface Props { }

const BottomTab = createBottomTabNavigator()

export const BottomTabNavigationBar = () => {

    return (
        <BottomTab.Navigator tabBar={props => <GlobalTabBar {...props} />} screenOptions={{ headerShown: false }}>
            <BottomTab.Screen
                name={"Home"}
                component={HomeScreen} />
            <BottomTab.Screen
                name={"Saved"}
                component={SavedScreen} />
            <BottomTab.Screen
                name={"Settings"}
                component={SettingsScreen} />
        </BottomTab.Navigator>
    )

}

const GlobalTabBarIcon = (props: { focused: boolean; name: React.ComponentProps<any>['name'] }) => {
    switch (props.name) {
        case "Home":
            if (props.focused) return <Icon name='home-fill' color={BrandColor['brand-orange']} />

            else return <Icon name='home' color={NeutralColor['neutral-0']} />
        case "Saved":
            if (props.focused) return <Icon name='bookmark-fill' color={BrandColor['brand-orange']} />
            else return <Icon name='bookmark' color={NeutralColor['neutral-0']} />
        case "Settings":
            if (props.focused) return <Icon name='home-fill' color={BrandColor['brand-orange']} />
            return <Icon name='bookmark' color={NeutralColor['neutral-0']} />
        default:
            return null
    }
}
const GlobalTabBar = ({ state, navigation }) => {
    return (
        <>
            <Row h64 bgNeutral100 alignCenter ph16 mb={deviceInfo.isIphoneX ? 22 : 0} borderTW1 borderTColor={NeutralColor['neutral-90']}>
                {state.routes.map((route, index) => {

                    const isFocused = state.index === index
                    const hasText = 360 <= Dimensions.get('window').width

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        })

                        if (!isFocused && !event.defaultPrevented) {
                            // The `merge: true` option makes sure that the params inside the tab screen are preserved
                            navigation.navigate({ name: route.name, merge: true })
                        }
                    }


                    return (
                        <TouchableOpacity
                            onPress={onPress}
                            accessibilityState={isFocused ? { selected: true } : {}}
                            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <GlobalTabBarIcon focused={isFocused} name={route.name} />
                            {hasText && <LabelS>{{ value: route?.name }}</LabelS>}
                        </TouchableOpacity>
                    )
                })}
            </Row>
        </>
    )
}
