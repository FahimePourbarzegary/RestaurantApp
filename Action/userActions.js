import {SET_USER} from './../Types/type';
import {LOG_OUT} from './../Types/type';
import {LOG_IN} from './../Types/type';
import AsyncStorage from '@react-native-async-storage/async-storage';
// Action Creators
import axios from 'axios';
const setUser = payload => ({type: 'SET_USER', payload});
export const logUserOut = () => ({type: 'LOG_OUT'});
export const logUserIn = () => ({type: 'SET_USER'});
const AuthLogin = res => ({type: 'LOG_IN', payload: res});
// Methods

export default AuthUser = authInfo => async dispatch => {
  const res = await axios.post(
    'http://192.168.43.121/api/User/AuthUser',
    authInfo,
  );
  dispatch(AuthLogin(res.data));
  await AsyncStorage.setItem('token', 'token');
};
// https://iconscout.com/icon/
// https://react-svgr.com/playground/?icon=true&native=true
