import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3004",
});

instance.interceptors.request.use(config => {
  config.headers.Authorization = window.localStorage.getItem("token");

  console.log(config);

  return config;
});

export default instance;
