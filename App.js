import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Materi from './src/screens/Materi';
import About from './src/screens/About';
import Landing from './src/screens/Landing';
import KosaKata from './src/screens/Kosakata';

const Stack = createNativeStackNavigator();

function App()
{
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Landing"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Materi" component={Materi} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="Kosakata" component={KosaKata} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;