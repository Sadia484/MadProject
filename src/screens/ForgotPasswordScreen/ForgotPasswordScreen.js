import React , {useState} from 'react';
import { View, Text, Image, StyleSheet , useWindowDimensions, ScrollView, ImageBackground, } from 'react-native';
import Logo from '../../../assets/images/applogo.png';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';


import Wallpap from '../../../assets/images/waal.jpg';


const ForgotPasswordScreen = () => {

    const [username, setUsername] = useState('');

    const navigation= useNavigation();
   
  const {height} = useWindowDimensions();

 const onSendPressed = () =>{
   navigation.navigate('NewPassword');
   }

 const OnSignInPress = () =>{
    navigation.navigate('SignIn');
 }

  return (

    <ImageBackground source={Wallpap}  style={styles.backgroundImage}>


    <ScrollView>
    <View style={styles.root}>

    <Text></Text>
    <Text></Text>
    <Text></Text>
    <Text></Text>
    <Text></Text>

    <Image source={Logo} styles={[styles.logo, {height : height* 0.2}]} resizeMode="contain" />
      
    <Text style={styles.title}>Reset your Password</Text>
      <CustomInput placeholder="Username"  value={username} setValue={setUsername} />
      
    <CustomButton text="Send" onPress={onSendPressed} />
   
<CustomButton 
  text="Back to Sign In " 
  onPress={OnSignInPress} 
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
        padding: 20, 
    },

    logo: {
        width: '70%',  
        maxWidth: 300,
        maxHeight: 90,
        marginTop: 100,  
      },

      title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#051C60',
        margin:10,
      },

      text: {
         color: '#36454F',
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

export default ForgotPasswordScreen;

