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
    HeadlineL: 'Monteserrat-Bold',
    HeadlineM: 'Monteserrat-Bold',
    HeadlineS: 'Monteserrat-Bold',
    TitleXL: 'Monteserrat-SemiBold',
    TitleL: 'Monteserrat-SemiBold',
    TitleM: 'Monteserrat-SemiBold',
    TitleS: 'Monteserrat-SemiBold',
    LabelL: 'Monteserrat-Bold',
    LabelM: 'Monteserrat-Bold',
    LabelS: 'Monteserrat-Bold',
    BodyL: 'Monteserrat-Regular',
    BodyM: 'Monteserrat-Regular',
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
    routeData?: {
        instituteId: number
        spaceId: number
        disabled?: boolean
    }
}

export const createTypographyComponent = (type: string) => (props: Props) => {
    const { bold, fillWidth, shrinkWidth, color, margin, children, numberOfLines, textAlign, onPress, onTextLayout, routeData } = props
    if (!children) return null

    let results = []
    let textColor = color

    const fontFamily = TextFontFamily[type]

    if (Array.isArray(children)) {
        results = children.map(child => {
            if (typeof child === 'object') {
                return generateTypography({
                    value: child.value,
                    color: child.color ? (child.color?.startsWith('#') ? child.color : NeutralColor[child.color]) : NeutralColor['neutral-10'],
                    textDecorationLine: child.textDecorationLine,
                    onPress: child.onPress,
                    fontFamily,
                    isCodeText: child.isCodeText,
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
                isCodeText: children.isCodeText,
            }),
        )
        textColor = children.color ? children.color : color || NeutralColor['neutral-10']
    } else if (typeof children === 'string') {
        results.push(
            generateTypography({
                value: children,
                fontFamily,
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

const generateTypography = ({ value: text, color, textDecorationLine, onPress, fontFamily, isCodeText }: TypographyType.Attr) => {
    if (!text || !text.length) return null

    return (
        <Text
            key={`text-${text.substring(0, 10)}`}
            allowFontScaling={false}
            style={{ fontFamily, color, textDecorationLine, includeFontPadding: false }}
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

export const [DisplayL, DisplayM, DisplayS, HeadlineL, HeadlineM, HeadlineS, TitleXL, TitleL, TitleM, TitleS, LabelL, LabelM, LabelS, BodyL, BodyM] =
    FontStyles.map((type: string) => createTypographyComponent(type))
export { FontStyles }
