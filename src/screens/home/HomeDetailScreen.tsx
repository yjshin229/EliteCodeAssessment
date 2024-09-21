import React, { useState, useEffect } from 'react'
import { SafeAreaView, View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { LabelL } from '../../components/Design/Typography'

interface Props { }


const HomeDetailScreen = ({ navigation, route }) => {

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
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <LabelL children={'HomeDetail'}></LabelL>
        </SafeAreaView>
    )

}


const styles = StyleSheet.create({
})

export default HomeDetailScreen
