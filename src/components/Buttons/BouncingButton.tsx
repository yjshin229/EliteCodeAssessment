import React, { useState, useEffect, ReactNode, useCallback } from 'react'
import { SafeAreaView, View, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, ViewStyle } from 'react-native'
import { ButtonComponentProps } from '.'
import { BrandColor, NeutralColor, UniversalColorType } from '../Design/Library';
import { Colors } from '../Design/StyleAsProps/styleProps';
import Animated, { Easing, interpolateColor, runOnJS, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

interface BouncingButtonProps extends ButtonComponentProps {
    children: ReactNode
    defaultColor?: UniversalColorType.Value
    activeColor?: UniversalColorType.Value
    style?: ViewStyle[]
}


const BouncingButton: React.FC<BouncingButtonProps> = ({ children, state = 'enabled', onPress = () => { }, defaultColor, activeColor, style }: BouncingButtonProps) => {


    const sharedColorValue = useSharedValue(0)
    /************
    * functions
    ************/

    const handlePress = useCallback(() => {
        sharedColorValue.value = withTiming(
            1,
            {
                duration: 75,
                easing: Easing.inOut(Easing.ease)
            },
            () => (sharedColorValue.value = withTiming(
                0,
                {
                    duration: 75,
                    easing: Easing.inOut(Easing.ease)
                }, () => runOnJS(onPress)()))
        )
    }, [onPress, sharedColorValue])

    const animatedStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: interpolateColor(
                sharedColorValue.value,
                [0, 1],
                [defaultColor || NeutralColor['neutral-100'], activeColor || BrandColor['brand-blue']]
            )
        }
    })

    return (
        <TouchableWithoutFeedback
            disabled={state === 'disabled'}
            onPress={handlePress}

        >
            <Animated.View style={[{ borderRadius: 12 }, style, animatedStyle]}>{children}</Animated.View>
        </TouchableWithoutFeedback>
    )

}



export default BouncingButton
