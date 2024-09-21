import React, { useState, useEffect } from 'react'
import { BodyM, HeadlineL, HeadlineS, LabelM, TitleXL } from '../../components/Design/Typography'
import IconButton from '../../components/Buttons/IconButton'
import { Col, Row, Span } from '../../components/Design/StyleAsProps'
import WelcomeHeader from './WelcomeHeader'
import { Text } from 'react-native'
import ChallengeContent from '../../components/Content/ChallengeContent'

const HomeScreen = ({ navigation, route }) => {

    /************
    * functions
    ************/

    /*********
    * render
    *********/

    const renderExploreHeader = () => {
        return (
            <Row pv10 alignCenter justifyBetween mt12>
                <TitleXL>Explore</TitleXL>
                <BodyM>See More</BodyM>
            </Row>
        )
    }

    const img = require("../../assets/images/User_01a.png")

    /***********
    * render()
    ***********/

    return (
        <Col flex ph18 pt12 bgNeutral100>
            <WelcomeHeader name='John Doe' profilePic={img} />
            <ChallengeContent text={`Challenge \nof the Day`} />
            {renderExploreHeader()}
        </Col>
    )

}


export default HomeScreen
