import React from 'react';
import {Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import BoardingScreen from './container/boardingScreens';
import LoginScreen from './container/auth/login';
import SignupScreen from './container/auth/signup';
import ForgotPasswordScreen from './container/auth/forgotPassword';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Scr() {
  return <Text>hello</Text>;
}

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Expolre"
      tabBarOptions={{
        activeTintColor: '#414757',
      }}>
      <Tab.Screen name="Expolre" component={Scr} />
      <Tab.Screen name="listings" component={Scr} />
      <Tab.Screen name="sell" component={Scr} />
      <Tab.Screen name="chat" component={Scr} />
      <Tab.Screen name="profile" component={Scr} />
    </Tab.Navigator>
  );
}

export default function Routing() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
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
        <Stack.Screen
          name="dashboard"
          component={MyTabs}
          options={{header: () => null}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
