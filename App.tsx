import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';
enableScreens();

import Navigation from './src/navigation';
import { useCachedResources } from './hooks/use-cached-resources';

export default function App() {
  const loaded = useCachedResources();

  if (!loaded) return null;

  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}
