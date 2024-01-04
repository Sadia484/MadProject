import React, { useState } from 'react';
import { View, SafeAreaView, Image, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Wallpap from '../../assets/images/wall.jpg';

const ProfileScreen = ({ navigation }) => {
  const [userData, setUserData] = useState({
    name: 'Sadia Rahman',
    city: 'Lahore, Pakistan',
    phone: '+9213434545454',
    email: 'bcsf20a540@pucit.edu.pk',
  });

  return (
    <ImageBackground source={Wallpap} style={styles.backgroundImage}>
      <SafeAreaView style={styles.container}>
        <View style={styles.box}>
          <View style={styles.userInfoSection}>
            <View style={styles.profileContainer}>
              <Image source={require('../../assets/images/user.jpg')} style={styles.profileImage} />
              <Text style={styles.title}>{userData.name}</Text>
            </View>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoText}>Greetings!</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoText}>{userData.city}</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoText}>{userData.phone}</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoText}>{userData.email}</Text>
          </View>

          <View style={styles.space}></View>

          <TouchableOpacity
            style={styles.editProfileBtn}
            onPress={() => navigation.navigate('EditProfile', { userData, setUserData })}
          >
            <View style={styles.editIcon}>
              <Image source={require('../../assets/images/edit.jpg')} style={styles.editIconImage} />
            </View>
            <Text style={styles.editProfileBtnTxt}>Edit Profile</Text>
          </TouchableOpacity>



          <TouchableOpacity
          onPress={() => {
            navigation.navigate('ConfirmEmail');
          }}
          style={[styles.signinbutton, styles.buttonOutlineText]}
        >
          <Text style={styles.buttonText2}>Logout</Text>
        </TouchableOpacity>


          <View style={styles.space}></View>

        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  signinbutton:{
    backgroundColor: 'transparent',
    width: '100%',
    padding: 15,
    borderRadius: 6,
    alignItems: 'center',
    borderColor: 'black',  
    borderWidth: 2, 
  },

  buttonOutlineText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonText2: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },

  userInfoSection: {
    paddingHorizontal: 2,
  },

  profileContainer: {
    flexDirection: 'column',
   // marginTop: 10,
   // marginBottom: -50,
    alignItems: 'center',
  },

  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 15,
  },

  infoRow: {
    flexDirection: 'row',
    marginBottom: 3,
    justifyContent: 'center',
  },

  infoText: {
    fontSize: 19,
    
  },

  space: {
    height: 4,
  },

  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    height: '100%',
    width: '100%',
  },

  box: {
    alignSelf: 'center', // Center the box horizontally
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: 'black',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    height: '70%',
    backgroundColor: 'white',
  },

  editProfileBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    marginHorizontal: 0,
    marginTop: 0,
    backgroundColor: 'white',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    justifyContent: 'center',
  },
  
  editIcon: {
    marginRight: 10,
  },

  editIconImage: {
    width: 50,
    height: 50,
  },

  editProfileBtnTxt: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10, // Adjust the left margin as needed
    marginRight: 10, // Adjust the right margin as needed
  },

});

export default ProfileScreen;