import React from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Explore from '../container/explore';
import Chat from '../container/chat';
import Sell from '../container/sell';
import Listings from '../container/listings';
import Profile from '../container/profile';
import theme from '../../config/theme';
import style from './styles';

const Tab = createBottomTabNavigator();

function TabBar() {
  return (
    <Tab.Navigator
      initialRouteName="Explore"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Explore') {
            iconName = focused ? 'text-box-search' : 'text-box-search-outline';
            return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={color}
              />
            );
          } else if (route.name === 'Listings') {
            iconName = focused ? 'view-list' : 'view-list-outline';
            return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={color}
              />
            );
          } else if (route.name === 'Sell') {
            iconName = focused
              ? 'ios-add-circle-sharp'
              : 'ios-add-circle-outline';
            return (
              <View style={style.roundIcon}>
                <Ionicons name={iconName} size={size + 12} color={color} />
              </View>
            );
          } else if (route.name === 'Chat') {
            iconName = focused ? 'chatbubbles-sharp' : 'chatbubbles-outline';
            return <Ionicons name={iconName} size={size} color={color} />;
          } else {
            iconName = focused ? 'ios-person-sharp' : 'ios-person-outline';
            return <Ionicons name={iconName} size={size} color={color} />;
          }
        },
      })}
      tabBarOptions={{
        showLabel: true,
        activeTintColor: theme.colors.primary,
      }}>
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Listings" component={Listings} />
      <Tab.Screen name="Sell" component={Sell} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default TabBar;
