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

interface ModalProps {
  isVisible: boolean;
  title: string;
  children: ReactNode;
  buttonText: string;
  onClose: () => void;
  onButtonPress: () => void;
}

const CustomModal = ({ isVisible, title, children, buttonText, onClose, onButtonPress }: ModalProps) => {
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
    <Modal isVisible={isVisible} onBackdropPress={onClose}>
      <Col bgNeutral100 radius20 ph18 pb22 pt12 justifyCenter alignCenter>
        <TouchableOpacity style={{ alignSelf: 'flex-end' }}>
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
        />
      </Col>
    </Modal>
  );
};

const styles = StyleSheet.create({});

export default CustomModal;
