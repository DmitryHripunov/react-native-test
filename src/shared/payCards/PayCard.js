import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, Alert, } from 'react-native';

const cardImages = [
  { visa: require('../../../assets/img/icons/visa.png'), },
  { maestro: require('../../../assets/img/icons/maestro.png'), },
]

export const PayCard = (props) => {
  const [img] = useState(cardImages, []);

  return (

      <View style={styles.payCard}>
        <View style={styles.payCardTop}>
          {img.map((image, index) => {
            return <Image 
            key={index}
            source={image.maestro} />
          })}

          <View style={styles.payCardInfoPoints}>
            <View style={styles.payCardInfoPoint}></View>
            <View style={styles.payCardInfoPoint}></View>
          </View>

          <Text style={styles.payCardInfo}>{props.cardInfo}</Text>
        </View>

        <View style={styles.payCardBody}>
          <Text style={styles.payCardRemains}>{props.remains}</Text>

          <Text style={styles.payCardName}>{props.cardName} </Text>
        </View>

        <TouchableOpacity
          style={styles.payCardBtn}
          onPress={() => Alert.alert('Simple Button pressed')}
        >

          <Image
            style={styles.payCardBtnImg}
            source={require('../../../assets/img/icons/trash.png')}
          />
        </TouchableOpacity>
      </View>
  )
}

const styles = StyleSheet.create({

  payCard: {
    position: 'relative',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
  },

  payCardTop: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    top: 20,
    right: 16,
  },

  payCardInfo: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.5)',
  },

  payCardInfoPoints: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 2,
  },

  payCardInfoPoint: {
    width: 4,
    height: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 50,
    marginHorizontal: 2,
  },

  payCardRemains: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'interBold',
    marginBottom: 4,
    textAlign: 'center',
  },

  payCardName: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: 12,
    textAlign: 'center',
  },

  payCardBtn: {
    position: 'absolute',
    bottom: 20,
    left: 16,
    width: 44,
    height: 44,
    borderRadius: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
})