import React , {useState} from 'react';
import { View, Text, Image, StyleSheet , useWindowDimensions, ScrollView, ImageBackground,} from 'react-native';
import Logo from '../../../assets/images/applogo.png';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';

import SignupBackground from '../../../assets/images/waal.jpg';
import { useNavigation } from '@react-navigation/native';

const ConfirmEmailScreen = () => {

    const [code, setCode] = useState('');

    const navigation= useNavigation();
   
  const {height} = useWindowDimensions();

  //home screen ka linkkk..
 const onConfirmPressed = () =>{
  navigation.navigate("Tabs")
 }

 
 const OnSignInPress = () =>{
   navigation.navigate('SignIn');
 }

const onResendPressed=() =>{
   console.warn('on resend presssed')
}


  return (
    
   <ImageBackground source={SignupBackground} style={styles.backgroundImage} >

    <ScrollView>
    <View style={styles.root}>

    <Text></Text>
    <Text></Text>
    <Text></Text>

    <Image source={Logo} styles={[styles.logo, {height : height* 0.2}]} resizeMode="contain" />
      
    <Text style={styles.title}>Confirm your email</Text>
      <CustomInput placeholder="Enter your confirmation Code"  value={code} setValue={setCode} />
      
    <CustomButton text="Confirm" onPress={onConfirmPressed} />
   
    <CustomButton 
  text="Resend Code " 
  onPress={onResendPressed} 
 type="SECONDARY"
 />


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

      backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
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
      

});

export default ConfirmEmailScreen;

