import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, View, Text, Image } from 'react-native';

export const Gallery = () => {
  return (
    <View style={styles.gallery}>
      <View style={styles.galleryWrapper}>
        <Image
          style={styles.galleryImg}
          source={require('../../../assets/img/g1.png')}
        />

        <View>
          <Text>re: Store</Text>
          <Text>Electronics</Text>

          <View>
            <LinearGradient
              // style={styles.headerBlankGradient}
              colors={['#6e45e2', '#88d3ce']}
              start={[0, .1]}
              end={[1, .4]}
            >
              <Text>15%</Text>
            </LinearGradient>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  galleryWrapper: {
    paddingTop: 8,
    paddingBottom: 16,
    paddingHorizontal: 8,
    borderRadius: 6,
    backgroundColor: '#fff',
    width: 300,
  },

  galleryImg: {
    width: 285,
    height: 160,
  },
})