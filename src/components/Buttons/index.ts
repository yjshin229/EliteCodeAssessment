import { Button } from 'react-native-elements';
import { SpaceStyle, TypographyType } from '../Design/type';
import { UniversalColorType } from '../Design/Library';

export interface ButtonComponentProps {
  text?: TypographyType.Attr;
  state?: ButtonStyle.State;
  size?: ButtonStyle.Size;
  margin?: SpaceStyle.Margin;
  onPress?: () => void;
  backgroundColor?: UniversalColorType.Value;
  icon?: string;
  isFullWidth?: boolean;
  width?: number;
}

const ButtonSize = {
  SMALL: 'small',
  MEDIUM: 'medium',
} as const;

export declare namespace ButtonStyle {
  type Size = (typeof ButtonSize)[keyof typeof ButtonSize];
  type State = 'enabled' | 'pressed' | 'progress' | 'disabled' | 'progress';
}
