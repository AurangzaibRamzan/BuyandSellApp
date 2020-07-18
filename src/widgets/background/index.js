import React, {memo} from 'react';
import {View, ImageBackground, KeyboardAvoidingView} from 'react-native';

import styles from './styles';
import {backgroundImage} from '../../../config/images';

const Background = ({children}) => {
  const BackView = backgroundImage.show ? ImageBackground : View;
  return (
    <BackView
      source={backgroundImage.source}
      resizeMode="repeat"
      style={styles.background}>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        {children}
      </KeyboardAvoidingView>
    </BackView>
  );
};

export default memo(Background);
