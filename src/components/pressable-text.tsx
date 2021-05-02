import React from 'react';
import { TouchableOpacity, StyleSheet, Text, TextStyle } from 'react-native';
import { text3 } from '../common/styles';

type Props = {
  text: string;
  onPress: () => void;
  style?: TextStyle;
};

export default function PressableText({ onPress, text, style }: Props) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={[styles.text, style]}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: { ...text3, color: '#2c5e00' },
});
