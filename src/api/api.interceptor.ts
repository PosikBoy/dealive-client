import {
  getAccessTokenStorage,
  removeInfoStorage,
} from "@/services/auth/auth.helper";
import axios from "axios";
import { errorCatch } from "./api.helper";
import authService from "@/services/auth/auth.service";
import { ServerMessages } from "@/constants/ServerMessages";
import { SERVER_URL } from "@/constants/URLS";

const instance = axios.create({
  withCredentials: true,
  baseURL: SERVER_URL,
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
        errorCatch(error) === ServerMessages.INVALID_TOKEN ||
        errorCatch(error) === ServerMessages.AUTH_REQUIRED) &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        await authService.getNewTokens();
        return instance.request(originalRequest);
      } catch (error) {
        if (
          errorCatch(error) === ServerMessages.INVALID_TOKEN ||
          errorCatch(error) === ServerMessages.AUTH_REQUIRED
        ) {
          removeInfoStorage();
        }
      }
    }
    throw error;
  }
);

export default instance;
