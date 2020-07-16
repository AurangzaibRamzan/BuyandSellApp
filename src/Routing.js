import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import BoardingScreen from './container/boardingScreens';

const Stack = createStackNavigator();

export default function Routing() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="boarding"
          component={BoardingScreen}
          options={{header: () => null}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
