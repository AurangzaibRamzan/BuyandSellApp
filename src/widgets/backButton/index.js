import React, {memo} from 'react';
import {TouchableOpacity, StyleSheet, View} from 'react-native';
import {Icon, Text} from 'react-native-elements';
import {getStatusBarHeight} from '../../utils/statusBarHeight';

const BackButton = ({goBack, title}) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={goBack}>
      <Icon name="arrow-back" type="ionicon" style={styles.image} />
    </TouchableOpacity>
    <Text style={styles.text}>{title || ''}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 10 + getStatusBarHeight(),
    left: 10,
    flexDirection: 'row',
  },
  image: {
    width: 24,
    height: 24,
  },
  text: {fontSize: 19, fontWeight: '600', paddingLeft: 20},
});

export default memo(BackButton);
