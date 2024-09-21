import React, { useState, useEffect } from 'react'
import { BodyM, HeadlineL, LabelM } from '../../components/Design/Typography'
import IconButton from '../../components/Buttons/IconButton'
import { Col, Span } from '../../components/Design/StyleAsProps'
import WelcomeHeader from './WelcomeHeader'
import { Text } from 'react-native'
import ChallengeContent from '../../components/Content/ChallengeContent'

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

    const img = require("../../assets/images/User_01a.png")

    /***********
    * render()
    ***********/

    return (
        <Col flex ph18 pt12 bgNeutral100>
            <WelcomeHeader name='John Doe' profilePic={img} />
            <ChallengeContent text={`Challenge \nof the Day`} />
        </Col>
    )

}


export default HomeScreen
