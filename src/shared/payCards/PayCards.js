import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, ScrollView, View, Text, TouchableOpacity, Image, Alert } from 'react-native';
import { PayCard } from './PayCard';

export const PayCards = () => {
  return (
    <View>
      <TouchableOpacity
        style={styles.payCardsHeader}
        onPress={() => Alert.alert('Simple Button pressed')}
      >
        <Text style={styles.payCardsHeaderTitle}>Barclays bank</Text>

        <Image
          style={styles.payCardsHeaderImg}
          source={require('../../../assets/img/icons/arrowTop.png')}
        />
      </TouchableOpacity>
      <View style={styles.payCards} >
        <ScrollView horizontal>
          <LinearGradient
            style={styles.payCardGradient}
            colors={['#1E1E1E', '#575757']}
            start={[0, 0.7]}
            end={[0.7, 1]}
          >
            <PayCard
              cardInfo='4455'
              remains='$84,000.54'
              cardName='Tinkoff Black'
            />
          </LinearGradient>


          <LinearGradient
            style={styles.payCardGradient}
            colors={['#6A89FD', '#50A2FF']}
            start={[0, 0.08]}
            end={[0.08, 1]}
          >
            <PayCard
              cardInfo='5444'
              remains='$84'
              cardName='Tinkoff Black'
            />
          </LinearGradient>

        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  payCards: {
    marginBottom: 16,
    marginLeft: 16,
  },

  payCardGradient: {
    width: 195,
    height: 280,
    borderRadius: 10,
    marginRight: 16,
  },


  payCardsHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 16,
    marginBottom: 30,
  },

  payCardsHeaderImg: {
    display: 'flex',
    alignItems: 'center',
  },

  payCardsHeaderTitle: {
    color: '#0C0C0E',
    fontSize: 16,
    fontFamily: 'interBold',
  },
})