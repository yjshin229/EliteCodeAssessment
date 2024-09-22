import React from 'react';
import { BodyM, TitleXL } from '../../components/Design/Typography';
import { Col, Row } from '../../components/Design/StyleAsProps';
import WelcomeHeader from './WelcomeHeader';
import ChallengeCard from '../../components/Card/ChallengeCard';

const HomeScreen = ({ navigation, route }) => {
  /************
   * functions
   ************/

  /*********
   * render
   *********/

  const renderExploreHeader = () => {
    return (
      <Row pv10 alignCenter justifyBetween mt12>
        <TitleXL>Explore</TitleXL>
        <BodyM>See More</BodyM>
      </Row>
    );
  };

  const img = require('../../assets/images/User_01a.png');

  /***********
   * render()
   ***********/

  return (
    <Col flex ph18 pt12 bgNeutral100>
      <WelcomeHeader name="John Doe" profilePic={img} />
      <ChallengeCard text={`Challenge \nof the Day`} />
      {renderExploreHeader()}
    </Col>
  );
};

export default HomeScreen;
