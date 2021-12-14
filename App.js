
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { main_page } from './scr/main_page'
import { info_page } from './scr/Info_page';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen  options={{ title: 'Ставки' }} name = "Main" component = {main_page}/>
      <Stack.Screen   options={{ title: 'Ставка' }} name = "Info" component = {info_page}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
