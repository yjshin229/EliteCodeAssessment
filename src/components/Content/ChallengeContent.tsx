import React, { useState, useEffect } from 'react'
import { SafeAreaView, View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import { Col, Row } from '../Design/StyleAsProps'
import { TitleXL } from '../Design/Typography'
import IconButton from '../Buttons/IconButton'
import { deviceInfo } from '../../utilities/deviceInfo'

interface Props {
    text: string
}


const ChallengeContent = ({ text }: Props) => {

    /************
    * functions
    ************/

    /*********
    * render
    *********/

    const renderText = () => {
        return (
            <Row w={"50%"}>
                <TitleXL numberOfLines={2}>{text}</TitleXL>
            </Row>
        )
    }

    const renderButton = () => {
        return (
            <IconButton backgroundColor='#000000' size='small' text={{ value: "Enter", color: '#ffffff' }} width={100} />
        )
    }

    const renderContent = () => {
        return (
            <Col pv25 ph30 zIndex1 absolute top0 justifyBetween w={'100%'} h={'100%'}>
                {renderText()}
                {renderButton()}
            </Col >
        )
    }

    const renderShadow = () => {
        if (deviceInfo.OS === "android") {
            return (
                {
                    elevation: 3,
                    shadowColor: "rgba(0,0,0,0.25)"
                }
            )
        } else {
            return (
                {
                    shadowColor: "rgba(0,0,0,0)",
                    shadowOffset: { height: 2, width: 2 },
                    shadowRadius: 2,
                    shadowOpacity: 0.8
                }
            )
        }
    }

    /***********
    * render()
    ***********/

    return (
        <TouchableOpacity
            style={[
                renderShadow(),
                { height: 150, borderRadius: 20, overflow: 'hidden', marginTop: 12 }]}>
            <Image source={require('../../assets/images/challenge_bg.png')} style={{ width: '100%', height: '100%' }} />
            {renderContent()}
        </TouchableOpacity>
    )

}

export default ChallengeContent
