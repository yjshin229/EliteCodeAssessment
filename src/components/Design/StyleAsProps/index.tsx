import React from 'react';
import { Text, TextProps, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { Col } from './Col';
import { Row } from './Row';
import { LayoutColorType, LayoutType } from './styleProps';
import { withLayoutStyleProps } from './withStyleProps';

export type DivPropsType = TouchableOpacityProps & LayoutType & LayoutColorType;

const Div = withLayoutStyleProps<TouchableOpacityProps, TouchableOpacity>((props, ref) => {
  return <TouchableOpacity {...props} ref={ref} />;
});

export { Div, Col, Row };
