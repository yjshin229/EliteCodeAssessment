// import { ButtonStyle } from '../Buttons'

import { UniversalColorType } from "./Library";

declare namespace SpaceStyle {
  type Margin = number | Inset
  type Inset = { left?: number; top?: number; right?: number; bottom?: number }
  type PointPropType = { x: number; y: number }
}

const Size = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  X_LARGE: 'xlarge',
} as const

declare namespace ComponentStyle {
  type Theme = 'light' | 'dark'
  type Size = (typeof Size)[keyof typeof Size]
  type SizeWithObject = Size | { width: number; height: number }
  type State = 'enabled' | 'pressed' | 'selected' | 'disabled' | 'progress'
}


declare namespace TypographyType {
  type Weight = 'bold' | 'semi-bold' | 'regular'
  type Value = string | Attr | Attr[]
  type TextAlign = 'auto' | 'left' | 'right' | 'center' | 'justify'

  interface Attr {
    value: string
    bold?: Weight
    color?: UniversalColorType.Value
    textAlign?: TextAlign
    textDecorationLine?: 'underline' | 'line-through' | 'none'
    onPress?: () => void
    numberOfLine?: number
    fontFamily?: string
    isCodeText?: boolean
  }
  interface AttrWithOnPress extends Attr {
    disable?: boolean
    onPress?: (e?) => void
  }
}

const IconSizeMap = {
  small: 18,
  medium: 24,
  large: 32,
  xlarge: 48,
} as const

declare namespace IconType {
  type ImageSource = string | number
  type ImageSourceOfState = { enabled: ImageSource; pressed?: ImageSource; selected?: ImageSource; disabled?: ImageSource }
  type IconSource = ImageSource | ImageSourceOfState
  type Style = { aspectRatio?: number; width: number | '100%'; height: number | '100%' }
  type Position = 'left' | 'right'
  type Shape = 'circle' | 'square'
  interface Attr {
    size?: ComponentStyle.SizeWithObject
    src: IconSource
    position?: Position
    shape?: Shape
    data?: IconExtraData
    state?: ComponentStyle.State
  }

  interface AttrWithOnPress extends Attr {
    disable?: boolean
    onPress?: (e?) => void
  }

  interface IconExtraData {
    count: number
    label?: string
    isSelected?: boolean
    isDisabled?: boolean
  }
}

const ButtonSizeMap = {
  small: 32,
  medium: 40,
  large: 48,
  xlarge: 56,
} as const
// declare namespace ButtonType {
//   interface Attr {
//     isFullWidthBtn?: boolean
//     isProgress?: boolean
//     hasBorder?: boolean
//     text?: TypographyType.Attr
//     size: ButtonStyle.Size
//     icon?: IconType.AttrWithOnPress
//     state?: ButtonStyle.State
//     theme?: ButtonStyle.Theme
//     margin?: SpaceStyle.Margin
//     onPress: () => void
//   }
//   interface AttrWithType extends Attr {
//     type: 'A' | 'B' | 'C'
//   }
// }


const TEXT_INPUT_SIZE_MAP = {
  small: 40,
  medium: 44,
} as const
type TEXT_INPUT_SIZE_MAP = (typeof TEXT_INPUT_SIZE_MAP)[keyof typeof TEXT_INPUT_SIZE_MAP]

export { IconSizeMap, ButtonSizeMap, TEXT_INPUT_SIZE_MAP }
export type {
  TypographyType,
  SpaceStyle,
//   ButtonType,
  IconType,
  ComponentStyle,
}
