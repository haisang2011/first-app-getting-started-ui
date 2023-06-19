import axios from "axios";

const instance: any = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 5000,
});

instance.interceptors.request.use(function (config: any) {
  const token = localStorage.getItem('access-token');
  config.headers['Authorization'] = token ?? null;
  return config;
}, function (error: any) {
  return Promise.reject(error);
});

instance.interceptors.response.use(function (response: any) {
  return response.data;
}, function (error: any) {
  return Promise.reject(error.response);
});

export default instance;