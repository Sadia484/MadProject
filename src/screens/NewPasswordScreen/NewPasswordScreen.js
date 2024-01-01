import React , {useState} from 'react';
import { View, Text, Image, StyleSheet , useWindowDimensions, ScrollView, ImageBackground,} from 'react-native';
import Logo from '../../../assets/images/applogo.png';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';


import Wallpap from '../../../assets/images/waal.jpg';

const NewPasswordScreen = () => {

    const [code, setCode] = useState('');
    const [newPassword, setNewPassword] = useState('');
   
    const navigation = useNavigation();
   
  const {height} = useWindowDimensions();


 const OnSignInPress = () =>{
   navigation.navigate('SignIn');
 }

 //Homee screeen pe janaa he
 const onSubmitPressed=() =>{
   navigation.navigate("Tabs")
 }

  return (
    <ScrollView style={styles.container}>
    <View style={styles.root}>

    <Image source={Logo} styles={[styles.logo, {height : height* 0.2}]} resizeMode="contain" />
      
    <Text style={styles.title}>New Password</Text>

    <CustomInput placeholder="Code"  value={code} setValue={setCode} />
    <CustomInput placeholder="Enter your new Password"  value={newPassword} setValue={setNewPassword} />
   
    <CustomButton text="Submit" onPress={onSubmitPressed} />
   
<CustomButton 
  text="Back to Sign In " 
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
        paddingTop: 120,
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
         color: '#36454F',
         marginVertical: 10,
      },

      link:{
         color: 'blue'
      },

      backgroundImage: {
         flex: 1,
          resizeMode: 'cover',
          height: '100%',
          width: '100%'
      //  justifyContent: 'center',
      
       },
 

});

export default NewPasswordScreen;

