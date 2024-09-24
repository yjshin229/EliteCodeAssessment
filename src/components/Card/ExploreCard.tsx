import React, { useState, useEffect } from 'react';
import { Image, ImageSourcePropType, TouchableWithoutFeedback } from 'react-native';
import { NeutralColor } from '../Design/Library';
import { Col } from '../Design/StyleAsProps';
import { TitleL } from '../Design/Typography';
import IconButton from '../Buttons/IconButton';
import { deviceInfo } from '../../utilities/deviceInfo';

interface ExploreCardProps {
  background: ImageSourcePropType;
  title: string;
  onPress: () => void;
}

const ExploreCard = ({ background, title, onPress }: ExploreCardProps) => {
  const deviceWidth = deviceInfo.size.width;
  const deviceheight = deviceInfo.size.height;
  /************
   * functions
   ************/

  const getCardWidth = () => {
    return (deviceWidth - 18) * 0.65;
  };

  const getCardHeight = () => {
    return deviceheight * 0.4;
  };

  /*********
   * render
   *********/

  const renderBackground = () => {
    if (background) {
      return <Image source={background} style={{ width: '100%', height: '100%' }} />;
    } else {
      return <Col bgBrandOrange wp100 hp100></Col>;
    }
  };

  const renderContent = () => {
    return (
      <Col absolute top0 bottom0 left0 right0 flex justifyBetween p20 alignCenter>
        <TitleL>{title}</TitleL>
        <IconButton
          backgroundColor="#000000"
          size="medium"
          text={{ value: 'Enter', color: NeutralColor['neutral-100'] }}
          isFullWidth
          onPress={onPress}
        />
      </Col>
    );
  };
  /***********
   * render()
   ***********/

  return (
    <Col radius20 overflowHidden h={getCardHeight()} w={getCardWidth()} bgBrandOrange>
      <TouchableWithoutFeedback onPress={onPress}>
        <>
          {renderBackground()}
          {renderContent()}
        </>
      </TouchableWithoutFeedback>
    </Col>
  );
};

export default ExploreCard;
