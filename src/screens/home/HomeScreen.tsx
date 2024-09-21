import React, { useState, useEffect } from 'react'
import { SafeAreaView, View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { LabelM } from '../../components/Design/Typography'
import BouncingButton from '../../components/Buttons/BouncingButton'
import IconButton from '../../components/Buttons/IconButton'
import CustomSafeAreaView from '../../components/CustomSafeAreaView'

interface Props { }


const HomeScreen = ({ navigation, route }) => {

    /*********
    * recoil
    *********/

    /**************************
    * props, navigation prams
    **************************/

    /*************
    * state, ref
    *************/

    const [isRendering, setIsRendering] = useState<boolean>(true)

    /**************
    * life cycles
    **************/

    useEffect(() => {
        // ComponentDidMount

        // setIsRendering(false)
        return () => {
            // ComponentWillUnmount
        }
    }, [])

    /************
    * functions
    ************/

    /*********
    * render
    *********/

    // if (isRendering === true) {
    // return null
    // }

    /***********
    * render()
    ***********/

    return (
        <CustomSafeAreaView hasBottomSpace>
            <LabelM>This is a Home screen</LabelM>
            <IconButton size='small' text={{ value: 'Hello' }} icon='cog' />
        </CustomSafeAreaView>
    )

}


const styles = StyleSheet.create({
})

export default HomeScreen
