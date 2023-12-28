import React , {useState} from 'react';
import { View, Text, Image, StyleSheet , useWindowDimensions, ScrollView, ImageBackground,} from 'react-native';
import Logo from '../../../assets/images/applogo.png';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';


import Wallpap from '../../../assets/images/waal.jpg';

const SignInScreen = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

 const {height} = useWindowDimensions();

 const navigation = useNavigation();


 const onSignInPressed = () =>{
   // navigation.navigate('HomeScreen');
   navigation.navigate("Tabs")
 }

 const onForgotPasswordPressed = () =>{
    navigation.navigate("ForgotPassword");
 }

 
 const OnSignUpPress = () =>{
    navigation.navigate("SignUp");
 }



  return (

    <ImageBackground source={Wallpap}  style={styles.backgroundImage}>

    <ScrollView>


    <View style={styles.root}>
      
      <Image source={Logo} style={[styles.logo, {height : height* 0.28}]} resizeMode="contain" />

    <Text></Text>

      <CustomInput placeholder="UserName"  value={username} setValue={setUsername} />
      <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true}/>
      
    <CustomButton text="Sign in" onPress={onSignInPressed} />
    <CustomButton text="Forgot Password?" onPress={onForgotPasswordPressed} 
    type="TERTIARY"/>

<SocialSignInButtons />

<CustomButton 
  text="Don't have an account? Create one" 
  onPress={OnSignUpPress} 
 type="TERTIARY"
 />

    </View>
    </ScrollView>

    </ImageBackground>

  );
};


const styles = StyleSheet.create({
    root:{
        alignItems: 'center',
        padding: 15, 
      //  backgroundColor: 'yellow',
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

