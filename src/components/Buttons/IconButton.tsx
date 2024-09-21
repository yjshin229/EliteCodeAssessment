import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { ButtonComponentProps } from '.'
import { extractMargin, NeutralColor, UniversalColorType } from '../Design/Library'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { LabelL, LabelM } from '../Design/Typography';
import { TypographyType } from '../Design/type';
import { Row } from '../Design/StyleAsProps';
import BouncingButton from './BouncingButton';



const IconButton: React.FC<ButtonComponentProps> = ({ state, text, size, icon, margin, onPress, backgroundColor, isFullWidth, width }) => {

    /************
    * function
    ************/
    const getBackgroundColor = (): UniversalColorType.Value => {
        if (backgroundColor) return backgroundColor
        if (!state || state === 'enabled') return "#ffffff"
        else if (state === 'pressed' || state === 'disabled') return "#c0c4cf"
    }

    const getBorderColor = () => {
        if (state === 'pressed' || state === 'disabled') return NeutralColor['neutral-30']
        return NeutralColor['neutral-0']
    }

    const getTextColor = (): UniversalColorType.Value => {
        if (!text) return
        if (text?.color) return text?.color
        if (state === 'pressed' || state === 'disabled') return "#3f3f3f"
        else return "#000000"
    }

    const getText = (): TypographyType.Attr => {
        if (typeof text === 'string') return { value: `${text}`, bold: 'bold' }
        else if (typeof text === 'object') return { value: `${text.value}`, bold: text.bold || 'bold' }
    }

    const getHeight = () => {
        if (size === 'small') return 32
        else 40
    }

    const getPadding = () => {
        if (!text && icon) {
            if (size === 'small') {
                return { padding: 7 }
            } else {
                return { padding: 8 }
            }
        }
        if (text && icon) {
            if (size === 'small') {
                return { paddingLeft: 12, paddingRight: 16 }
            } else {
                return { paddingLeft: 16, paddingRight: 24 }
            }
        }
        if (text && !icon) {
            if (size === 'small') {
                return { paddingHorizontal: 16 }
            } else {
                return { paddingHorizontal: 24 }
            }
        }
    }

    /*********
    * render
    *********/

    const renderIcon = () => {
        if (!icon) return
        else return <Ionicons name={icon} size={20} color={getTextColor()} />
    }

    const renderText = () => {
        if (size === 'small') {
            return (
                <LabelM color={getTextColor()} numberOfLines={1}>{getText()}</LabelM>
            )
        } else {
            return (
                <LabelL color={getTextColor()} numberOfLines={1}>{getText()}</LabelL>
            )
        }
    }

    const renderContent = () => {
        return (
            <Row alignCenter justifyCenter w={isFullWidth ? '100%' : width} >
                {renderIcon()}
                {renderText()}
            </Row>
        )
    }


    /*********
    * render()
    *********/

    return (
        <TouchableOpacity
            disabled={state === 'disabled'}
            style={[
                {
                    flexShrink: 1,
                    flexDirection: 'row',
                    borderColor: getBorderColor(),
                    borderWidth: 2,
                    borderRadius: 12,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: isFullWidth ? '100%' : width,
                    height: getHeight(),
                    backgroundColor: getBackgroundColor()
                },
                getPadding(),
                extractMargin(margin)
            ]}
            onPress={onPress}
        >
            {renderContent()}
        </TouchableOpacity>
    )

}


export default IconButton
