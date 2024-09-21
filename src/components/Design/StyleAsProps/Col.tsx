import React from 'react';
import { Div, DivPropsType } from '../StyleAsProps';

export const Col = (props: DivPropsType) => {
  return <Div {...props} flexColumn />;
};
