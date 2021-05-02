import React, { useEffect, useState } from 'react';
import { StyleSheet, Alert, View, Image, TextStyle } from 'react-native';
import * as ExpoImagePicker from 'expo-image-picker';
import { ImageInfo } from 'expo-image-picker/build/ImagePicker.types';
import Button from './button';
import PressableText from './pressable-text';

type Props = {
  setImage: (image: ImageInfo | null) => void;
  text: string;
  style?: TextStyle;
};

export default function ImagePicker({ setImage, text, style }: Props) {
  useEffect(() => {
    async function requestMediaPermission() {
      const {
        status,
      } = await ExpoImagePicker.requestMediaLibraryPermissionsAsync();

      if (status !== 'granted') {
        Alert.alert(
          'Oops',
          'Sorry, we need camera roll permissions to make this work!'
        );
      }
    }

    requestMediaPermission();
  }, []);

  const pickImage = async () => {
    let result = await ExpoImagePicker.launchImageLibraryAsync({
      mediaTypes: ExpoImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
      aspect: [4, 3],
      //   base64: true,
    });

    console.log('RRR', result);

    if (!result.cancelled) {
      setImage(result);
    }
  };

  return <PressableText text={text} onPress={pickImage} style={style} />;
}
