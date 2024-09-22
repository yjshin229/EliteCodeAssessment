import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Row } from '../Design/StyleAsProps';
import { extractMargin, NeutralColor, UniversalColorType } from '../Design/Library';
import { BodyM } from '../Design/Typography';
import { SpaceStyle } from '../Design/type';

interface AnswerCardProps {
  number: number;
  answer: string;
  borderColor?: UniversalColorType.Value;
  margin?: SpaceStyle.Margin;
  onPress?: () => void;
}

const AnswerCard = ({ number, answer, borderColor, margin, onPress }: AnswerCardProps) => {
  const getBorderColor = (): UniversalColorType.Value => {
    if (!borderColor) return NeutralColor['neutral-0'];
    else return borderColor;
  };

  const getMargin = () => {
    if (margin) return extractMargin(margin);
    return undefined;
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <Row bgNeutral100 borderColor={getBorderColor()} borderW2 alignCenter pv10 ph12 radius12 style={getMargin()}>
        <BodyM>{`${number}.`}</BodyM>
        <BodyM margin={{ left: 10 }}>{answer}</BodyM>
      </Row>
    </TouchableOpacity>
  );
};

export default AnswerCard;
