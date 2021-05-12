import React from 'react';
import { StyleSheet, ScrollView, View, } from 'react-native';
import { GalleryItem } from './GalleryItem';

export const Gallery = () => {
  return (
    <View style={styles.galleryList} >
      <ScrollView horizontal>
        <GalleryItem />

        <GalleryItem />

        <GalleryItem />
      </ScrollView>
    </View>

  )
}

const styles = StyleSheet.create({
  galleryList: {
    marginBottom: 16,
    marginLeft: 16,
  },
})