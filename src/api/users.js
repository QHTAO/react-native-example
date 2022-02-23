import axios from '../helpers/axios';

export const getUsers = () => {
  return axios
    .get('http://192.168.0.102:9000/')
    .then(res => {
      console.log(res.data);
    })
    .catch(error => console.log(error));
};
