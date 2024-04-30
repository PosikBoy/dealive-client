import {
  getAccessTokenStorage,
  removeInfoStorage,
} from "@/services/auth/auth.helper";
import axios from "axios";
import { errorCatch } from "./api.helper";
import authService from "@/services/auth/auth.service";
import Cookies from "@/utils/cookie";

const instance = axios.create({
  withCredentials: true,
  baseURL: process.env.SERVER_URL,
  headers: { "Content-Type": "application/json" },
});

instance.interceptors.request.use((config) => {
  const accessToken = getAccessTokenStorage();
  if (config.headers && accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

instance.interceptors.response.use(
  (config) => config,
  async (error) => {
    const originalRequest = error.config;

    if (
      (error.response.status === 401 ||
        errorCatch(error) === "jwt expired" ||
        errorCatch(error) === "Auth required") &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        authService.getNewTokens();
        return instance.request(originalRequest);
      } catch (error) {
        if (errorCatch(error) === "jwt expired") {
          removeInfoStorage();
        }
      }
    }
    throw error;
  }
);

export default instance;
