import React from 'react';
import { View, Text, Button, StyleSheet, } from 'react-native';

const FindScreen = ({ navigation }) => {
  return (
    
      <View style={styles.container}>
        <Text>Find Screen</Text>
        <Button title="Click Heere" onPress={() => alert('Button clicked')} />
      </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FCFC5C',
  },

});

export default FindScreen;