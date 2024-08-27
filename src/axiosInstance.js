import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.org",
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor
axiosInstance.interceptors.request.use(
  async (config) => {
    const token = "YOU_ACCESS_TOKEN";
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    // Handle global errors here
    if (error.response && error.response.status === 401) {
      // Handle unauthorized access
      console.error("Session expired, redirecting to signin...");

      /** You can perform redirection or other actions here
       *
       *
       * */
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
