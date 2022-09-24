import axios from "axios";
import store from "../store";
// import { login } from '../store/user.reducer';

const api = axios.create({
  baseURL: `http://localhost:8080/`,
  withCredentials: true,
});

api.interceptors.request.use((request) => {
  // const state = store.getState();
  let userData = null;

  if (localStorage.getItem("User")) {
    userData = JSON.parse(localStorage.getItem("User"));
  }

  if (request.headers && userData) {
    const token =
      userData.expireDate - Date.now() <= 30000
        ? userData.refreshToken
        : userData.token;
    request.headers["Authorization"] = `Bearer ${token}`;
  }

  return request;
});

api.interceptors.response.use((response) => {
  return response;
});
export default api;
