import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';
import { Col, Row } from '../Design/StyleAsProps';
import { LabelS } from '../Design/Typography';
import { BrandColor } from '../Design/Library';

interface ProgressBarProps {
  progress: number;
  title: string;
  animationDelayTime?: number;
  animationType?: 'timing' | 'spring';
  animationDuration?: number;
  style?: ViewStyle;
}

const ProgressBar = ({ progress, title, animationDelayTime = 0, animationDuration = 1000, animationType, style }: ProgressBarProps) => {
  /*************
   * state, ref
   *************/

  const animatedWidth = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: `${animatedWidth.value}%`,
    };
  });

  /**************
   * life cycles
   **************/

  useEffect(() => {
    if (animationType === 'spring') {
      setTimeout(() => {
        animatedWidth.value = withSpring(progress, {
          damping: 10,
          stiffness: 300,
          mass: 0.5,
        });
      }, animationDelayTime);
    } else {
      setTimeout(() => {
        animatedWidth.value = withTiming(progress, {
          duration: animationDuration,
          easing: Easing.inOut(Easing.ease),
        });
      }, animationDelayTime);
    }
  }, [progress]);

  return (
    <Col flex style={style}>
      <Row alignCenter>
        <LabelS>{title}</LabelS>
      </Row>
      <Col wp100 h10 bgNeutral80 radius10 overflowHidden mv4>
        <Animated.View style={[{ height: '100%', backgroundColor: BrandColor['brand-orange'], borderRadius: 10 }, animatedStyle]} />
      </Col>
    </Col>
  );
};

const styles = StyleSheet.create({});

export default ProgressBar;
