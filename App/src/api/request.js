import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const service = axios.create({
  baseURL: 'http://10.0.2.2:5002/api/', // local da sua api
  timeout: 1000000, // Timeout
});

// request
service.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('tcc:token');

    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token; // insere o token JWT 
    }

    return config;
  },
  error => {
    console.error(error);
    return Promise.reject(error);
  }
);

export default service;


