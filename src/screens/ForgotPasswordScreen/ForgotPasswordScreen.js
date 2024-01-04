import React , {useState} from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';

import Logo from '../../../assets/images/applogo.png';
import { useNavigation } from '@react-navigation/native';

import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../../firebase';

import Wallpap from '../../../assets/images/waal.jpg';


const ForgotPasswordScreen = () => {

  const navigation = useNavigation();

  const [email, setEmail] = useState('');

  const handleResetPassword = async () => {
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      Alert.alert(
        'Password Reset Email Sent',
        'Please check your email for further instructions.'
      );
    } catch (error) {
      Alert.alert('Error', 'Password reset failed. Please try again.');
      console.error('Password reset error:', error);
    }
  };

  return (
    <View style={styles.container}>

       <Image source={Logo} style={styles.logo} resizeMode="contain" />

    <Text style={styles.title}>Forgot Password</Text>
    <View style={styles.inputView}>

      <TextInput
        style={styles.inputText}
        placeholder="Enter Email"
        placeholderTextColor="black"
        onChangeText={(text) => setEmail(text)}
      />

    </View>

    <TouchableOpacity style={styles.submitBtn} onPress={handleResetPassword}>
      <Text style={styles.submitText}>Submit</Text>
    </TouchableOpacity>
    <Text style={styles.text2}>Send code again</Text>


    <TouchableOpacity
          onPress={() => {
            navigation.navigate('SignIn');
          }}
          style={[styles.signinbutton, styles.buttonOutlineText]}
        >
          <Text style={styles.buttonText2}>Back to Sign in</Text>
        </TouchableOpacity>


  </View>
);
};

  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0a702',
    alignContent: 'center',
    alignItems: 'center',
  },


    logo: {
        width: '70%',  
        maxWidth: 300,
        maxHeight: 210,
        marginTop: 100,  
      },

      title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        margin:10,
      },

      inputView: {
        width: '85%',
        backgroundColor: '#f2f2f2',
        borderRadius: 6,
        height: 50,
        marginTop: 15,
        marginBottom: 10,
        justifyContent: 'center',
        paddingHorizontal: 20,
      },
      
      inputText: {
        fontSize: 18,
      },

      submitBtn: {
        backgroundColor: 'black',
        borderRadius: 6,
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: 'center',
        marginBottom: 6,
        marginTop: 10,
      },

      submitText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
      },

      text2: {
        color: 'black',
        fontSize: 17,
        marginTop: 2,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
      },

      signinbutton:{
        backgroundColor: 'transparent',
        width: '85%',
        padding: 15,
        borderRadius: 6,
        alignItems: 'center',
        borderColor: 'black',  
        borderWidth: 2, 
        marginTop: 27,
      },

      
    buttonText2: {
      color: 'black',
      fontWeight: 'bold',
      fontSize: 16,
    },

    buttonOutlineText: {
      color: 'white',
      fontWeight: '700',
      fontSize: 16,
    },
  
    });
      
export default ForgotPasswordScreen;

