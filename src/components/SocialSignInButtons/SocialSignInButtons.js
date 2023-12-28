import { View, Text } from 'react-native'
import React from 'react'
import  CustomButton from '../CustomButton';

const SocialSignInButtons = () => {

    const onSignInFacebook = () =>{
        console.warn('On sign in facebook');
     };
    
     const onSignInGoogle = () =>{
        console.warn('On sign in google');
     };    

  return (
    <>
      
      <CustomButton 
  text="Sign in with Google"
  onPress={onSignInGoogle}
  bgColor="#FAE9EA"  
  fgColor="#DD4D44"  
/>

     <CustomButton 
  text="Sign in with Facebook"
  onPress={onSignInFacebook}
  bgColor="#e3e3e3"  
  fgColor="#363636"  
/>


    </>
  )
}

export default SocialSignInButtons