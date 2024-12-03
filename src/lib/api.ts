import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_PUBLIC_API_URL,
  timeout: 10000,
  timeoutErrorMessage: 'Request timed out',
  headers: {
    Accept: 'application/json',
  },
});

api.interceptors.request.use((conf) => conf);
api.interceptors.response.use((resp) => resp);

export default api;
