import { IEmailPassword } from "./../types/auth.interface";
import { IAuthResponse } from "@/services/types/auth.interface";
import {
  removeInfoStorage,
  saveDataToStorage,
} from "@/services/auth/auth.helper";

import axios from "axios";

import { getContentType } from "@/api/api.helper";

class AuthService {
  async auth(type: "login" | "register", data: IEmailPassword) {
    try {
      const response = await axios.post<
        IEmailPassword,
        { data: IAuthResponse }
      >(process.env.SERVER_URL + "/" + type, data, getContentType());

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
      const response = await axios.post<string, { data: IAuthResponse }>(
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
      const response = await axios.get<string, { data: { message: string } }>(
        process.env.SERVER_URL + "/logout",
        getContentType()
      );
      if (response.data) removeInfoStorage();
      return response.data;
    } catch (error: any) {
      throw Error(error.response.data.message);
    }
  }
}

const authService = new AuthService();
export default authService;
