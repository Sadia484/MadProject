import React , {useEffect, useState} from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions, ImageBackground,  TouchableOpacity,} from 'react-native';
import Logo from '../../../assets/images/applogo.png';
import { useNavigation } from '@react-navigation/native';
import { getAuth, createUserWithEmailAndPassword, } from 'firebase/auth';
import { auth } from '../../../firebase';
import { TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Wallpaper from '../../../assets/images/waal.jpg';

const SignUpScreen = () => {
   const [email, setEmail]= useState('')
   const [password, setPassword]= useState('')
   const [fullName, setFullName]= useState('')

   const navigation = useNavigation();

   useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
       if (user) {
          navigation.navigate("Tabs");
       }
    });
    return unsubscribe;
 }, []);
    

 const handleSignUp = async () => {
  try {
    console.log('Handle SignUp called');
    
    const authInstance = getAuth();
    console.log('Email:', email);
    console.log('Password:', password);

    const userCredentials = await createUserWithEmailAndPassword(authInstance, email, password);

    const user = userCredentials.user;
    console.log('User signed up:', user.email);
  } catch (error) {
    console.error('SignUp error:', error);
    alert(error.message);
  }

};
    
    return (
      <SafeAreaView style={styles.container}>
      <Image source={Logo} style={[styles.logo]} resizeMode="contain" />
  
      <Text style={styles.text}>Create a new account</Text>

      <View style={styles.inputContainer}>

            <TextInput
              placeholder="Full Name"
              value={fullName}
              onChangeText={(text) => setFullName(text)}
              style={[styles.input, { marginBottom: 10, width: '100%' }]}
            />

        <TextInput
              placeholder="Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={[styles.input, { marginBottom: 10, width: '100%' }]}
            />
  
       <TextInput
              placeholder="Password"
              value={password}
              onChangeText={(text) => setPassword(text)}
              style={[styles.input, { width: '100%' }]}
              secureTextEntry={true}
            />
      </View>
  
      <View style={styles.buttonContainer}>
      <TouchableOpacity
        onPress={handleSignUp}
        style={styles.buttons}
      >
        <Text style={styles.buttonOutlineText}>SignUp </Text>
      </TouchableOpacity>

      <Text style={styles.texts}>By registering, you confirm that you accept our 
    <Text style={styles.link}  onPress={() => {
            navigation.navigate('Services');
          }} > Terms of Use </Text>and 
       <Text style={styles.link} onPress={() => {
            navigation.navigate('Services');
          }} > Privacy Policy </Text>
      </Text>


      <TouchableOpacity
          onPress={() => {
            navigation.navigate('SignIn');
          }}
          style={[styles.signinbutton, styles.buttonOutlineText]}
        >
          <Text style={styles.buttonText2}>Back to Sign in</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
  };
  
  

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f0a702',
      justifyContent: 'center',
      alignItems: 'center',
    },

    text: {
      fontSize: 29,
      fontWeight: 'bold',
      marginBottom: 14,
    },

    texts: {
      fontSize: 15,
      fontWeight: 'bold',
      marginTop: 18,
      marginBottom: 18,
    },

    inputContainer: {
      width: '87%',
    },

    buttons: {
      backgroundColor: 'black',
      width: '100%',
      padding: 15,
      borderRadius: 6,
      alignItems: 'center',
      marginTop: 10,
    },
    buttonText: {
      color: 'white',
      fontWeight: '700',
      fontSize: 16,
    },
    input: {
      backgroundColor: 'white',
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 10,
      marginTop: 5,
      marginBottom: 10,
      width: '100%',
    },

    buttonContainer: {
      width: '87%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 15,
      marginBottom: 14,
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

    button: {
      backgroundColor: 'black',
      width: '100%',
      padding: 15,
      borderRadius: 6,
      alignItems: 'center',
    },
    buttonText: {
      color: 'white',
      fontWeight: '700',
      fontSize: 16,
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

    link: {
      color: 'blue',
    },
    logo: {
      width: '70%', 
      maxWidth: 250,
      maxHeight: 180,
      marginTop: -30,
    },
  });

/*
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

 // const {height} = useWindowDimensions();

 const navigation =  useNavigation();

 const onRegisterPressed = () =>{
    navigation.navigate('ConfirmEmail');
 }

 const OnSignInPress = () =>{
    navigation.navigate('SignIn');
 }

 //idhr wo terms and policy wala page daalna he 

onTermsofUsePressed =() =>{
   navigation.navigate('Services');
}

onPrivacyPressed=() =>{
   navigation.navigate('Services');
}


  return (
    <ScrollView style={styles.container}>

    <View style={styles.root}>

    <Text></Text>
    <Text></Text>
    <Text></Text>

    <Text style={styles.title}>Create an account</Text>
      <CustomInput placeholder="UserName"  value={username} setValue={setUsername} />
      <CustomInput placeholder="Email"  value={email} setValue={setEmail} />
      <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry/>
      <CustomInput placeholder="Repeat Password" value={passwordRepeat} setValue={setPasswordRepeat} secureTextEntry/>
      
    <CustomButton text="Register" onPress={onRegisterPressed} />
   
<Text style={styles.text}>By registering, you confirm that you accept our 
    <Text style={styles.link} onPress={onTermsofUsePressed}  > Terms of Use </Text>and 
       <Text style={styles.link} onPress={onPrivacyPressed}> Privacy Policy </Text>
      </Text>

   <SocialSignInButtons />

<CustomButton 
  text="Have an account? Sign in " 
  onPress={OnSignInPress} 
 type="TERTIARY"
 />

    </View>
    </ScrollView>

);
};


const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#f0a702',
    },

    root:{
        alignItems: 'center',
        padding: 20, 
    },

    logo: {
        width: '70%',  
        maxWidth: 300,
        maxHeight: 80,
        marginTop: 100,  
      },

      title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#051C60',
        margin:10,
      },

      text: {
         color: 'black',
         marginVertical: 10,
      },

      link:{
         color: 'blue'
      },

      backgroundImage: {
         flex: 1,
          resizeMode: 'cover',
        justifyContent: 'center',
       },

});


*/

export default SignUpScreen;

