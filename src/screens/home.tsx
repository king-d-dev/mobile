import React, { useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import axios from 'axios';
import ImagePicker from '../components/image-picker';
import Button from '../components/button';
import ImageActions from '../components/image-actions';
import { PickedImage } from '../types';
import { API_URL } from '../config';
import { RootNavigator } from '../navigation';
import { StackNavigationProp } from '@react-navigation/stack';
import ErrorText from '../components/error-text';

type ServerResponse = { success: boolean; image: string };
type HomeScreenProps = {
  navigation: StackNavigationProp<RootNavigator, 'Home'>;
};

export default function HomeScreen({ navigation }: HomeScreenProps) {
  const [image, setImage] = useState<PickedImage>(null);
  const [uploading, setUploading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  function removeImage() {
    setImage(null);
  }

  async function publish() {
    if (!image) return;
    setErrorMessage(null);

    try {
      setUploading(true);
      const imageURIAsArray = image.uri.split('.');

      const { data } = await axios.post<ServerResponse>(
        API_URL + '/frame-image',
        {
          image: image.base64,
          extension: imageURIAsArray[imageURIAsArray.length - 1],
        }
      );

      navigation.navigate('FramedImage', { image: data.image });
    } catch (e) {
      setErrorMessage(e.message);
    }

    setUploading(false);
  }

  return (
    <SafeAreaProvider>
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

            <ErrorText errorMessage={errorMessage} />
            <View style={{ height: 40 }} />

            <Button loading={uploading} onPress={publish} text="publish" />
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
    paddingHorizontal: 55,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: { height: 300, width: 300, borderRadius: 10 },
});
