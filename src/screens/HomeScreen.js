import React, { useState, useEffect } from 'react';
import {View,Text,ScrollView,StatusBar,TouchableOpacity,Image,StyleSheet,TextInput,FlatList,SafeAreaView, } from 'react-native';
import { useTheme } from '@react-navigation/native';
import Swiper from 'react-native-swiper';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import axios from 'axios';
import { Card } from 'react-native-elements';

//khud se
import { useNavigation } from '@react-navigation/native';


//import Swiper from 'react-native-swiper';


const HomeScreen = ({navigation}) => {

  const { colors } = useTheme();
  const theme = useTheme();
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


  return (
    <ScrollView style={styles.container}>

        <StatusBar barStyle={theme.dark? 'light-content' : 'dark-content'} />

       <View style={styles.sliderContainer} >
           <Swiper autoplay horizontal={false} height={200} activeDotColor='black'>

           <View style={styles.slide}>
            <Image source={require('../../assets/images/food2.jpg')}
                resizeMode="cover"
                style={styles.sliderImage}
            />
         </View>

    
           <View style={styles.slide}>
            <Image source={require('../../assets/images/food3.jpg')}
                resizeMode="cover"
                style={styles.sliderImage}
            />
         </View>


           <View style={styles.slide}>
            <Image source={require('../../assets/images/food1.jpg')}
                resizeMode="cover"
                style={styles.sliderImage}
            />
         </View>

         <View style={styles.slide}>
            <Image source={require('../../assets/images/food4.jpg')}
                resizeMode="cover"
                style={styles.sliderImage}
            />
         </View>

         <View style={styles.slide}>
            <Image source={require('../../assets/images/food5.jpg')}
                resizeMode="cover"
                style={styles.sliderImage}
            />
         </View>
           </Swiper>
        </View>

        <View style={styles.categoryContainer}>
        <TouchableOpacity style={styles.categoryBtn} onPress={() => navigation.navigate('Eww')}>

           <View style={styles.categoryIcon}>        
              <Image source={require('../../assets/images/forkk.png')} size={20} style={styles.forkk} />    
           </View>
           <Text style={styles.categoryBtnTxt}>Restaurant</Text>
           </TouchableOpacity>

           <TouchableOpacity style={styles.categoryBtn} onPress= {() => navigation.navigate('Eww')}>
           <View style={styles.categoryIcon}>        
               <Image source={require('../../assets/images/bur.jpg')} size={20} style={styles.forkk} />
                   </View>
                <Text style={styles.categoryBtnTxt}>Fast Food</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.categoryBtn} onPress= {() => navigation.navigate('Eww')}>
           <View style={styles.categoryIcon}>        
               <Image source={require('../../assets/images/cup.png')} size={20} style={styles.forkk} />
                   </View>
                   <Text style={styles.categoryBtnTxt}>Snack Center</Text>
            </TouchableOpacity>

        </View>

        <View style={[styles.categoryContainer, {marginTop: 5}]}>

            <TouchableOpacity style={styles.categoryBtn} onPress= {() => navigation.navigate('Eww')}>
           <View style={styles.categoryIcon}>        
               <Image source={require('../../assets/images/coffeee.png')} size={20} style={styles.forkk} />
                   </View>
                   <Text style={styles.categoryBtnTxt}>Hotels</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.categoryBtn} onPress= {() => navigation.navigate('Eww')}>
           <View style={styles.categoryIcon}>        
               <Image source={require('../../assets/images/donut.jpg')} size={20} style={styles.forkk} />
                   </View>
                   <Text style={styles.categoryBtnTxt}>Cupcakes</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.categoryBtn} onPress= {() => navigation.navigate('Eww')}>
           <View style={styles.categoryIcon}>        
               <Image source={require('../../assets/images/chamcha.png')} size={20} style={styles.forkk} />
                   </View>
                   <Text style={styles.categoryBtnTxt}>Dineouts</Text>
            </TouchableOpacity>

        </View>
        <View style={styles.searchContainer}>
        <GooglePlacesAutocomplete
          placeholder="Enter your location"
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
    </ScrollView>
  );
};


export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
       
        backgroundColor:'#FCFC5C'
    },

    //slider
    sliderContainer: {
        height: 208,
        width: '90%',
        marginTop: 25,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 10,
      },
    
      wrapper: {},
    
      slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent',
        borderRadius: 8,
      },

      
      sliderImage: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        borderRadius: 8,
      },


      //food images icons
        forkk: {
            width: 50, 
            height: 50, 
          },
      
          categoryContainer: {
            flexDirection: 'row',
            width: '90%',
            alignSelf: 'center',
            marginTop: 25,
            marginBottom: 10,
          },
          categoryBtn: {
            flex: 1,
            width: '30%',
            marginHorizontal: 0,
            alignSelf: 'center',
          },
          categoryIcon: {
            borderWidth: 0,
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
            width: 70,
            height: 70,
            backgroundColor: 'black',
            borderRadius: 50,
           
          },

          categoryBtnTxt: {
            alignSelf: 'center',
            marginTop: 7,
            color: 'black',
            fontSize: 15,
          },

          //cards
          searchContainer: {
            flexDirection: 'row',
            margin: 10,
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
            backgroundColor: 'blue',
            padding: 10,
            borderRadius: 5,
          },
          searchButtonText: {
            color: 'white',
          },
        
          cardsWrapper: {
            margin: 10,
          },
        
          // Restaurant card styles
          verticalContainer: {
            margin: 10,
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
            marginTop: 10, // Add margin to separate name from the image
          },
          
          restaurantRating: {
            fontWeight: 'bold',
            fontSize: 17,
            marginTop: 5, // Add margin to separate rating from the name
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
        