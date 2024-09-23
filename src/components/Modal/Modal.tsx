import React, { useState, useEffect, ReactNode } from 'react';
import { SafeAreaView, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { TypographyType } from '../Design/type';
import { Col, Row } from '../Design/StyleAsProps';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { HeadlineM } from '../Design/Typography';
import IconButton from '../Buttons/IconButton';
import { NeutralColor } from '../Design/Library';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

interface ModalProps {
  title: string;
  children: ReactNode;
  buttonText: string;
  onClose: () => void;
  onButtonPress: () => void;
}

const Modal = ({ title, children, buttonText, onClose, onButtonPress }: ModalProps) => {
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
    <Col absolute top0 left0 justifyCenter alignCenter bg={'rgba(0,0,0,0.25)'}>
      <Col w={'85%'} bgNeutral100 radius20 pt12 pb22 ph18>
        <TouchableWithoutFeedback onPress={onClose} style={{ alignSelf: 'flex-end' }}>
          <Ionicons name="close-outline" size={24} />
        </TouchableWithoutFeedback>
        <HeadlineM>{title}</HeadlineM>
        <Col justifyCenter alignCenter mt12>
          {children}
        </Col>
        <IconButton
          text={{ value: buttonText, color: NeutralColor['neutral-100'] }}
          backgroundColor="#000000"
          size="small"
          width={100}
          onPress={onButtonPress}
        />
      </Col>
    </Col>
  );
};

const styles = StyleSheet.create({});

export default Modal;
