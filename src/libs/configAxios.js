import axios from "axios";
import { useAuthStore } from "../store/auth/auth";

const apiDeveGeorge = axios.create({
  baseURL: "http://localhost:3000/api",
});

apiDeveGeorge.interceptors.request.use((config) => {
  config.headers = {
    Authorization: `Bearer ${useAuthStore.getState().token}`,
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json",
  };

  return config;
});

export default apiDeveGeorge;
