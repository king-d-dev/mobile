import { RouteProp } from '@react-navigation/core';
import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { text3 } from '../common/styles';
import { API_URL } from '../config';
import { RootNavigator } from '../navigation';

type FramedImageScreenProps = {
  route: RouteProp<RootNavigator, 'FramedImage'>;
};

// const uri =
//   'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=gleb-albovsky-sBO2-mtclIw-unsplash.jpg';

export default function FramedImageScreen({ route }: FramedImageScreenProps) {
  const {
    params: { image },
  } = route;
  const uri = API_URL + '/static/images/' + image;
  console.log('II', uri);

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Text style={styles.text}>Your framed image </Text>
        <Image
          source={{ uri }}
          style={styles.image}
          onLoadStart={() => console.log('Load start')}
          onLoadEnd={() => console.log('Load end')}
        />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    ...text3,
    fontSize: 22,
    marginBottom: 10,
    textAlign: 'center',
  },
  image: { height: 350, borderRadius: 10 },
});
