import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://dev-api.pocketthieves.click/api",
  timeout: 60000,
  headers: {
    "Content-Type": "application/json", // Default headers
    Accept: "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const loggedIn = JSON.parse(localStorage.getItem("loggedIn") || "null");
    const token = loggedIn?.accessToken ?? null;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use();

export default axiosInstance;
