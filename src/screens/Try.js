import React, { useState, useEffect, useRef } from 'react';
import {View,Text,ScrollView,StatusBar,TouchableOpacity,Image, ImageBackground, StyleSheet,TextInput,FlatList,SafeAreaView,  Animated } from 'react-native';
import { useTheme } from '@react-navigation/native';
import Swiper from 'react-native-swiper';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import axios from 'axios';
import { Card } from 'react-native-elements';
import { BlurView } from 'expo-blur';


const Try = ({navigation}) => {
    const [searchLocation, setSearchLocation] = useState('');
  const [restaurants, setRestaurants] = useState([]);
  const apiKey = 'AIzaSyBaXNfik0Mi1P24_467aCFoak_7PWWjvQY'; 

  useEffect(() => {
    if (searchLocation) {
      fetchNearbyRestaurants();
    }
  }, [searchLocation]);

  const handleSearch = () => {
    if (searchLocation) {
      fetchNearbyRestaurants();
    }
  };

  const fetchNearbyRestaurants = async () => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${searchLocation}&key=${apiKey}`
      );

      if (response.data.predictions && response.data.predictions.length > 0) {
        const city = response.data.predictions[0].description;
        const restaurantsResponse = await axios.get(
          `https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+in+${city}&key=${apiKey}`
        );

        if (restaurantsResponse.data.results) {
          const sortedRestaurants = restaurantsResponse.data.results.sort((a, b) => b.rating - a.rating);
          const topRestaurants = sortedRestaurants.slice(0, 5);
          setRestaurants(topRestaurants);
        }
      }
    } catch (error) {
      console.error('Error fetching restaurants:', error);
    }
  };

  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [animatedValue]);

  const translateY = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-50, 0], // Adjust the value based on your needs
  });


  return (
    <ImageBackground source={require('../../assets/images/food9.jpg')} style={styles.backgroundImage}>
    <View style={styles.container}>  

   <Animated.Text style={[styles.title, { transform: [{ translateY }] }]}>
        Search Top Restaurants
      </Animated.Text>

     <View style={styles.searchContainer}>
        <GooglePlacesAutocomplete
          placeholder="Enter your City"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
            setSearchLocation(data.description);
          }}
          query={{
            key: apiKey,
            language: 'en',
          }}
          styles={{
            textInputContainer: {
              width: '100%',
            },
            description: {
              fontWeight: 'bold',
            },
          }}
          fetchDetails
          enablePoweredByContainer={false}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>

      {/* Display top-rated restaurants */}
      <View style={styles.verticalContainer}>
      <FlatList
          data={restaurants}
          keyExtractor={(item) => item.place_id}
          renderItem={({ item }) => (
            <TouchableOpacity
            onPress={async () => {
  const detailsResponse = await axios.get(
    `https://maps.googleapis.com/maps/api/place/details/json?place_id=${item.place_id}&key=${apiKey}`
  );

  navigation.navigate('CardDetails', {
    restaurant: item,
    details: detailsResponse.data.result,
  });
}}            >
              <Card containerStyle={styles.restaurantCard}>
                <Image
                  source={{
                    uri: item.photos && item.photos.length > 0
                      ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${item.photos[0].photo_reference}&key=${apiKey}`
                      : 'https://via.placeholder.com/150',
                  }}
                  style={styles.restaurantImage}
                />
                <Text style={styles.restaurantName}>{item.name}</Text>
                <Text style={styles.restaurantRating}>
                  Rating: {item.rating} ({item.user_ratings_total || 0} reviews)
                </Text>
                <Text style={styles.restaurantDescription}>{item.formatted_address}</Text>
              </Card>
            </TouchableOpacity>
          )}
        />
      </View>
      
    </View>
    </ImageBackground>

  )
}

export default Try;

const styles = StyleSheet.create({
    container: {
        flex: 1,
  //      backgroundColor:'#FCFC5C' 
    },

    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
      },

    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 15,
        color: 'white',
        marginTop: 40,
        textAlign: 'center',
      },

     //search box
     searchContainer: {
        flexDirection: 'row',
        marginHorizontal: 40, // Increase this value to adjust the width
        marginTop: 10,
      },
      textInput: {
        flex: 1,
        backgroundColor: 'white',
        height: 40,
        marginRight: 10,
        padding: 10,
        borderRadius: 5,
      },
      searchButton: {
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 5,
       
      },
      searchButtonText: {
        color: 'white',
        fontSize: 16,
      },
    
      cardsWrapper: {
        margin: 10,
      },
    
      // Restaurant card styles
      verticalContainer: {
        margin: 10,
      paddingBottom: 130,
      },
    
      horizontalContainer: {
        flexDirection: 'row',
        marginBottom: 10,
      },
    
      restaurantCard: {
        width: '95%', 
        height: 300,
        marginVertical: 10, 
        marginBottom: 10,
        alignSelf: 'center', 
        borderRadius: 10,
        paddingHorizontal: 10, 
      },

      restaurantImage: {
        width: '100%',
        height: 150,
        borderRadius: 10, 
      },
      
      restaurantName: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10, 
      },
      
      restaurantRating: {
        fontWeight: 'bold',
        fontSize: 17,
        marginTop: 5, 
      },
      
      restaurantDescription: {
        fontSize: 15,
        marginVertical: 5,
      },

      sectionHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 16,
        marginBottom: 8,
      },
    });