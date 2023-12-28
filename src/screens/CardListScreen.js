import { View, Text , Button, StyleSheet } from 'react-native';
import React from 'react';

const CardListScreen = () => {
  return (
    <View style={styles.container}>
      <Text>CardListScreen</Text>
      <Button title="Click Here" onPress= {() => alert('BButton Clicked!')} />
    </View>
  );
};

export default CardListScreen;

const styles = StyleSheet.create({

    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

