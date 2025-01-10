import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;

const api = axios.create({
  baseURL,
  timeout: 90000,
});

api.interceptors.request.use(
  (config) => {
    // const token = localStorage.getItem("token");
    const token = "19|9lljbauCv126CwPq2N5sbqmlez1XRLddWvtHFN0p0754fb32";

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    if (config.data instanceof FormData) {
      config.headers["Content-Type"] = "multipart/form-data";
    } else {
      config.headers["Content-Type"] = "application/json";
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export const handleError = (error, defaultMessage) => {
  if (error.response) {
    const errorMessage =
      error.response.data?.message ||
      error.response.statusText ||
      defaultMessage;
    console.error(`${defaultMessage} with server response:`, errorMessage);
    throw new Error(errorMessage);
  } else {
    console.error(`${defaultMessage} with error:`, error.message);
    throw new Error(error.message || defaultMessage);
  }
};

export const setAuthToken = (token) => {
  if (token) {
    localStorage.setItem("authToken", token);
    api.defaults.headers.Authorization = `Bearer ${token}`;
  } else {
    localStorage.removeItem("authToken");
    delete api.defaults.headers.Authorization;
  }
};

export default api;
