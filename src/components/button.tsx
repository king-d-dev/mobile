import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { text3 } from '../common/styles';
type Props = {
  text: string;
  onPress: () => void;
  loading: boolean;
};

export default function Button({ onPress, text, loading = false }: Props) {
  return (
    <TouchableOpacity
      disabled={loading}
      style={[styles.container, { opacity: loading ? 0.5 : 1 }]}
      onPress={onPress}
    >
      {loading === true ? (
        <ActivityIndicator />
      ) : (
        <Text style={styles.text}>{text}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
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
