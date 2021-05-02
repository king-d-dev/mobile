import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home';
import FramedImageScreen from '../screens/framed-image';

export type RootNavigator = {
  Home: undefined;
  FramedImage: { image: string };
};

const Stack = createStackNavigator<RootNavigator>();

export default function Navigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Photo Framer' }}
      />
      <Stack.Screen
        name="FramedImage"
        component={FramedImageScreen}
        options={{ title: '' }}
      />
    </Stack.Navigator>
  );
}
