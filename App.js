import React, {useState} from 'react';
import {Text, View} from 'react-native';
import Onboarding from './components/Onboarding/Onboarding.js';
import Difdish from './components/Onboarding/Difdish.js';
import Login from './components/Login/Login.js';
import SignUp from './components/SignUp/SignUp.js';
import ForgotPassword from './components/Password/ForgotPassword.js';
import ChangePassword from './components/Password/ChangePassword.js';
import Profile from './components/Profile/Profile.js';
import MainMenu from './components/MainMenu/MainMenu.js';
import FoodCompaigns from './components/Home/FoodCompaigns.js';
import Special from './components/Home/Special.js';
import Search from './components/Home/Search.js';
import FoodDetail from './components/Home/FoodDetail.js';
import CategoriesBottomMenue from './components/CategoriesBottomMenue/CategoriesBottomMenue.js';
import FoodFilter from './components/FoodFilter/FoodFilter.js';
import MyCard from './components/MyCard/MyCard.js';
import FoodDeliveryMap from './components/FoodDeliveryMap/FoodDeliveryMap.js';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName="Onboarding">
        <Stack.Screen 
          name="Onboarding"
          component={Onboarding}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Difdish"
          component={Difdish}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="ForgotPassword"
          component={ForgotPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="ChangePassword"
          component={ChangePassword}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Profile"
          component={Profile}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="MainMenu"
          component={MainMenu}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="FoodCompaigns"
          component={FoodCompaigns}
          options={{headerShown: false}}
        />
       
        <Stack.Screen 
          name="Special"
          component={Special}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Search"
          component={Search}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="FoodDetail"
          component={FoodDetail}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="CategoriesBottomMenue"
          component={CategoriesBottomMenue}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="MyCard"
          component={MyCard}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="FoodFilter"
          component={FoodFilter}
          options={{headerShown: false}}
        />
        
        <Stack.Screen 
          name="FoodDeliveryMap"
          component={FoodDeliveryMap}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer> 
  );
}

export default App;
