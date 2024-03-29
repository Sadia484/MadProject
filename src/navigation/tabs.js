import {SafeAreaView, StyleSheet, View, Image, Text} from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from '../screens/HomeScreen';
//import FindScreen from '../screens/FindScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingScreen from '../screens/SettingScreen';
import React from 'react';

import Try from '../screens/Try';



const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} options={{
                tabBarIcon : ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 4}}>
                       <Image source={require('../../assets/images/home.png')} 
                        resizeMode="contain"
                        style={{
                            width: 45,
                            height: 50,
                            tintColor: focused? 'black' : 'gray'
                        }} 
            />
                    </View>
                ),
                headerShown: false,

            }}  
            />


<Tab.Screen name="Explore" component={SettingScreen} options={{
                tabBarIcon : ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 4}}>
                       <Image source={require('../../assets/images/find.png')} 
                        resizeMode="contain"
                        style={{
                            width: 37,
                            height: 36,
                            tintColor: focused? 'black' : 'gray'
                        }} 
            />
                            </View>
                ),
                headerShown: false,
            }}  
            />

<Tab.Screen name="Hot" component={Try} options={{
                tabBarIcon : ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 4}}>
                       <Image source={require('../../assets/images/try.jpg')} 
                        resizeMode="contain"
                        
                        style={{
                            width: 48,
                            height: 43,
                          //  tintColor: focused? 'black' : 'gray'

                        }} 
            />
                    </View>
                ),
                headerShown: false,
            }}  
            />


<Tab.Screen name="Setting" component={ProfileScreen} options={{
                tabBarIcon : ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 4}}>
                       <Image source={require('../../assets/images/profile.png')} 
                        resizeMode="contain"
                        
                        style={{
                            width: 37,
                            height: 32,
                            tintColor: focused? 'black' : 'gray'

                        }} 
            />
                    </View>
                ),
                headerShown: false,
            }}  
            />


        </Tab.Navigator>
    );
}

export default Tabs;