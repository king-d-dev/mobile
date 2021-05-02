import React from 'react';
import { StyleSheet, View } from 'react-native';
import { PickedImage } from '../types';
import ImagePicker from './image-picker';
import PressableText from './pressable-text';

type Props = {
  removeImage: () => void;
  changeImage: (image: PickedImage) => void;
};

export default function ImageActions({ removeImage, changeImage }: Props) {
  return (
    <View style={styles.midSection}>
      <PressableText
        text="Remove"
        onPress={removeImage}
        style={styles.removeText}
      />

      <ImagePicker
        text="Change"
        setImage={changeImage}
        style={styles.changeText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  midSection: {
    width: 300,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  removeText: {
    color: '#cc033e',
  },
  changeText: {
    color: '#0a6cff',
  },
});
