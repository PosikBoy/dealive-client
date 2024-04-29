import { IEmailPassword } from "./../types/auth.interface";
import { IAuthResponse } from "@/services/types/auth.interface";
import {
  removeInfoStorage,
  saveDataToStorage,
} from "@/services/auth/auth.helper";

import axios from "axios";
import instance from "@/api/api.interceptor";
import { getContentType } from "@/api/api.helper";

class AuthService {
  async auth(type: "login" | "register", data: IEmailPassword) {
    try {
      const response = await instance.post<
        IEmailPassword,
        { data: IAuthResponse }
      >(process.env.SERVER_URL + "/" + type, data, getContentType());
      console.log(response.data.accessToken);
      if (response.data.accessToken) {
        saveDataToStorage(response.data);
      }
      return response.data;
    } catch (error: any) {
      throw Error(error.response.data.message);
    }
  }
  async getNewTokens() {
    try {
      const response = await instance.get<string, { data: IAuthResponse }>(
        process.env.SERVER_URL + "/refresh",
        getContentType()
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
      >(process.env.SERVER_URL + "/logout");
      if (response.data) removeInfoStorage();
      console.log(response);
      return response.data;
    } catch (error: any) {
      throw Error(error.response.data.message);
    }
  }
}

const authService = new AuthService();
export default authService;
