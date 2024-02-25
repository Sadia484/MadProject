import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet,ScrollView, TouchableOpacity } from 'react-native';
import MapView, { Callout, Marker } from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import axios from 'axios';
import { Card, Image } from 'react-native-elements';


import { useNavigation } from '@react-navigation/native';

const SettingScreen = ({ navigation }) => {

  const apiKey = 'AIzaSyBaXNfik0Mi1P24_467aCFoak_7PWWjvQY';

  const mapRef = useRef(null);
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  });
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetchNearbyRestaurants(region.latitude, region.longitude);
  }, [region]);

  const handlePlaceSelection = (data, details) => {
    const { lat, lng } = details.geometry.location;
    const newRegion = {
      latitude: lat,
      longitude: lng,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    };
    setRegion(newRegion);
    mapRef.current?.animateToRegion(newRegion, 1000);
  };

  const fetchNearbyRestaurants = async (latitude, longitude) => {
    const radius = 1000;

    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=${radius}&key=${apiKey}&type=restaurant`
      );

      const detailedRestaurants = await Promise.all(
        response.data.results.map(async (restaurant) => {
          const detailResponse = await axios.get(
            `https://maps.googleapis.com/maps/api/place/details/json?place_id=${restaurant.place_id}&key=${apiKey}`
          );
          return { ...restaurant, details: detailResponse.data.result };
        })
      );

      setRestaurants(detailedRestaurants);
    } catch (error) {
      console.error('Error fetching restaurants:', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <GooglePlacesAutocomplete
          placeholder="Search a Restaurant"
          onPress={handlePlaceSelection}
          query={{
            key: apiKey,
            language: 'en',
          }}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
          styles={styles.textInputContainer}
          fetchDetails={true}
        />
      </View>

      <View style={styles.contentContainer}>
        <MapView
          ref={mapRef}
          style={{ flex: 1, width: '100%', height: '100%' }}
          region={region}
        >
          <Marker
            coordinate={{
              latitude: region.latitude,
              longitude: region.longitude,
            }}
            title="Selected Location"
            description="This is the selected location"
          />
        </MapView>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.cardContainer}>
  {restaurants.map((restaurant) => (
    <TouchableOpacity key={restaurant.place_id} onPress={() => navigation.navigate('RestaurantDetails', { restaurant })}>
      <Card containerStyle={styles.restaurantCard}>
        <Image
          source={{
            uri: restaurant.photos && restaurant.photos.length > 0
              ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${restaurant.photos[0].photo_reference}&key=${apiKey}`
              : null,
          }}
          style={styles.restaurantImage}
        />
        <Text style={styles.restaurantName}>{restaurant.name}</Text>
        <Text style={styles.restaurantRating}>
          Rating: {restaurant.rating} ({restaurant.user_ratings_total} reviews)
        </Text>
        <Text style={styles.restaurantDescription}>{restaurant.vicinity}</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.imageContainer}>
          {restaurant.photos &&
            restaurant.photos.slice(1, 4).map((photo, index) => (
              <Image
                key={index}
                source={{
                  uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photo.photo_reference}&key=${apiKey}`,
                }}
                style={styles.restaurantImageSmall}
              />
            ))}
        </ScrollView>
      </Card>
    </TouchableOpacity>
  ))}
</ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },

  contentContainer: {
    flex: 1,
  },

  searchContainer: {
    position: 'absolute',
    top: 40,
    marginTop: 20,
    left: 0,
    right: 0,
    zIndex: 1,
    paddingTop: 10,
  
  },

  textInputContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    height: 40,
    marginHorizontal: 20,
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },

  cardContainer: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    zIndex: 2,
  },

  restaurantCard: {
    width: 250,
    height: 300,
    marginRight: 10,
  },

  restaurantImage: {
    width: '100%',
    height: 150,
  },

  restaurantImageSmall: {
    width: 80,
    height: 80,
    marginRight: 5,
  },

  restaurantName: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  restaurantRating: {
    fontWeight: 'bold',
    fontSize: 17,
  },

  restaurantDescription: {
    fontSize: 15,
    marginVertical: 5,
  },

  imageContainer: {
    marginTop: 5,
  },
});

export default SettingScreen; 