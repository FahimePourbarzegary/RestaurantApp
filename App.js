import React, {useState, useEffect, useMemo} from 'react';
import {Text, View, ActivityIndicator} from 'react-native';
//navigation
import Onboarding from './components/Onboarding/Onboarding.js';
import Difdish from './components/Onboarding/Difdish.js';
import Login from './components/Login/Login.js';
import ImagePicker from './components/ImagePicker/Imagepicker.js';
import SignUp from './components/SignUp/SignUp.js';
import ForgotPassword from './components/Password/ForgotPassword.js';
import ChangePassword from './components/Password/ChangePassword.js';
import Profile from './components/Profile/Profile.js';
import Edit from './components/Profile/Edit.js';
import CoInfoAddress from './components/Home/CoInfoAddress.js';
import MainMenu from './components/MainMenu/MainMenu.js';
import FoodCompaigns from './components/Home/FoodCompaigns.js';
import Special from './components/Home/Special.js';
import Search from './components/Home/Search.js';
import FoodDetail from './components/Home/FoodDetail.js';
import CategoriesBottomMenue from './components/CategoriesBottomMenue/CategoriesBottomMenue.js';
import FoodFilter from './components/FoodFilter/FoodFilter.js';
import MyCard from './components/MyCard/MyCard.js';
import Favorites from './components/Favorites/Favorites.js';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//*....
//Redux
import AsyncStorage from '@react-native-async-storage/async-storage';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './Reducer/Index';
import {persistStore as persistStoreRow, persistReducer} from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
}; 
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const persistedReducer = persistReducer(persistConfig, reducers);
const store = createStoreWithMiddleware(persistedReducer);
const persistStore = storeToPersist =>
  new Promise(resolve => {
    persistStoreRaw(storeToPersist, undefined, () => {
      registerScreens(storeToPersist, Provider);
      resolve();
    });
  });
import {connect} from 'react-redux';
//...
const Stack = createNativeStackNavigator();
function App(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);
  const getToken = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('token')
        .then(data => data)
        .then(value => {
          setUserToken(JSON.stringify(value));
        })
        .catch(err => console.log(err));
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#EFC151" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding">
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
          name="Special"
          component={Special}
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
          name="Edit"
          component={Edit}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ImagePicker"
          component={ImagePicker}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CoInfoAddress"
          component={CoInfoAddress}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ChangePassword"
          component={ChangePassword}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Favorites"
          component={Favorites}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
