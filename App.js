import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

import Navigation from './src/navigation';




import { SafeAreaProvider } from 'react-native-safe-area-context';


import { NavigationContainer } from '@react-navigation/native';

//import Tabs from './src/navigation/tabs.js';
//import { createStackNavigator } from '@react-navigation/stack';
//import HomeScreen from './src/screens/HomeScreen';
// const Stack = createStackNavigator();

const App = () => {
  return (   
  <SafeAreaView style={styles.root}>
     <NavigationContainer>
        <Navigation />
   </NavigationContainer>


   
      </SafeAreaView>
  );
};




const styles = StyleSheet.create({
  root: {
    flex:1,
    backgroundColor: '#FFEA00'
  },
});



export default App;
