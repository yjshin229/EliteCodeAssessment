import React, { useState } from 'react';
import { BodyM, TitleXL } from '../../components/Design/Typography';
import { Col, Row } from '../../components/Design/StyleAsProps';
import WelcomeHeader from './WelcomeHeader';
import ChallengeCard from '../../components/Card/ChallengeCard';
import { user_01a } from '../../assets/images/user_avatar';
import ExploreCard from '../../components/Card/ExploreCard';
import { explore_bg, explore_bg2, explore_bg3, explore_bg4 } from '../../assets/images/background';
import { FlatList } from 'react-native';

const HomeScreen = ({ navigation, route }) => {
  const data = [
    {
      id: 0,
      title: 'Learn the Arrays with Java',
      background: explore_bg,
    },
    {
      id: 1,
      title: 'All about web Designing',
      background: explore_bg2,
    },
    {
      id: 2,
      title: 'The fundamentals',
      background: explore_bg3,
    },
    {
      id: 3,
      title: 'Explore the Trees',
      background: explore_bg4,
    },
  ];
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

  const ItemSeparator = () => {
    return <Col w20 />;
  };

  const renderHorizontalFlatlist = () => {
    return (
      <FlatList
        data={data}
        renderItem={renderItem}
        horizontal={true}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={{ paddingHorizontal: 10, marginTop: 12 }}
        ItemSeparatorComponent={ItemSeparator}
        showsHorizontalScrollIndicator={false}
      />
    );
  };

  const renderItem = ({ item, index }) => {
    return <ExploreCard title={item.title} background={item?.background} onPress={item.onPress} />;
  };
  /***********
   * render()
   ***********/

  return (
    <Col flex ph18 pt12 bgNeutral100>
      <WelcomeHeader name="John Doe" profilePic={user_01a} />
      <ChallengeCard text={`Challenge \nof the Day`} />
      {renderExploreHeader()}
      {renderHorizontalFlatlist()}
    </Col>
  );
};

export default HomeScreen;
