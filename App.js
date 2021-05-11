import { StatusBar } from 'expo-status-bar';

import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { Header } from './src/components/header/Header';
import { Gallery } from './src/components/gallery/Gallery';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />

      <Text style={styles.title}> My accounts</Text>

      <Gallery />

      <StatusBar style="auto" />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e7e6ec',
    paddingHorizontal: 16,
    paddingTop: 10,
  },

  title: {
    fontWeight: '600',
    fontSize: 24,
    color: '#0C0C0E',
    marginBottom: 24,
  }
});
