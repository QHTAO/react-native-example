import axios from 'axios';
import {getToken} from './token';

const instance = axios.create();
instance.interceptors.request.use(async function (config) {
  const token = await getToken();
  config.headers['Authorization'] = `Bearer ${token}`;
  return config;
});

export default instance;
