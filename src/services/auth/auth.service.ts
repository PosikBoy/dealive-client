import {
  IEmailPassword,
  IAuthResponse,
  IRefreshTokenResponse,
} from "@/types/auth.interface";
import {
  removeInfoStorage,
  saveAccessTokenStorage,
  saveDataToStorage,
} from "@/services/auth/auth.helper";
import { SERVER_URL, LOGOUT_URL, REFRESH_TOKEN_URL } from "@/constants/URLS";
import axios from "axios";
import instance from "@/api/api.interceptor";
import { ServerMessages } from "@/constants/ServerMessages";

class AuthService {
  async auth(type: "login" | "registration", data: IEmailPassword) {
    try {
      const response = await axios.post<
        IEmailPassword,
        { data: IAuthResponse }
      >(SERVER_URL + "/client/" + type, data, {
        withCredentials: true,
      });
      if (response?.data.accessToken) {
        saveDataToStorage(response.data);
      }
      return response.data;
    } catch (error: any) {
      throw Error(error.response.data.message);
    }
  }
  async getNewTokens() {
    try {
      const response = await axios.get<string, { data: IRefreshTokenResponse }>(
        REFRESH_TOKEN_URL,
        { withCredentials: true }
      );

      if (response.data.accessToken) {
        saveAccessTokenStorage(response.data.accessToken);
      }

      return response.data;
    } catch (error: any) {
      throw Error(error.response.data.message);
    }
  }
  async logOut() {
    try {
      const response = await instance.get<
        string,
        { data: { message: string } }
      >(LOGOUT_URL);
      if (response.data.message === ServerMessages.LOGOUT_SUCCESSFUL)
        removeInfoStorage();
      return response.data;
    } catch (error: any) {
      throw Error(error.response.data.message);
    }
  }
}

const authService = new AuthService();
export default authService;
