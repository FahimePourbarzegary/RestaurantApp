import App from "./App";
//Redux
import AuthContext from './components/authContext/context.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { applyMiddleware,createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from "./Reducer/Index";
import { persistStore as persistStoreRow, persistReducer } from 'redux-persist';
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

const persistConfig = {
	key: "root",
	storage: AsyncStorage,
	stateReconciler: autoMergeLevel2
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
import {autoLogin} from './Action/userActions'
import {connect} from 'react-redux'
//... 
import { View, Text } from 'react-native';
import React from 'react';

export default function Main() {
  return (
    <Provider store={store} > 
      <App/>
    </Provider>
  );
}
