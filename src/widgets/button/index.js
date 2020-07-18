import React from 'react';
import {Button} from 'react-native-elements';

import styles from './styles';

export default function ButtonView(props) {
  const buttonStyle = {...styles.button, ...props.innerStyle};
  return <Button buttonStyle={buttonStyle} {...props} />;
}
