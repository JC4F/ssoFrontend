import axios from "axios";
import axiosRetry from "axios-retry";

let store;
export const injectStore = _store => {
  store = _store
}

// Set config defaults when creating the instance
const instance = axios.create({
//   baseURL: "http://localhost:8080",
  // baseURL: process.env.REACT_APP_BACKEND_URL
  withCredentials: true,
});

axiosRetry(instance, {
  retries: 3,
  retryCondition: (error) => {
    return error.response.status === 400 || error.response.status === 405
  },
  retryDelay: (retryCount, error) => {
    return retryCount * 100;
  }
})

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    let headerToken = store.getState()?.account?.userInfo?.access_token ?? "";
    if(headerToken){
      config.headers.Authorization = `Bearer ${headerToken}`;
    }

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
    //any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // if(err.response.status === 400){
    //   let headerToken = store.getState()?.account?.userInfo?.access_token ?? "";
    //   if(headerToken){
    //     err.config.headers.Authorization = `Bearer ${headerToken}`;
    //   }
    //   return axios.request(err.config);
    // }

    if(err && err.response && err.response.data)
        return err.response.data;
    return Promise.reject(err);
  }
);

export default instance;