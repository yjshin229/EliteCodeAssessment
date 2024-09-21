// import { ButtonStyle } from '../Buttons'

import { TextStyle } from 'react-native';
import { UniversalColorType } from './Library';

declare namespace SpaceStyle {
  type Margin = number | Inset;
  type Inset = { left?: number; top?: number; right?: number; bottom?: number };
  type PointPropType = { x: number; y: number };
}

const Size = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  X_LARGE: 'xlarge',
} as const;

declare namespace ComponentStyle {
  type Theme = 'light' | 'dark';
  type Size = (typeof Size)[keyof typeof Size];
  type SizeWithObject = Size | { width: number; height: number };
  type State = 'enabled' | 'pressed' | 'selected' | 'disabled' | 'progress';
}

declare namespace TypographyType {
  type Weight = 'bold' | 'semi-bold' | 'regular' | '400' | '600' | '800';
  type Value = string | Attr | Attr[];
  type TextAlign = 'auto' | 'left' | 'right' | 'center' | 'justify';

  interface Attr {
    value: string;
    bold?: Weight;
    color?: UniversalColorType.Value;
    textAlign?: TextAlign;
    textDecorationLine?: 'underline' | 'line-through' | 'none';
    onPress?: () => void;
    numberOfLine?: number;
    fontFamily?: string;
    fontWeight?: TextStyle['fontWeight'];
  }
  interface AttrWithOnPress extends Attr {
    disable?: boolean;
    onPress?: (e?) => void;
  }
}

const IconSizeMap = {
  small: 18,
  medium: 24,
  large: 32,
  xlarge: 48,
} as const;

const ButtonSizeMap = {
  small: 32,
  medium: 40,
  large: 48,
  xlarge: 56,
} as const;

const TEXT_INPUT_SIZE_MAP = {
  small: 40,
  medium: 44,
} as const;
type TEXT_INPUT_SIZE_MAP = (typeof TEXT_INPUT_SIZE_MAP)[keyof typeof TEXT_INPUT_SIZE_MAP];

export { IconSizeMap, ButtonSizeMap, TEXT_INPUT_SIZE_MAP };
export type {
  TypographyType,
  SpaceStyle,
  //   ButtonType,
  ComponentStyle,
};
