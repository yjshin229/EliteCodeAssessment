import React, { useState, useEffect, ReactNode } from 'react';
import { SafeAreaView, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { TypographyType } from '../Design/type';
import { Col, Row } from '../Design/StyleAsProps';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { HeadlineM } from '../Design/Typography';
import IconButton from '../Buttons/IconButton';
import { NeutralColor } from '../Design/Library';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Modal from 'react-native-modal';
import LottieView from 'lottie-react-native';
import { animation_confetti } from '../../assets/animations';

interface ModalProps {
  isVisible: boolean;
  title: string;
  children: ReactNode;
  buttonText: string;
  onClose: () => void;
  onButtonPress: () => void;
  animationIn?: 'zoomIn' | 'shake';
  celebrate?: boolean;
}

const CustomModal = ({ isVisible, title, children, buttonText, onClose, onButtonPress, animationIn = 'zoomIn', celebrate = false }: ModalProps) => {
  /*********
   * recoil
   *********/

  /**************************
   * props, navigation prams
   **************************/

  /*************
   * state, ref
   *************/

  const [isRendering, setIsRendering] = useState<boolean>(true);

  /**************
   * life cycles
   **************/

  useEffect(() => {
    // ComponentDidMount

    // setIsRendering(false)
    return () => {
      // ComponentWillUnmount
    };
  }, []);

  /************
   * functions
   ************/

  /*********
   * render
   *********/

  /***********
   * render()
   ***********/

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      animationOutTiming={500}
      animationInTiming={500}
      animationIn={animationIn}
      animationOut={'zoomOut'}>
      <Col bgNeutral100 radius20 ph18 pb22 pt12 justifyCenter alignCenter>
        {celebrate && (
          <Col absolute top0 left0 bottom0 right0>
            <LottieView source={animation_confetti} loop={false} autoPlay style={{ width: '100%', height: '100%' }} />
          </Col>
        )}

        <TouchableOpacity style={{ alignSelf: 'flex-end' }} onPress={onClose}>
          <Ionicons name="close-outline" size={24} />
        </TouchableOpacity>
        <HeadlineM>{title}</HeadlineM>
        <Col>{children}</Col>
        <IconButton
          text={{ value: buttonText, color: NeutralColor['neutral-100'] }}
          size="small"
          onPress={onButtonPress}
          width={120}
          backgroundColor={NeutralColor['neutral-0']}
          margin={{ top: 12 }}
        />
      </Col>
    </Modal>
  );
};

const styles = StyleSheet.create({});

export default CustomModal;
