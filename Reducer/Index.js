import { combineReducers } from "redux";
import UserReducer from "./user";
import FoodReducer from "./food";
import userReducer from './userReducer'
import commentReducer from './commentReducer'


const rootReducer = combineReducers({
    user : UserReducer,
    food : FoodReducer,
    commentReducer,
});

export default rootReducer;