import { IEmailPassword, IAuthResponse } from "@/types/auth.interface";
import {
  removeInfoStorage,
  saveDataToStorage,
} from "@/services/auth/auth.helper";
import { SERVER_URL, LOGOUT_URL, REFRESH_TOKEN_URL } from "@/constants/URLS";
import axios from "axios";
import instance from "@/api/api.interceptor";

class AuthService {
  async auth(type: "login" | "register", data: IEmailPassword) {
    try {
      const response = await axios.post<
        IEmailPassword,
        { data: IAuthResponse }
      >(SERVER_URL + "/" + type, data, {
        withCredentials: true,
      });
      console.log(response);
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
      const response = await axios.get<string, { data: IAuthResponse }>(
        REFRESH_TOKEN_URL,
        { withCredentials: true }
      );

      if (response.data.accessToken) {
        saveDataToStorage(response.data);
      }

      return response.data;
    } catch (error: any) {
      throw Error(error.response.data.message);
    }
  }
  async logOut() {
    try {
      const response = await instance.post<
        string,
        { data: { message: string } }
      >(LOGOUT_URL);
      if (response.data.message === "logout was successful")
        removeInfoStorage();
      return response.data;
    } catch (error: any) {
      throw Error(error.response.data.message);
    }
  }
}

const authService = new AuthService();
export default authService;
