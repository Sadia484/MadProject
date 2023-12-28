import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Eww = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cardsWrapper}>
        <View style={styles.recentlyViewedWrapper}>
          <Text style={styles.recentlyViewedText}>List of Top Rated Places</Text>
        </View>

<Text></Text>
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image source={require('../../assets/images/food6.jpg')} resizeMode="cover" style={styles.cardImg} />
          </View>

          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Ben-T Cafe</Text>
            <Text style={styles.cardDetails}>Have the amazing food experience of delicious and mouth-watering dishes, made with love</Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image source={require('../../assets/images/food2.jpg')} resizeMode="cover" style={styles.cardImg} />
          </View>

          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Arcadian Cafe</Text>
            <Text style={styles.cardDetails}>Have the amazing food experience of delicious and mouth-watering dishes, made with love</Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image source={require('../../assets/images/food3.jpg')} resizeMode="cover" style={styles.cardImg} />
          </View>

          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Novu Cafe</Text>
            <Text style={styles.cardDetails}>Have the amazing food experience of delicious and mouth-watering dishes, made with love</Text>
          </View>
        </View>

        <Text></Text>
        <Text></Text>
            <Text style={styles.tt}>(The Data of this screen will be fetched through API!!)</Text>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20, // Added paddingTop to move content below the status bar
    backgroundColor:'#fff',
  },

  cardsWrapper: {
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
  },

  recentlyViewedWrapper: {
    alignSelf: 'flex-start',
  },

  recentlyViewedText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#333',
  },

  card: {
    height: 100,
    marginVertical: 10,
    flexDirection: 'row',
    shadowColor: '#999',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },

  cardImgWrapper: {
    flex: 1,
  },

  cardImg: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },

  cardInfo: {
    flex: 2,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: '#fff',
  },

  cardTitle: {
    fontWeight: 'bold',
    fontSize: 18,
  },

  cardDetails: {
    fontSize: 12,
    color: '#444',
  },

  tt : {
    fontWeight: 'bold',
    fontSize: 27,
  }
});

export default Eww;