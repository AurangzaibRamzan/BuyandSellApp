import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import BoardingScreen from '../container/boardingScreens';
import LoginScreen from '../container/auth/login';
import SignupScreen from '../container/auth/signup';
import ForgotPasswordScreen from '../container/auth/forgotPassword';

import TabBar from './tabBar';

const Stack = createStackNavigator();

export default function Routing() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="dashboard"
          component={TabBar}
          options={{header: () => null}}
        />
        <Stack.Screen
          name="boarding"
          component={BoardingScreen}
          options={{header: () => null}}
        />
        <Stack.Screen
          name="login"
          component={LoginScreen}
          options={{header: () => null}}
        />
        <Stack.Screen
          name="signup"
          component={SignupScreen}
          options={{header: () => null}}
        />
        <Stack.Screen
          name="forgotPassword"
          component={ForgotPasswordScreen}
          options={{header: () => null}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
