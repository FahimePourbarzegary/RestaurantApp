import {GET_USER} from './../Types/type';
import axios from 'axios';

export default params => async dispatch => {
  const res = await axios.post('http://192.168.43.121/api/User');
  dispatch(putAsync(res.data));
};

const putAsync = res => ({
  type: PUT_USER,
  payload: res,
});
