import axios from "axios";

// Set config defaults when creating the instance
const instance = axios.create({
//   baseURL: "http://localhost:8080",
  // baseURL: process.env.REACT_APP_BACKEND_URL
  withCredentials: true,
});

// instance.defaults.withCredentials = true;

// Alter defaults after instance has been created
//instance.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("jwt")}`;

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response && response.data ? response.data : response;
  },
  function (err) {
    if(err && err.response && err.response.data)
        return err.response.data;
    return Promise.reject(err);
  }
);

export default instance;