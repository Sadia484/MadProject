import { View, Text , StyleSheet, Pressable} from 'react-native'
import React from 'react'

const CustomButton = ({onPress, text, type = "PRIMARY" , bgColor, fgColor}) => {
  return (
    //iss lie prop banaya he kyu k ek se zyada events pe use hona he isne..toh koi static hardcode kr k vaue ni de skte isse 
    <Pressable onPress={onPress} 
    style={[
        styles.container, 
        styles[`container_${type}`],
        bgColor ? {backgroundColor: bgColor} : {}
        ]}>
      <Text style={[styles.text, styles[`text_${type}`],
      fgColor ? {color: fgColor} : {}
      ]}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
    container:{
        width: '100%',
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 5,
    },

    container_PRIMARY : {
    backgroundColor: '#000000',
     },

     container_SECONDARY : {
      borderColor : 'black',
      borderWidth: 2,
     },

container_TERTIARY : {
   
},

    text: {
        fontWeight: 'bold',
        color: 'white',
    },

    text_TERTIARY :{
        color: 'gray',
    },

    text_SECONDARY : {
      color: 'black',
    },
})

export default CustomButton