import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, View, Text, Image, TouchableOpacity, Alert, SafeAreaView, SectionList, } from 'react-native';

const ITEMS = [
  {
    title: 'Store',
    subTitle: 'Electronics',
    img: require('../../../assets/img/g1.png'),
  },
  {
    title: 'Restore',
    subTitle: 'Arts',
    img: require('../../../assets/img/g1.png'),
  },
];

export const GalleryItem = ({ title, subTitle, img }) => (
  <View style={styles.galleryItem}>
    <View style={styles.galleryImgWrapper}>
      <Image
        style={styles.galleryImg}
        source={require('../../../assets/img/g1.png')}
      />

      <TouchableOpacity
        style={styles.galleryActionLikeBtn}
        onPress={() => Alert.alert('Simple Button pressed')}
      >

        <Image
          style={styles.galleryActionLikeImg}
          source={require('../../../assets/img/icons/heart.png')}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.galleryActionDeleteBtn}
        onPress={() => Alert.alert('Simple Button pressed')}
      >

        <Image
          style={styles.galleryActionDeleteImg}
          source={require('../../../assets/img/icons/plus.png')}
        />
      </TouchableOpacity>
    </View>

    <View style={styles.galleryInfoWrapper}>
      <View style={styles.galleryTextWrapper}>
        <Text style={styles.galleryTitle}>re: Store</Text>

        <Text style={styles.gallerySubTitle}>Electronics</Text>
      </View>

      <View style={styles.galleryCaption}>
        <LinearGradient
          style={styles.galleryCaptionGradient}
          colors={['#6e45e2', '#88d3ce']}
          start={[0, .1]}
          end={[1, .4]}
        >
          <Text style={styles.gradientText}>15%</Text>
        </LinearGradient>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  galleryItem: {
    paddingTop: 8,
    paddingBottom: 16,
    paddingHorizontal: 8,
    borderRadius: 6,
    backgroundColor: '#fff',
    width: 300,
    marginRight: 16,
  },

  galleryImgWrapper: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  galleryActionDeleteBtn: {
    position: 'absolute',
    top: 12,
    right: 24,
    width: 34,
    height: 34,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },

  galleryActionLikeBtn: {
    position: 'absolute',
    top: 12,
    left: 24,
    width: 34,
    height: 34,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },

  galleryActionDeleteImg: {
  },

  galleryImg: {
    width: 320,
    height: 170,
    borderRadius: 6,
    margin: 'auto',
  },

  galleryInfoWrapper: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },

  galleryTitle: {
    fontFamily: 'interBold',
    fontSize: 24,
  },

  gallerySubTitle: {
    fontSize: 14,
    color: '#8C93A2',
  },

  gradientText: {
    color: '#fff',
    fontFamily: 'interBold',
  },

  galleryCaptionGradient: {
    borderRadius: 30,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
})