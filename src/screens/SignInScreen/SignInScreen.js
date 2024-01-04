import React , {useEffect, useState} from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions, ImageBackground,  TouchableOpacity,} from 'react-native';
import Logo from '../../../assets/images/applogo.png';
import { useNavigation } from '@react-navigation/native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase';
import { SafeAreaView } from 'react-native-safe-area-context';
import Wallpap from '../../../assets/images/waal.jpg';
import { TextInput } from 'react-native';


const SignInScreen = () => {

const [email, setEmail]= useState('')
const [password, setPassword]= useState('')

 const navigation = useNavigation();

useEffect(() => {
  const unsubscribe= auth.onAuthStateChanged(user => {
    if(user) {
      navigation.replace("Tabs")
    }
  })
  return unsubscribe
} ,[])


const handleLogin = async () => {
  try {
    const authInstance = getAuth();
    const userCredentials = await signInWithEmailAndPassword(authInstance, email, password);
    const user = userCredentials.user;
    console.log('Logged in with:', user.email);
  } catch (error) {
    alert('Invald credentials bro!');
  }
};

  return (

  
    <View style={styles.container}>
    <Image source={Logo} style={[styles.logo]} resizeMode="contain" />

    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={[styles.input, { marginBottom: 10 }]}
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        style={[styles.input]}
        secureTextEntry
      />
    </View>

    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      
      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.text}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.text}>Don't have an account? Create one</Text>
      </TouchableOpacity>

        
    </View>
  </View>
);
};



const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f0a702',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    width: '67%',  
    maxWidth: 350,
    maxHeight: 260,
    height: '65%',
    marginTop: -30,  
  },

  inputContainer:{
    width: '87%',
  },

  input:{
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },

  buttonContainer:{
    width: '87%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },

  button:{
    backgroundColor: 'black',
    width: '100%',
    padding: 15,
    borderRadius: 6,
    alignItems: 'center',
  },

  buttonOutline:{
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: 'green',
    borderWidth: 2,
  },
  buttonText:{
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },

  buttonOutlineText:{
    color: 'pink',
    fontWeight: '700',
    fontSize: 16,
  },
 
  text:{
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 15,
  }

  /*
    root:{
      flex: 1,
        alignItems: 'center',
        padding: 15, 
    },

    logo: {
        width: '67%',  
        maxWidth: 350,
        maxHeight: 300,
        height: '70%',
        marginTop: 70,  
      },

      backgroundImage: {
        flex: 1,
         resizeMode: 'cover',
       justifyContent: 'center',
      },

   /*   logo: {
        width: '70%',
        maxWidth: 120, // Adjust the maximum width as needed
        maxHeight: 190, // Adjust the maximum height as needed
        alignSelf: 'flex-start', // Align the logo to the top-left corner
      },

      */
     

});

export default SignInScreen;

