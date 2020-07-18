import React, {memo, useState} from 'react';
import {TouchableOpacity, Image, Text, View} from 'react-native';

import Background from '../../../widgets/background';
import Button from '../../../widgets/button';
import Input from '../../../widgets/textInput';

import {logo} from '../../../../config/images';
import {emailValidator, passwordValidator} from '../../../utils/helperFunction';

import styles from './styles';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});

  const _onLoginPressed = () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError) {
      setEmail({...email, error: emailError});
      setPassword({...password, error: passwordError});
      return;
    }

    navigation.navigate('dashboard');
  };

  return (
    <Background>
      <Image source={logo} style={styles.image} />
      <Input
        label="Email"
        placeholder="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({value: text, error: ''})}
        errorMessage={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <Input
        placeholder="Password"
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({value: text, error: ''})}
        error={!!password.error}
        errorMessage={password.error}
        secureTextEntry
      />

      <View style={styles.forgotPassword}>
        <TouchableOpacity onPress={() => navigation.navigate('forgotPassword')}>
          <Text style={styles.label}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>
      <Button
        title="Login"
        mode="contained"
        onPress={_onLoginPressed}
        innerStyle={styles.button}
      />
      <View style={styles.row}>
        <Text style={styles.label}>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('signup')}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

export default memo(LoginScreen);
