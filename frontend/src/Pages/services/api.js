import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export const loginUser = (data) => {
  return axios.post(`${API}/api/auth/login`, data);
};