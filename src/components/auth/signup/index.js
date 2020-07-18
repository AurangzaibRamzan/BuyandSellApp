import React, {memo, useState} from 'react';
import {TouchableOpacity, Image, Text, View} from 'react-native';

import Background from '../../../widgets/background';
import Button from '../../../widgets/button';
import Input from '../../../widgets/textInput';

import {logo} from '../../../../config/images';
import {
  emailValidator,
  passwordValidator,
  nameValidator,
} from '../../../utils/helperFunction';

import styles from './styles';

const RegisterScreen = ({navigation}) => {
  const [name, setName] = useState({value: '', error: ''});
  const [email, setEmail] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});

  const _onSignUpPressed = () => {
    const nameError = nameValidator(name.value);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError || nameError) {
      setName({...name, error: nameError});
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
        label="Name"
        placeholder="Name"
        returnKeyType="next"
        value={name.value}
        onChangeText={(text) => setName({value: text, error: ''})}
        error={!!name.error}
        errorMessage={name.error}
      />
      <Input
        label="Email"
        placeholder="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({value: text, error: ''})}
        error={!!email.error}
        errorMessage={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <Input
        label="Password"
        placeholder="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({value: text, error: ''})}
        error={!!password.error}
        errorMessage={password.error}
        secureTextEntry
      />
      <Button
        title="Signup"
        mode="contained"
        onPress={_onSignUpPressed}
        innerStyle={styles.button}
      />
      <View style={styles.row}>
        <Text style={styles.label}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('login')}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

export default memo(RegisterScreen);
