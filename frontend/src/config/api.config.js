import axios from "axios";

const apiClient = axios.create({
  baseURL: window.NEW_BASE_URL,
});

const { get, post, put, delete: destroy } = apiClient;
export {
  get as getNewApi,
  put as putNewApi,
  post as postNewApi,
  destroy as destroyNewApi,
};
