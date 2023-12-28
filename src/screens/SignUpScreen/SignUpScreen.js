import React , {useState} from 'react';
import { View, Text, Image, StyleSheet , useWindowDimensions, ScrollView, ImageBackground,} from 'react-native';
import Logo from '../../../assets/images/applogo.png';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';


import Wallpaper from '../../../assets/images/waal.jpg';

const SignUpScreen = () => {
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

   <ImageBackground source={Wallpaper}  style={styles.backgroundImage}>


    <ScrollView>

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
        justifyContent: 'center',
       },

});

export default SignUpScreen;

