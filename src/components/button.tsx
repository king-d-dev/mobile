import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { text3 } from '../common/styles';
type Props = {
  text: string;
  onPress: () => void;
};

export default function Button({ onPress, text }: Props) {
  return (
    <TouchableOpacity style={styles.textContainer} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    backgroundColor: '#d3ffda',
    borderWidth: 1,
    borderColor: '#5eca00',
    padding: 16,
    borderRadius: 50,
    width: 120,
  },
  text: {
    ...text3,
    color: '#2c5e00',
    textAlign: 'center',
  },
});
