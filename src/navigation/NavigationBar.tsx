import React from 'react'
import { Dimensions, TouchableOpacity } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/home/HomeScreen'
import SettingsScreen from '../screens/settings/SettingsScreen'
import { BrandColor, NeutralColor } from '../components/Design/Library'
import { deviceInfo } from '../utilities/deviceInfo'
import { Row } from '../components/Design/StyleAsProps'
import LibraryScreen from '../screens/saved/LibraryScreen';
import { LabelS } from '../components/Design/Typography';

const BottomTab = createBottomTabNavigator()

export const NavigationBar = () => {
    return (
        <BottomTab.Navigator
            tabBar={props => <BottomTabBar {...props} />}
            screenOptions={{ headerShown: false }}>
            <BottomTab.Screen
                name="Home"
                component={HomeScreen} />
            <BottomTab.Screen
                name="Library"
                component={LibraryScreen} />
            <BottomTab.Screen
                name="Settings"
                component={SettingsScreen} />
        </BottomTab.Navigator>
    )
}

const BottomTabBar = ({ state, descriptors, navigation }) => {
    return (
        <Row h64 bgNeutral100 alignCenter ph16 mb={deviceInfo.isIphoneX ? 22 : 0} borderTW1 borderTColor={NeutralColor['neutral-90']}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];

                const isFocused = state.index === index
                const hasText = 360 <= Dimensions.get('window').width

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    })

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate({ name: route.name, merge: true })
                    }
                }

                return (
                    <TouchableOpacity
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        key={route.key}
                        onPress={onPress}
                        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
                    >
                        <BottomTabBarIcon focused={isFocused} name={route.name} />
                        {hasText && <LabelS>{route.name}</LabelS>}
                    </TouchableOpacity>
                )
            })}
        </Row>
    )
}

const BottomTabBarIcon = ({ focused, name }: { focused: boolean; name: string }) => {
    const color = focused ? BrandColor['brand-orange'] : NeutralColor['neutral-0']

    switch (name) {
        case "Home":
            return <Ionicons name={focused ? "home" : 'home-outline'} size={24} color={color} />
        case "Library":
            return <Ionicons name={focused ? "bookmark" : 'bookmark-outline'} size={24} color={color} />
        case "Settings":
            return <Ionicons name={focused ? 'settings' : 'settings-outline'} size={24} color={color} />
        default:
            return null
    }
}

