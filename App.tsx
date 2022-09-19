import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SignIn } from './src/screens/SignIn';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" translucent backgroundColor='transparent'/>
      <SignIn/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161616',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
