import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Alert, } from 'react-native';

export const Footer = () => {
  return (
    <View style={styles.footer}>

      <TouchableOpacity style={styles.footerBtn}>
        <Image
          style={styles.footerImg}
          source={require('../../../assets/img/icons/f1.png')}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.footerBtn}>
        <Image
          style={styles.footerImg}
          source={require('../../../assets/img/icons/f2.png')}
        />

        <Text style={styles.footerActiveText}>Accounts</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.footerBtn}>
        <Image
          style={styles.footerImg}
          source={require('../../../assets/img/icons/f3.png')}
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },

  footerBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  footerActiveText: {
    color: '#0C0C0E',
    fontSize: 12,
    textAlign: 'center',
    fontFamily: 'interBold',
  },
})