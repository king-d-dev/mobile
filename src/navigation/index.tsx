import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home';
import Links from '../screens/links';

type RootTabNavigator = {
  Home: undefined;
  Links: undefined;
};

const BottomTab = createBottomTabNavigator<RootTabNavigator>();

export default function Navigation() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Links" component={Links} />
      <BottomTab.Screen name="Home" component={HomeScreen} />
    </BottomTab.Navigator>
  );
}
