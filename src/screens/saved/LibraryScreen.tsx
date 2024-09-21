import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { LabelM } from '../../components/Design/Typography';

interface Props {}

const LibraryScreen = ({ navigation, route }) => {
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

  // if (isRendering === true) {
  // return null
  // }

  /***********
   * render()
   ***********/

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <LabelM>This is a Library screen</LabelM>
    </SafeAreaView>
  );
};

export default LibraryScreen;
