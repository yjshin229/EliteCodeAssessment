import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import { TypographyType, SpaceStyle } from '../type'
import { NeutralColor, UniversalColorType, extractMargin } from '../Library'

const TextSize = {
    HeadlineL: 32,
    HeadlineM: 28,
    HeadlineS: 24,
    TitleXL: 20,
    TitleL: 17,
    TitleM: 15,
    TitleS: 13,
    LabelL: 14,
    LabelM: 12,
    LabelS: 10,
    BodyL: 15,
    BodyM: 13,
}

const TextLetterSpacing = {
    HeadlineL: 0,
    HeadlineM: 0,
    HeadlineS: 0.15,
    TitleXL: 0,
    TitleL: 0,
    TitleM: 0.15,
    TitleS: 0.1,
    LabelL: 0.3,
    LabelM: 0.5,
    LabelS: 0.5,
    BodyL: 0.15,
    BodyM: 0.25,
}

const TextLineHeight = {
    HeadlineL: 40,
    HeadlineM: 36,
    HeadlineS: 32,
    TitleXL: 28,
    TitleL: 28,
    TitleM: 24,
    TitleS: 20,
    LabelL: 18,
    LabelM: 16,
    LabelS: 16,
    BodyL: 24,
    BodyM: 20,
}

const TextFontFamily = {
    HeadlineL: 'Montserrat-Bold',
    HeadlineM: 'Montserrat-Bold',
    HeadlineS: 'Montserrat-Bold',
    TitleXL: 'Montserrat-SemiBold',
    TitleL: 'Montserrat-SemiBold',
    TitleM: 'Montserrat-SemiBold',
    TitleS: 'Montserrat-SemiBold',
    LabelL: 'Montserrat-Bold',
    LabelM: 'Montserrat-Bold',
    LabelS: 'Montserrat-Bold',
    BodyL: 'Montserrat-Regular',
    BodyM: 'Montserrat-Regular',
}

const FontStyles = [
    'HeadlineL',
    'HeadlineM',
    'HeadlineS',
    'TitleXL',
    'TitleL',
    'TitleM',
    'TitleS',
    'LabelL',
    'LabelM',
    'LabelS',
    'BodyL',
    'BodyM',
]

const TextFontWeight = {
    HeadlineL: '800',
    HeadlineM: '800',
    HeadlineS: '800',
    TitleXL: '600',
    TitleL: '600',
    TitleM: '600',
    TitleS: '600',
    LabelL: '800',
    LabelM: '800',
    LabelS: '800',
    BodyL: '400',
    BodyM: '400',
}

export interface TextLayoutEvent {
    lines: TextLayout[]
    target: number
}

interface TextLayout {
    capHeight: number
    ascender: number
    descender: number
    width: number
    height: number
    xHeight: number
    x: number
    y: number
}

interface Props {
    children: TypographyType.Value
    fillWidth?: boolean
    shrinkWidth?: boolean
    color?: UniversalColorType.Value
    bold?: TypographyType.Weight
    margin?: SpaceStyle.Margin
    numberOfLines?: number
    onPress?: () => void
    onTextLayout?: (event: TextLayoutEvent) => void
    textAlign?: TypographyType.TextAlign

}

export const createTypographyComponent = (type: string) => (props: Props) => {
    const { fillWidth, shrinkWidth, color, margin, children, numberOfLines, textAlign, onPress, onTextLayout } = props
    if (!children) return null

    let results = []
    let textColor = color

    const fontFamily = TextFontFamily[type]
    const fontWeight = TextFontWeight[type]

    if (Array.isArray(children)) {
        results = children.map(child => {
            if (typeof child === 'object') {
                return generateTypography({
                    value: child.value,
                    color: child.color ? (child.color?.startsWith('#') ? child.color : NeutralColor[child.color]) : NeutralColor['neutral-10'],
                    textDecorationLine: child.textDecorationLine,
                    onPress: child.onPress,
                    fontFamily,
                    fontWeight
                })
            }
        })
    } else if (typeof children === 'object') {
        results.push(
            generateTypography({
                value: children.value,
                textDecorationLine: children.textDecorationLine,
                onPress: children.onPress,
                fontFamily,
                fontWeight
            }),
        )
        textColor = children.color ? children.color : color || "#000000"
    } else if (typeof children === 'string') {
        results.push(
            generateTypography({
                value: children,
                fontFamily,
                fontWeight
            }),
        )
    }
    const _onTextLayout = (event: { nativeEvent: TextLayoutEvent }) => {
        if (!onTextLayout) return
        onTextLayout(event.nativeEvent)
    }

    if (!results) return null
    const TypographyComp = (
        <Text
            style={[
                {
                    textAlign,
                    color: textColor?.startsWith('#') ? textColor : NeutralColor[textColor] || NeutralColor['neutral-10'],
                    fontSize: TextSize[type],
                    letterSpacing: TextLetterSpacing[type],
                    lineHeight: TextLineHeight[type],
                    fontWeight: TextFontWeight[type]
                },
                extractMargin(margin),
                fillWidth ? { flex: 1 } : {},
                shrinkWidth ? { flexShrink: 1 } : {},
            ]}
            onTextLayout={_onTextLayout}
            numberOfLines={numberOfLines}
            allowFontScaling={false}>
            {results}
        </Text>
    )

    return onPress ? createButtonTypography(TypographyComp, onPress) : TypographyComp
}

const generateTypography = ({ value: text, color, textDecorationLine, onPress, fontFamily, fontWeight }: TypographyType.Attr) => {
    if (!text || !text.length) return null

    return (
        <Text
            key={`text-${text.substring(0, 10)}`}
            allowFontScaling={false}
            style={{ fontFamily, color, textDecorationLine, includeFontPadding: false, fontWeight }}
            onPress={onPress}>
            {text}
        </Text>
    )
}
const createButtonTypography = (children: any, onPress: () => void) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity
                onPress={onPress}
                style={{ flexGrow: 0, flexShrink: 1, paddingHorizontal: 3, paddingVertical: 7 }}>
                {children}
            </TouchableOpacity>
        </View>
    )
}

export const [HeadlineL, HeadlineM, HeadlineS, TitleXL, TitleL, TitleM, TitleS, LabelL, LabelM, LabelS, BodyL, BodyM] =
    FontStyles.map((type: string) => createTypographyComponent(type))
export { FontStyles }
