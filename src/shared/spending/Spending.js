import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, Alert } from 'react-native';


const months = [
  { January: 'January' },
  { February: 'February' },
  { March: 'March' },
  { April: 'April' },
  { May: 'May' },
  { June: 'June' },
  { July: 'July' },
  { August: 'August' },
  { September: 'September' },
  { October: 'October' },
  { November: 'November' },
  { December: 'December' },
];

export const Spending = () => {
  const [month, setMonth] = useState(months, []);

  return (
    <View style={styles.spending}>
      <View style={styles.spendingPriceWrapper}>
        <Text style={styles.spendingPriceTitle}>Spendings</Text>

        <Text style={styles.spendingPrice}>$ 137,000</Text>
      </View>

      <View style={styles.spendingDateWrapper}>
        <TouchableOpacity
          style={styles.spendingDateBtn}
          onPress={() => Alert.alert('Simple Button pressed')}
        >

          <Image
            style={styles.spendingDateImg}
            source={require('../../../assets/img/icons/arrowLeft.png')}
          />
        </TouchableOpacity>
        
        <View style={styles.spendingTextWrapper}>
          {month.map((item, index) => {
            return <Text
              style={styles.spendingDate}
              key={index}
            >
              {item.December}
            </Text>
          })}
        </View>

        <TouchableOpacity
          style={styles.spendingDateBtn}
          onPress={() => Alert.alert('Simple Button pressed')}
        >

          <Image
            style={styles.spendingDateImg}
            source={require('../../../assets/img/icons/arrowRight.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  spending: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    paddingHorizontal: 16,
    marginBottom: 24,
  },

  spendingPriceWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#fff',
    width: '100%',
    borderTopEndRadius: 6,
    borderTopLeftRadius: 6,
    padding: 16,
    shadowColor: '#e9e9e9',
    elevation: 20,
    shadowOpacity: 0.1,
  },

  spendingPriceTitle: {
    color: '#5685fd',
    fontFamily: 'interBold',
    fontSize: 14,
  },

  spendingPrice: {
    color: '#0C0C0E',
    fontFamily: 'interBold',
    fontSize: 16,
  },

  spendingDateWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#F8F8F8',
    width: '100%',
    padding: 16,
    borderBottomEndRadius: 6,
    borderBottomLeftRadius: 6,
    shadowColor: "#e9e9e9",
    elevation: 15,
    shadowOpacity: 0.1,
  },

  spendingTextWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  spendingDate: {
    color: '#0C0C0E',
    fontSize: 16,
    fontFamily: 'interBold',
  },
})