import PropTypes from 'prop-types'
import axios from 'axios'
import { AccessTokenFromRefreshToken } from '~/services';

const mainRequest = axios.create({
  baseURL: 'http://localhost:8080/',
  timeout: 2000,
  withCredentials: true,
  
})

mainRequest.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("jwtToken");
    if (token) {  
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

mainRequest.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    console.log("error: ", error);

    if (!originalRequest.retryCount) {
      originalRequest.retryCount = 0;
    }

    if (error.response && error.response.status === 401 && originalRequest.retryCount < 1) {
      originalRequest.retryCount++;
     try {
      console.log("401 error....");
      const refreshToken = localStorage.getItem("isRefreshToken");
      const accessToken = localStorage.getItem("jwtToken");
      if (refreshToken) {
        const response = await AccessTokenFromRefreshToken(accessToken);
        if (response) {
          console.log(response);
          localStorage.setItem('jwtToken', response.jwt);
          originalRequest.headers.Authorization = `Bearer ${response.jwt}`;
          return mainRequest(originalRequest);
        }
      }
    } catch (error) {
      //  localStorage.removeItem('jwtToken');
      //  localStorage.removeItem('isRefreshToken');
       
      return Promise.reject(error);
     }
     
    }
    return Promise.reject(error);
  }
)


const get = async (path, options) => {
  const response = await mainRequest.get(path, options)

  return response
}

const post = async (path, options) => {
  const response = await mainRequest.post(path, options)

  return response
}


get.PropTypes = {
  path: PropTypes.string.isRequired,
  options: PropTypes.object,
}

export { get , post}
