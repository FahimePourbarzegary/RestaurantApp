import {GET_FOOD} from './../Types/type';
import axios from 'axios';

export default params => async dispatch => {
  const res = await axios
    .get('http://192.168.43.121/api/Food/showFood')
    .then(res => dispatch(getAsync(res.data)))
    .catch(err => {
      console.log(err);
    });
};

const getAsync = res => ({
  type: GET_FOOD,
  payload: res,
});
