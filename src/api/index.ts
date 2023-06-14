import { BASE_URL, TOKEN } from "@/configs";
import axios from "axios";

const axiosAPI = axios.create({
  baseURL: BASE_URL,
});

// Add a request interceptor
axiosAPI.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    config.headers.tokenByClass = TOKEN;
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosAPI.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    const res = response.data;
    return res;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default axiosAPI;
