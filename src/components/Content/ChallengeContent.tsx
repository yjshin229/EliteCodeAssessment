import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { Col, Row } from '../Design/StyleAsProps';
import { TitleXL } from '../Design/Typography';
import IconButton from '../Buttons/IconButton';
import { deviceInfo } from '../../utilities/deviceInfo';
import { EliteCodeNavigationModule } from '../../navigation/NavigationModule';

interface Props {
  text: string;
}

const ChallengeContent = ({ text }: Props) => {
  /************
   * functions
   ************/

  const onPress = () => {
    return EliteCodeNavigationModule.navigate('HomeDetailScreen');
  };

  /*********
   * render
   *********/

  const renderText = () => {
    return (
      <Row w={'50%'}>
        <TitleXL numberOfLines={2}>{text}</TitleXL>
      </Row>
    );
  };

  const renderButton = () => {
    return <IconButton backgroundColor="#000000" size="small" text={{ value: 'Enter', color: '#ffffff' }} width={100} onPress={onPress} />;
  };

  const renderContent = () => {
    return (
      <Col pv25 ph30 zIndex1 absolute top0 justifyBetween w={'100%'} h={'100%'}>
        {renderText()}
        {renderButton()}
      </Col>
    );
  };

  const renderShadow = () => {
    if (deviceInfo.OS === 'android') {
      return {
        elevation: 6,
        shadowColor: 'rgba(0,0,0,0.35)',
      };
    } else {
      return {
        shadowColor: 'rgba(0,0,0,0.1)',
        shadowOffset: { height: 2, width: 2 },
        shadowRadius: 4,
        shadowOpacity: 0.35,
      };
    }
  };

  /***********
   * render()
   ***********/

  return (
    <Col style={renderShadow()} radius20 mt12>
      <TouchableOpacity onPress={onPress} style={[{ height: 150, borderRadius: 20, overflow: 'hidden' }]}>
        <Image source={require('../../assets/images/challenge_bg.png')} style={{ width: '100%', height: '100%' }} />
        {renderContent()}
      </TouchableOpacity>
    </Col>
  );
};

export default ChallengeContent;
