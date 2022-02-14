import {GET_USER} from './../Types/type';
import axios from 'axios';

export default params => async dispatch => {
  const res = await axios
    .get('http://192.168.43.121/api/User')
    .then(res => dispatch(getAsync(res.data)))
    .catch(err => {
      console.log(err);
    });
};

const getAsync = res => ({
  type: GET_USER,
  payload: res,
});
