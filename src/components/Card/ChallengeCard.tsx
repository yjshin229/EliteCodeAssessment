import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { Col, Row } from '../Design/StyleAsProps';
import { TitleXL } from '../Design/Typography';
import IconButton from '../Buttons/IconButton';
import { deviceInfo } from '../../utilities/deviceInfo';
import { EliteCodeNavigationModule } from '../../navigation/NavigationModule';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { NeutralColor } from '../Design/Library';

interface Props {
  text: string;
}

const ChallengeCard = ({ text }: Props) => {
  /************
   * functions
   ************/

  const onPress = () => {
    return EliteCodeNavigationModule.navigate('HomeDetailScreen', { title: 'Challenge of the Day' });
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
    return (
      <IconButton
        backgroundColor="#000000"
        size="small"
        text={{ value: 'Enter', color: NeutralColor['neutral-100'] }}
        width={100}
        onPress={onPress}
      />
    );
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
        elevation: 4,
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
      <TouchableWithoutFeedback onPress={onPress} style={[{ height: 150, borderRadius: 20, overflow: 'hidden' }]}>
        <Image source={require('../../assets/images/challenge_bg.png')} style={{ width: '100%', height: '100%' }} />
        {renderContent()}
      </TouchableWithoutFeedback>
    </Col>
  );
};

export default ChallengeCard;
