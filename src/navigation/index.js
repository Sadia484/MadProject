import { View, Text } from 'react-native'
import React from 'react';

//import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignInScreen from '../screens/SignInScreen/SignInScreen.js';
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen.js';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen/ConfirmEmailScreen.js';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen/ForgotPasswordScreen.js';
import NewPasswordScreen from '../screens/NewPasswordScreen/NewPasswordScreen.js';

import Services from '../screens/Services/Services.js';
import Eww from '../screens/Eww';
import EditProfile from '../screens/EditProfile'
import RestaurantDetails from '../screens/RestaurantDetails'

import CardDetails from '../screens/CardDetails'

import Tabs from './tabs.js';

const Stack= createNativeStackNavigator();

const Navigation = () => {
  return (
    
      <Stack.Navigator screenOptions={{headerShown: false }}>

        <Stack.Screen name ="SignIn" component={SignInScreen} />
        <Stack.Screen name ="SignUp" component={SignUpScreen} />
        <Stack.Screen name ="ConfirmEmail" component={ConfirmEmailScreen} />
        <Stack.Screen name ="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name ="NewPassword" component={NewPasswordScreen} />

        <Stack.Screen name ="Services" component={Services} />

        <Stack.Screen name ="Tabs" component={Tabs} />


       <Stack.Screen name ="Eww" component={Eww} />
       <Stack.Screen name ="EditProfile" component={EditProfile} />

       <Stack.Screen name ="RestaurantDetails" component={RestaurantDetails} />

       <Stack.Screen name ="CardDetails" component={CardDetails} />
    


      </Stack.Navigator>
    
  );

}

export default Navigation;