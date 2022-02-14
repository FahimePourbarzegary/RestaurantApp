/*import {SET_USER} from "./../Types/type";
import {LOG_OUT} from "./../Types/type";
import AsyncStorage from '@react-native-async-storage/async-storage';
const defaultState = {
    loggedIn:false,
}

const userReducer = async (state = defaultState, action) => {
    switch(action.type){
        case "SET_USER":
         await AsyncStorage.setItem("token","token")
            return {
                loggedIn: true,
            
            }
        case "LOG_OUT":
            await AsyncStorage.clear()
            await AsyncStorage.setItem("token",null)
            return {
                loggedIn: false,
             
            }
        default: return state
    }
}

export default userReducer;*/