import {GET_USER} from "./../Types/type";
import {LOG_IN} from "./../Types/type";
import {UPDATE_USER} from "./../Types/type";
import {SIGNUP_USER} from "./../Types/type";
import {LOG_OUT} from "./../Types/type";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default async(state = null, action) => {
    switch (action.type) {
        case GET_USER:
            state = action.payload;
            return {
                data: state,
                alert: false
            };
        case LOG_IN:
            state = action.payload;
            return { 
                
                data: state,
                alert: false
            };
        case SIGNUP_USER:
            state = action.payload;
            return { 
                
                data: state,
                alert: false
            };
        case UPDATE_USER:
            state = action.payload;
            return { 
                
                data: state,
                alert: false
            };
        case LOG_OUT:
            state = action.payload;
            return { 
                
                data: state,
                alert: false
            };
        default:
            return state;
    }
};