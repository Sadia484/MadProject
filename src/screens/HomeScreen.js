import React, { useState, useEffect } from 'react';
import {View,Text,ScrollView,StatusBar,TouchableOpacity,Image,StyleSheet,TextInput,FlatList,SafeAreaView, } from 'react-native';
import Swiper from 'react-native-swiper';
import { Card } from 'react-native-elements';
//import Video from 'react-native-video';


//khud se
import { useNavigation } from '@react-navigation/native';

const HomeScreen = ({navigation}) => {
 
  return (
    <ScrollView style={styles.container}>
        
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
        <TouchableOpacity style={styles.categoryBtn} onPress={() => navigation.navigate('Explore')}>

           <View style={styles.categoryIcon}>        
              <Image source={require('../../assets/images/forkk.png')} size={20} style={styles.forkk} />    
           </View>
           <Text style={styles.categoryBtnTxt}>Restaurant</Text>
           </TouchableOpacity>

           <TouchableOpacity style={styles.categoryBtn} onPress= {() => navigation.navigate('Explore')}>
           <View style={styles.categoryIcon}>        
               <Image source={require('../../assets/images/bur.jpg')} size={20} style={styles.forkk} />
                   </View>
                <Text style={styles.categoryBtnTxt}>Fast Food</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.categoryBtn} onPress= {() => navigation.navigate('Explore')}>
           <View style={styles.categoryIcon}>        
               <Image source={require('../../assets/images/cup.png')} size={20} style={styles.forkk} />
                   </View>
                   <Text style={styles.categoryBtnTxt}>Snack Center</Text>
            </TouchableOpacity>

        </View>

        <View style={[styles.categoryContainer, {marginTop: 5}]}>

            <TouchableOpacity style={styles.categoryBtn} onPress= {() => navigation.navigate('Explore')}>
           <View style={styles.categoryIcon}>        
               <Image source={require('../../assets/images/coffeee.png')} size={20} style={styles.forkk} />
                   </View>
                   <Text style={styles.categoryBtnTxt}>Hotels</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.categoryBtn} onPress= {() => navigation.navigate('Explore')}>
           <View style={styles.categoryIcon}>        
               <Image source={require('../../assets/images/donut.jpg')} size={20} style={styles.forkk} />
                   </View>
                   <Text style={styles.categoryBtnTxt}>Cupcakes</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.categoryBtn} onPress= {() => navigation.navigate('Explore')}>
           <View style={styles.categoryIcon}>        
               <Image source={require('../../assets/images/chamcha.png')} size={20} style={styles.forkk} />
                   </View>
                   <Text style={styles.categoryBtnTxt}>Dineouts</Text>
            </TouchableOpacity>

        </View>

        <View style={styles.cardsWrapper}>
  <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Hot')}>
    <View style={styles.cardImgWrapper}>
      <Image source={require('../../assets/images/food6.jpg')} resizeMode="cover" style={styles.cardImg} />
    </View>

    <View style={styles.cardInfo}>
      <Text style={styles.cardTitle}>Ben-T Cafe</Text>
      <Text style={styles.cardDetails}>Have the amazing food experience of delicious and mouth-watering dishes, made with love</Text>
    </View>
  </TouchableOpacity>

  <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Hot')}>
    <View style={styles.cardImgWrapper}>
      <Image source={require('../../assets/images/food2.jpg')} resizeMode="cover" style={styles.cardImg} />
    </View>

    <View style={styles.cardInfo}>
      <Text style={styles.cardTitle}>Arcadian Cafe</Text>
      <Text style={styles.cardDetails}>Have the amazing food experience of delicious and mouth-watering dishes, made with love</Text>
    </View>
  </TouchableOpacity>

  <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Hot')}>
    <View style={styles.cardImgWrapper}>
      <Image source={require('../../assets/images/food3.jpg')} resizeMode="cover" style={styles.cardImg} />
    </View>

    <View style={styles.cardInfo}>
      <Text style={styles.cardTitle}>Novu Cafe</Text>
      <Text style={styles.cardDetails}>Have the amazing food experience of delicious and mouth-watering dishes, made with love</Text>
    </View>
  </TouchableOpacity>

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
        marginTop: 40,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 10,
     //   paddingTop: 50,
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
          },
          
         
          
        });
        