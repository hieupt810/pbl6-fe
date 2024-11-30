import axios, { AxiosError } from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_PUBLIC_API_URL,
  timeout: 10000,
  timeoutErrorMessage: 'Request timed out',
  headers: {
    Accept: 'application/json',
  },
});

class RequestError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'RequestError';
  }
}

api.interceptors.request.use(
  (config) => config,
  (error) => {
    if (error instanceof AxiosError) {
      return Promise.reject(new RequestError(error.message));
    } else {
      return Promise.reject(new RequestError('Something went wrong'));
    }
  },
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error instanceof AxiosError) {
      return Promise.reject(new RequestError(error.message));
    } else {
      return Promise.reject(new RequestError('Something went wrong'));
    }
  },
);

export default api;
