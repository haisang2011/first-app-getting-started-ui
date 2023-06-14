import axios from "axios";

const instance: any = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 5000,
});

export default instance;