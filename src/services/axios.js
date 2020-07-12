import axios from "axios";

axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    console.log({error})
    return Promise.reject(error);
  });

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.log({error})
    return Promise.reject(error);
  });

const $axios = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  timeout: 3000
});




export default $axios;
