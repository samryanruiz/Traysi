import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import iconImage from '../figma/icon.png';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.centeredView}>
        <Text>This is the HomeScreen</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5FC0DE',
    justifyContent: 'center', // Center vertically
  },
  centeredView: {
    alignItems: 'center', // Center horizontally
  },
});
