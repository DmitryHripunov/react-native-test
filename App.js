import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { Header } from './src/shared/header/Header';
import { Gallery } from './src/shared/gallery/Gallery';

import { useFonts } from 'expo-font';

export default function App() {
  const [loaded] = useFonts({
    interRegular: require('./assets/fonts/Inter-Regular.ttf'),
    interBold: require('./assets/fonts/Inter-SemiBold.ttf'),
  });
  
  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Header />

      <Text style={styles.title}> My accounts</Text>

      <Gallery />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e7e6ec',
    paddingTop: 10,
  },

  title: {
    fontFamily: 'interBold',
    fontSize: 24,
    color: '#0C0C0E',
    marginBottom: 24,
    paddingHorizontal: 16,
  }
});
