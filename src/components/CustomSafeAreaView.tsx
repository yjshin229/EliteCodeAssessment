import React, { useState, useEffect, ReactNode } from 'react'
import { SafeAreaView, View, StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native'
import { NeutralColor, UniversalColorType } from './Design/Library'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

interface Props {
    children: ReactNode
    style?: ViewStyle
    hasBottomSpace?: Boolean
    backgroundColor?: keyof typeof NeutralColor
}

const CustomSafeAreaView = ({ children, style, hasBottomSpace, backgroundColor }: Props) => {

    const { top, bottom } = useSafeAreaInsets()


    return (
        <View style={[{
            flex: 1,
            backgroundColor: backgroundColor,
            paddingBottom: hasBottomSpace ? bottom : 0,
            paddingTop: top
        }, style]}>
            {children}
        </View>
    )

}



export default CustomSafeAreaView
