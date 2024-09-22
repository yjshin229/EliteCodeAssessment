import React from 'react';

import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { EliteCodeNavigationModule } from '../../navigation/NavigationModule';
import { Row } from '../Design/StyleAsProps';
import { LabelL, TitleL, TitleXL } from '../Design/Typography';
import { Divider } from '../Divider';

interface HeaderProps {
  title?: string;
  hasDivider?: boolean;
  hasNavigationBackBtn?: boolean;
}

const Header: React.FC<HeaderProps> = ({ title, hasDivider, hasNavigationBackBtn }) => {
  /************
   * function
   ************/

  const getHeight = () => {
    return 48;
  };

  /*********
   * render
   *********/

  const renderLeftSide = () => {
    if (hasNavigationBackBtn) {
      return (
        <TouchableWithoutFeedback onPress={EliteCodeNavigationModule.goBack} containerStyle={{ marginRight: 10 }}>
          <Ionicons name="chevron-back-outline" size={24} />
        </TouchableWithoutFeedback>
      );
    }
    return null;
  };

  const renderTitle = () => {
    return (
      <Row flex>
        <TitleL numberOfLines={1} margin={{ left: 8 }}>
          {title}
        </TitleL>
      </Row>
    );
  };
  return (
    <>
      <Row bgNeutral100 ph16 h={getHeight()} alignCenter justifyBetween>
        <Row alignCenter flex>
          {renderLeftSide()}
          {renderTitle()}
        </Row>
      </Row>
      {hasDivider && <Divider />}
    </>
  );
};

export { Header };
