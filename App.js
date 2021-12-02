import React,{useState} from 'react';
import {Text, View} from 'react-native';
import Onboarding from './components/Onboarding.js';
import Login from './components/Login.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{headerShown:false,}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
