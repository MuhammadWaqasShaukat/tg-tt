import axiosInstance from "./axiosInstance";

export const ApiService = {
  get: (url: string, config = {}) =>
    axiosInstance.get(url, config).then((res) => res.data),

  post: (url: string, data: any, config = {}) =>
    axiosInstance.post(url, data, config).then((res) => res.data),

  put: (url: string, data: any, config = {}) =>
    axiosInstance.put(url, data, config).then((res) => res.data),

  patch: (url: string, data: any, config = {}) =>
    axiosInstance.patch(url, data, config).then((res) => res.data),

  delete: (url: string, config = {}) =>
    axiosInstance.delete(url, config).then((res) => res.data),
};
