import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { text3 } from '../common/styles';

type Props = {
  errorMessage: string | null;
};

export default function ErrorText({ errorMessage }: Props) {
  if (!errorMessage) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.errorText}>{errorMessage}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#ffdde7',
    borderWidth: 1,
    borderColor: '#ff9dba',
    padding: 16,
    borderRadius: 4,
  },
  errorText: { ...text3, color: '#cc033e' },
});
