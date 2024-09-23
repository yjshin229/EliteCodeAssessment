import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { BodyL, BodyM, LabelL } from '../../components/Design/Typography';
import { Header } from '../../components/Header';
import { Col, Row } from '../../components/Design/StyleAsProps';
import AnswerCard from '../../components/Card/AnswerCard';
import { BrandColor } from '../../components/Design/Library';
import IconButton from '../../components/Buttons/IconButton';
import { EliteCodeNavigationModule } from '../../navigation/NavigationModule';
import CustomModal from '../../components/Modal/CustomModal';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import { bronze_badge, silver_badge } from '../../assets/images/badges';
import LottieView from 'lottie-react-native';
import { animation_confetti } from '../../assets/animations';

interface Props {}

const HomeDetailScreen = ({ navigation, route }) => {
  /**************************
   * props, navigation prams
   **************************/

  const headerTitle = route.params?.title;

  const questionExample = {
    question: 'What is the output of the following code?',
    code: `console.log(1 + "2" + "2");`,
    answer: 1,
    explanation: {
      1: `Correct! JavaScript performs type coercion when using the + operator with numbers and strings.
1 + "2" results in the string "12", because 1 (a number) is coerced to a string and concatenated with "2".`,
      2: `JavaScript doesn't perform arithmetic when combining numbers and strings; instead, it converts the number to a string and concatenates from left to right.`,
      3: `In JavaScript,  when you add a number to a string, JavaScript treats the number like a string, converting it and concatenating them instead of performing arithmetic.`,
      4: `NaN (Not a Number) occurs when performing invalid mathematical operations, but here JavaScript is doing string concatenation, not math, so NaN wouldn't be the result.`,
    },
    options: [
      { number: 1, option: `"122"` },
      { number: 2, option: `"32"` },
      { number: 3, option: `"14"` },
      { number: 4, option: `"NaN"` },
    ],
  };

  /*************
   * state, ref
   *************/

  const [selected, setSelected] = useState<number>();
  const [isModalVisible, setModalVisible] = useState<boolean>(false);

  /************
   * functions
   ************/

  const handleSelect = (option: number) => {
    setSelected(option);
  };

  const handleSubmit = () => {
    setModalVisible(true);
    console.log(isModalVisible);
  };

  /*********
   * render
   *********/

  const renderQuestion = () => {
    //API call later, mock data for now
    return (
      <Row pv10 ph6>
        <BodyL>{questionExample.question}</BodyL>
      </Row>
    );
  };

  const renderQuestionCode = () => {
    //API call later, mock data for now

    return (
      <Col bgNeutral60 maxH400 flexShrink ph16 pv12 mt12>
        <BodyM>{questionExample.code}</BodyM>
      </Col>
    );
  };

  const renderAnswerOptions = () => {
    return (
      <Col mt12 flex pv12 ph8>
        {questionExample.options.map(option => (
          <AnswerCard
            key={option.number}
            number={option.number}
            answer={option.option}
            margin={option.number !== 1 ? { top: 10 } : null}
            borderColor={selected === option.number ? BrandColor['brand-blue'] : null}
            onPress={() => handleSelect(option.number)}
          />
        ))}
      </Col>
    );
  };

  const renderModal = () => {
    const onButtonPress = () => {
      setModalVisible(false);
      return EliteCodeNavigationModule.popToTop();
    };

    const onClose = () => {
      setModalVisible(false);
    };

    const correctModalChildren = () => {
      return (
        <Col mt12 justifyCenter alignCenter>
          <Col>
            <LottieView source={animation_confetti} loop autoPlay />
          </Col>
          <Col alignCenter>
            <Image source={bronze_badge} style={{ width: 120, height: 179 }} />
          </Col>
          <BodyL>You've earned your daily challenge bronze badge!</BodyL>
          <Row alignCenter wp100 mt12>
            <Image source={silver_badge} style={{ width: 40, height: 60, marginRight: 10 }} />
            <ProgressBar title="Earn silver badge" progress={30} />
          </Row>
        </Col>
      );
    };

    const incorrectModalChildren = () => {
      return (
        <Col mt12 justifyCenter alignCenter>
          <BodyM>{questionExample.explanation[selected]}</BodyM>
        </Col>
      );
    };

    if (selected === questionExample.answer) {
      return (
        <CustomModal isVisible={isModalVisible} title="Congratulations!" buttonText="Back to Home" onButtonPress={onButtonPress} onClose={onClose}>
          {correctModalChildren()}
        </CustomModal>
      );
    }

    return (
      <CustomModal
        isVisible={isModalVisible}
        title="Try Again"
        buttonText="Try Again"
        onButtonPress={onButtonPress}
        onClose={onClose}
        animationIn="shake">
        {incorrectModalChildren()}
      </CustomModal>
    );
  };
  /***********
   * render()
   ***********/

  return (
    <>
      {renderModal()}
      <Col flex bgNeutral100>
        <Header title={headerTitle} hasDivider hasNavigationBackBtn />
        <Col mt12 ph18 mb22 flex>
          {renderQuestion()}
          {renderQuestionCode()}
          {renderAnswerOptions()}
          <Col h300 w100>
            <LottieView
              source={animation_confetti}
              loop
              autoPlay
              style={{ width: '100%', height: '100%' }}
              onAnimationFinish={() => console.log('Animation finished')}
              onAnimationLoaded={() => console.log('loaded')}
            />
          </Col>

          <IconButton text={{ value: 'Submit' }} isFullWidth size="medium" onPress={handleSubmit} state={!selected ? 'disabled' : 'enabled'} />
        </Col>
      </Col>
    </>
  );
};

export default HomeDetailScreen;
