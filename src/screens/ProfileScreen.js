import React from 'react';
import { View, SafeAreaView, Image, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Wallpap from '../../assets/images/wall.jpg';

const ProfileScreen = ({ navigation }) => {

  return (
    <ImageBackground source={Wallpap} style={styles.backgroundImage}>
      <SafeAreaView style={styles.container}>
        <View style={styles.box}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: 'column', marginTop: 20, marginBottom: 20 }}>
              <Image source={require('../../assets/images/user.jpg')} style={styles.profileImage} />
              <View style={{ marginLeft: 0 }}>
                <Text style={[styles.title, { marginTop: 15, marginBottom: 10 }]}>Sadia Rahman</Text>
              </View>
            </View>
          </View>

          <View style={styles.row}>
            <Text></Text>
            <Text></Text>
            <Text style={{ fontSize: 19 }}>Hii</Text>
          </View>

          <View style={styles.row}>
            <Text style={{ fontSize: 19 }}>Lahore, Pakistan</Text>
          </View>

          <View style={styles.row}>
            <Text style={{ fontSize: 19 }}>+9213434545454</Text>
          </View>

          <View style={styles.row}>
            <Text style={{ fontSize: 19 }}>sadia@gmail.com</Text>
          </View>

          <View style={styles.space}></View>

          <TouchableOpacity style={styles.categoryBtn} onPress={() => navigation.navigate('EditProfile')}>
            <View style={styles.categoryIcon}>
              <Image source={require('../../assets/images/edit.jpg')} style={styles.forkk} />
            </View>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text style={styles.categoryBtnTxt}>Edit Profile</Text>
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

  userInfoSection: {
    paddingHorizontal: 2,
 //   paddingTop: 10,
  },

  profileImage: {
    width: 66,
    height: 66,
  },

  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },

  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },

  space: {
    height: 20,
  },

  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    height: '100%',
    width: '100%',
  },

  box: {
    borderWidth: 3,
    borderColor: 'black',
    padding: 20,
    borderRadius: 10,
    width: '76%', // Adjust the width of the box as needed
    height: '70%',
    backgroundColor: 'white',
  },

  categoryBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '50%',
    marginHorizontal: 0,
    marginTop: 20,
  },

  categoryIcon: {
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'left',
    width: 30,
    height: 30,
    backgroundColor: 'black',
    borderRadius: 50,
  },

  forkk: {
    width: 40,
    height: 40 ,
  },

  categoryBtnTxt: {
    alignSelf: 'left',
    marginLeft: 10,
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;