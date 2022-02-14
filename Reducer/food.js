import {GET_FOOD} from "./../Types/type";

export default (state = null, action) => {
    switch (action.type) {
        case GET_FOOD:
            state = action.payload;
            return {
                data: state,
                alert: false
            };
       
        default:
            return state;
    }
};