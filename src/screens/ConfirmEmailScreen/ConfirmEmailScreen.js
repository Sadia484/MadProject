import React , {useState} from 'react';
import { View, Text, Image, StyleSheet , useWindowDimensions, ScrollView, TouchableOpacity, ImageBackground,} from 'react-native';
import Logo from '../../../assets/images/applogo.png';

import SignupBackground from '../../../assets/images/waal.jpg';
import { useNavigation } from '@react-navigation/native';
import { getAuth, signOut } from 'firebase/auth'; // Import auth and signOut from the correct path
import { auth } from '../../../firebase';


//import { getAuth, signOut } from 'firebase/auth';
//import { auth } from '../../../firebase';

const ConfirmEmailScreen = () => {

  const [code, setCode] = useState('');

  const navigation= useNavigation();

  const handleLogout = async () => {
    try {
      const authInstance = getAuth(); // Get the auth instance
      await signOut(authInstance); // Use the auth instance to sign out
      navigation.navigate('SignIn');
    } catch (error) {
      console.error('Logout error:', error.message);
      // Handle logout error
    }
  };



  return(
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} resizeMode="contain" />
      <Text style={styles.heading}>Logout Screen</Text>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
 
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f0a702',
  },
  logoutButton: {
    width: '40%',
    height: 50,
    backgroundColor: '#800020',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  heading: {
    color: 'black',
    fontSize: 50,
    marginBottom: 20,
  
  },

  logo: {
    width: '70%',  
    maxWidth: 300,
    maxHeight: 300,
    marginTop: -30,  
  },

});

export default ConfirmEmailScreen;

