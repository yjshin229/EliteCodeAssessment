import React from 'react';
import { Image, StyleSheet, Text } from 'react-native';
import { BodyM, HeadlineS, LabelL } from '../../components/Design/Typography';
import { Col, Row } from '../../components/Design/StyleAsProps';

interface Props {
  name: string;
  profilePic: string;
}

const WelcomeHeader = ({ name, profilePic }: Props) => {
  /*********
   * render
   *********/

  const renderText = () => {
    return (
      <Col>
        <BodyM>Welcome back,</BodyM>
        <HeadlineS>{name}</HeadlineS>
      </Col>
    );
  };

  const renderProfilePic = () => {
    return (
      <Row h55 w55 overflowHidden radius100>
        <Image source={profilePic} style={{ width: '100%', height: '100%' }} />
      </Row>
    );
  };

  /***********
   * render()
   ***********/

  return (
    <Row pv10 justifyBetween>
      {renderText()}
      {renderProfilePic()}
    </Row>
  );
};

const styles = StyleSheet.create({});

export default WelcomeHeader;
