import { View, Text, StyleSheet, ImageBackground, ScrollView} from 'react-native';
import React from 'react';
import Wallpaper from '../../../assets/images/wall.jpg';
import CustomButton from '../../components/CustomButton/CustomButton';


import { useNavigation } from '@react-navigation/native';


const Services = () => {

    const navigation = useNavigation();

    const OnSignInPress = () =>{
        navigation.navigate('SignIn');
      }

  return (

 
    <ImageBackground source={Wallpaper}  style={styles.backgroundImage}>

    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.txt}>Privacy Policy</Text>

        <View>

        <Text style={styles.points}>1- To access certain features of the App, you may be required to register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.</Text>
     <Text></Text>
     <Text style={styles.points}>2- The information about restaurants and cafes in the App is provided for informational purposes only. We do not endorse or guarantee the accuracy, availability, or quality of any restaurant or cafe listed in the App.</Text>
      
      <Text></Text>
      <Text style={styles.points}>3- By accessing the App, you agree to comply with these Terms. If you do not agree to these Terms, please do not use the App.</Text>

       <Text></Text>
       <Text style={styles.points}>4- The App may include links to third-party websites or services. We aren’t responsible for the content, accuracy, or policies of these third-party services. Your use of third-party services is at your own risk.</Text>
      </View>
      <Text></Text>

      <CustomButton text="Back to the Sign In" onPress={OnSignInPress} />
      
      </View>
    
    </View>

</ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    borderWidth: 3,
    borderColor: 'black',
    padding: 20,
    borderRadius: 10,
    width: '80%', // Adjust the width of the box as needed
    height: '85%',
    backgroundColor: 'white',
  },

  backgroundImage: {
    flex: 1,
     resizeMode: 'cover',
   justifyContent: 'center',
  },

 txt:{
fontWeight: 'bold',
fontSize: 30,
padding: 20,
color: 'black',
textAlign: 'center',
 },

points: {
    color: 'black',
    fontSize: 14,
}


});

export default Services;