import { View, Text , Button, TouchableOpacity, ImageBackground, TextInput, StyleSheet} from 'react-native'
import React, { useState } from 'react';

import Wallpap from '../../assets/images/cute.jpg';

import Waal from '../../assets/images/waal.jpg';

const EditProfile = ({ route, navigation }) => {
  const { userData, setUserData } = route.params;
  const [firstName, setFirstName] = useState(userData.name.split(' ')[0]);
  const [lastName, setLastName] = useState(userData.name.split(' ')[1]);
  const [phone, setPhone] = useState(userData.phone);
  const [email, setEmail] = useState(userData.email);
  const [country, setCountry] = useState(userData.country || '');
  const [city, setCity] = useState(userData.city || '');

  const handleUpdateProfile = () => {
    const updatedUserData = {
      name: `${firstName} ${lastName}`,
      city,
      phone,
      email,
      country,
    };
    setUserData(updatedUserData);

    // Add logic to send updatedUserData to the server/database if needed

    // Navigate back to ProfileScreen after updating
    navigation.goBack();
  };

  return (
    <ImageBackground source={Waal} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.box}>
          <View style={{ margin: 20 }} />
          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity onPress={() => {}}>
              <View style={{ height: 100, width: 100, borderRadius: 15, justifyContent: 'center', alignItems: 'center' }}>
                <ImageBackground source={Wallpap} style={{ height: 150, width: 150, marginTop: -100 }} innerStyle={{ borderRadius: 15 }}>
                </ImageBackground>
              </View>
            </TouchableOpacity>

            <Text style={{ paddingTop: -20, marginBottom: 20, fontSize: 25, fontWeight: 'bold' }}> {userData.name} </Text>

            <Text></Text>

            <View style={styles.action}>
              <TextInput
                placeholder="First Name"
                placeholderTextColor="#666666"
                autoCorrect={false}
                style={styles.textInput}
                value={firstName}
                onChangeText={(text) => setFirstName(text)}
              />
            </View>

            <View style={styles.action}>
              <TextInput
                placeholder="Last Name"
                placeholderTextColor="#666666"
                autoCorrect={false}
                style={styles.textInput}
                value={lastName}
                onChangeText={(text) => setLastName(text)}
              />
            </View>

            <View style={styles.action}>
              <TextInput
                placeholder="Phone"
                placeholderTextColor="#666666"
                keyboardType='number-pad'
                autoCorrect={false}
                style={styles.textInput}
                value={phone}
                onChangeText={(text) => setPhone(text)}
              />
            </View>

            <View style={styles.action}>
              <TextInput
                placeholder="Email"
                placeholderTextColor="#666666"
                keyboardType='email-address'
                autoCorrect={false}
                style={styles.textInput}
                value={email}
                onChangeText={(text) => setEmail(text)}
              />
            </View>

            <View style={styles.action}>
              <TextInput
                placeholder="Country"
                placeholderTextColor="#666666"
                autoCorrect={false}
                style={styles.textInput}
                value={country}
                onChangeText={(text) => setCountry(text)}
              />
            </View>

            <View style={styles.action}>
              <TextInput
                placeholder="City"
                placeholderTextColor="#666666"
                autoCorrect={false}
                style={styles.textInput}
                value={city}
                onChangeText={(text) => setCity(text)}
              />
            </View>

            <TouchableOpacity style={styles.commandButton} onPress={handleUpdateProfile}>
              <Text style={styles.panelButtonTitle}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginTop: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
  },
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: { width: -1, height: -3 },
    shadowRadius: 2,
    shadowOpacity: 0.4,
    paddingTop: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },

  box: {
    borderWidth: 3,
    borderColor: 'black',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    height: '90%',
    backgroundColor: 'white',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },

  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
    color: 'black',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },

  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: 'black',
    fontSize: 18,
  },
});

export default EditProfile;