//Ye wo Explore walii screen 

import { View, Text, Button, StyleSheet, TextInput, StatusBar, Image } from 'react-native';
import React from 'react';
import MapView from 'react-native-maps';
const SettingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBox}>
        <TextInput
          placeholder="Search here"
          placeholderTextColor="#000"
          autoCapitalize="none"
          style={{ flex: 1, padding: 0 , fontSize: 19,}}
        />
         <Image source={require('../../assets/images/find.png')} 
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 28,
                            
                        }} 
            />
      </View>

      <View style={styles.contentContainer}>
        <Text>Map </Text>
        <MapView
  style={{ flex: 1 , width: '100%', height: '100%'}}
  region={{
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  }}
  // customMapStyle={mapStyle}
/>
      </View>
    </View>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'gray',
  },

  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  t1: {
    fontSize: 25,
    color: 'white',
  },

  searchBox: {
    flexDirection: 'row',
    backgroundColor: 'white',
    width: '90%',
    alignSelf: 'center',
    borderRadius: 5,
    padding: 10,
    marginTop: 30,
    shadowColor: '#ccc',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
});