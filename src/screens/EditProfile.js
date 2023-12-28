import { View, Text , Button, TouchableOpacity, ImageBackground, TextInput, StyleSheet} from 'react-native'
import React from 'react'

import Wallpap from '../../assets/images/cute.jpg';

import Waal from '../../assets/images/waal.jpg';

const EditProfile = () => {
  return (

    <ImageBackground source={Waal}  style={styles.backgroundImage}>
 
    <View style={styles.container}>
    <View style={styles.box}>
      <View style={{margin: 20}} />
         <View style={{alignItems: 'center'}} >
            <TouchableOpacity onPress={() => {}}>
              <View style={{height: 100, width: 100, borderRadius: 15, justifyContent: 'center', alignItems: 'center'}}>
                <ImageBackground source={Wallpap} style={{height: 100, width: 100}} innerStyle={{borderRadius: 15}} >
                </ImageBackground>
              </View>
            </TouchableOpacity>

       <Text style={{marginTop: 10, fontSize: 20, fontWeight: 'bold'}}> Sadia </Text>

       <Text></Text>

       <View style={styles.action}>
         <TextInput placeholder="First Name" placeholderTextColor= "#666666" autoCorrect={false} style={styles.textInput} /> 
       </View>

       <View style={styles.action}>
         <TextInput placeholder="Last Name" placeholderTextColor= "#666666" autoCorrect={false} style={styles.textInput} /> 
       </View>

       <View style={styles.action}>
         <TextInput placeholder="Phone" placeholderTextColor= "#666666" keyboardType='number-pad' autoCorrect={false} style={styles.textInput} /> 
       </View>

       <View style={styles.action}>
         <TextInput placeholder="Email" placeholderTextColor= "#666666" keyboardType='email-address' autoCorrect={false} style={styles.textInput} /> 
       </View>

       <View style={styles.action}>
         <TextInput placeholder="Country" placeholderTextColor= "#666666" autoCorrect={false} style={styles.textInput} /> 
       </View>

       <View style={styles.action}>
         <TextInput placeholder="City" placeholderTextColor= "#666666" autoCorrect={false} style={styles.textInput} /> 
       </View>

       
       <TouchableOpacity style={styles.commandButton} onPress= { () => {}}>
          <Text style={styles.panelButtonTitle}>Submit</Text>
       </TouchableOpacity>

         </View>
         </View>
    </View>

    </ImageBackground>
  )
}

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginTop: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // shadowColor: '#000000',
    // shadowOffset: {width: 0, height: 0},
    // shadowRadius: 5,
    // shadowOpacity: 0.4,
  },
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },

  box: {
    borderWidth: 3,
    borderColor: 'black',
    padding: 20,
    borderRadius: 10,
    width: '80%', // Adjust the width of the box as needed
    height: '90%',
    backgroundColor: 'white',
    alignSelf: 'center', // Center the box horizontally
    justifyContent: 'center', 
    marginTop: 50,
    },

  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
    color: 'black',
     },
     backgroundImage: {
        flex: 1,
         resizeMode: 'cover',
       justifyContent: 'center',
      },

  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: 'black',
    fontSize: 17,
  },
});