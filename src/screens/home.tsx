import React, { useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ImagePicker from '../components/image-picker';
import Button from '../components/button';
import ImageActions from '../components/image-actions';
import { PickedImage } from '../types';

export default function HomeScreen() {
  const [image, setImage] = useState<PickedImage>(null);

  function removeImage() {
    setImage(null);
  }

  function publish() {}

  return (
    <SafeAreaProvider style={{ paddingTop: 16 }}>
      <View style={styles.container}>
        <StatusBar style="auto" />

        {image ? (
          <Image source={{ uri: image.uri }} style={styles.image} />
        ) : null}

        <View style={{ height: 30 }} />

        {image ? (
          <>
            <ImageActions removeImage={removeImage} changeImage={setImage} />
            <View style={{ height: 40 }} />
            <Button onPress={publish} text="publish" />
          </>
        ) : (
          <>
            <View style={{ height: 40 }} />
            <ImagePicker text="select an image to frame" setImage={setImage} />
          </>
        )}
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: { height: 300, width: 300, borderRadius: 10 },
});
