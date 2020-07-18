import React, {memo, useState} from 'react';
import {TouchableOpacity, Image, Text} from 'react-native';

import Background from '../../../widgets/background';
import Button from '../../../widgets/button';
import Input from '../../../widgets/textInput';

import {logo} from '../../../../config/images';
import {emailValidator} from '../../../utils/helperFunction';

import styles from './styles';

const ForgotPasswordScreen = ({navigation}) => {
  const [email, setEmail] = useState({value: '', error: ''});

  const _onSendPressed = () => {
    const emailError = emailValidator(email.value);

    if (emailError) {
      setEmail({...email, error: emailError});
      return;
    }

    navigation.navigate('login');
  };

  return (
    <Background>
      <Image source={logo} style={styles.image} />
      <Input
        placeholder="E-mail address"
        label="E-mail address"
        returnKeyType="done"
        value={email.value}
        onChangeText={(text) => setEmail({value: text, error: ''})}
        errorMessage={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <Button
        title="Send Reset Instructions"
        mode="contained"
        onPress={_onSendPressed}
        innerStyle={styles.button}
      />
      <TouchableOpacity
        style={styles.back}
        onPress={() => navigation.navigate('login')}>
        <Text style={styles.label}>← Back to login</Text>
      </TouchableOpacity>
    </Background>
  );
};

export default memo(ForgotPasswordScreen);
