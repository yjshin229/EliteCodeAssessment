import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { extractMargin, NeutralColor, UniversalColorType } from '../Design/Library';
import { SpaceStyle } from '../Design/type';
import { Row } from '../Design/StyleAsProps';

interface DividerProps {
  color?: UniversalColorType.Value;
  margin?: SpaceStyle.Margin;
}

const Divider = ({ color, margin }: DividerProps) => {
  /************
   * functions
   ************/

  const getMargin = (): object => {
    if (margin) return extractMargin(margin);
    return undefined;
  };

  const getColor = () => {
    if (color) return { backGroundColor: color };
    else return { backgroundColor: NeutralColor['neutral-90'] };
  };

  return <View style={[getMargin(), getColor(), { height: 1 }]}></View>;
};

export { Divider };
