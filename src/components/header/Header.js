import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, View, Text, TouchableOpacity, Alert, Image } from 'react-native';

export const Header = () => {
  return (
    <View style={styles.header}>

      <View style={styles.headerInfo}>
        <Image
          style={styles.headerInfoImg}
          source={require('../../../assets/img/icons/clock.png')}
        />

        <Text style={styles.headerInfoText}>$1,340.10</Text>
      </View>

      <View style={styles.headerBlank}>
        <Text style={styles.headerBlankText}>Add bank</Text>

        <View style={styles.headerBlankBtnContainer}>
          <LinearGradient
            style={styles.headerBlankGradient}
            colors={['#6e45e2', '#88d3ce']}
            start={[0, .1]}
            end={[1, .4]}
          >

            <TouchableOpacity
              style={styles.headerBlankBtn}
              onPress={() => Alert.alert('Simple Button pressed')}
            >

              <Image
                style={styles.headerBlankImg}
                source={require('../../../assets/img/icons/plus.png')}
              />
            </TouchableOpacity>
          </LinearGradient>
        </View>

        <Text style={styles.headerBlankCaption}>2</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 24,
    paddingBottom: 40,
  },

  headerInfo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 30,
    paddingBottom: 8,
    paddingTop: 8,
    paddingLeft: 12,
    paddingRight: 12,
    shadowColor: 'black',
    shadowOpacity: .08,
    elevation: 30,
  },

  headerInfoText: {
    fontWeight: '500',
    fontSize: 14,
  },

  headerInfoImg: {
    width: 24,
    height: 24,
    marginRight: 4,
  },

  headerBlank: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  headerBlankBtnContainer: {
    marginRight: 6,
    marginLeft: 6,
  },

  headerBlankGradient: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },

  headerBlankBtn: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerBlankImg: {
    width: 24,
    height: 24,
  },

  headerBlankCaption: {
    borderRadius: 50,
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#8C93A2',
    color: '#8C93A2',
    textAlign: 'center',
  },
})