import React from 'react';

import {Input} from 'react-native-elements';

import theme from '../../../config/theme';

export default function InputView(props) {
  return (
    <Input
      labelStyle={{color: theme.colors.secondary}}
      inputContainerStyle={{color: theme.colors.secondary}}
      {...props}
    />
  );
}
