import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomePage_ from './app/screens/HomePage_';

export default function App() {
  return (
    <NavigationContainer>
      <HomePage_ />
      <StatusBar style="auto" />
      </NavigationContainer>
  );
}


