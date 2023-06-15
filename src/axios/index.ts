import axios from "axios";

const instance: any = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 5000,
});

// Add a request interceptor
instance.interceptors.request.use(function (config: any) {
  // Do something before request is sent
  return config;
}, function (error: any) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response: any) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response.data;
}, function (error: any) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});

export default instance;