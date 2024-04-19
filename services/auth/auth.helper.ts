import Cookies from "@/utils/cookie";
import { IAuthResponse } from "../types/auth.interface";

export const saveAccessTokenStorage = (accessToken: string) => {
  Cookies.setCookie("accessToken", accessToken);
};

export const saveDataToStorage = (data: IAuthResponse) => {
  saveAccessTokenStorage(data.accessToken);
  localStorage.setItem("userId", data.userId.toString());
};

export const removeInfoStorage = () => {
  Cookies.deleteCookie("accessToken");
  localStorage.removeItem("userId");
};

export const getAccessTokenStorage = () => {
  const accessToken = Cookies.getCookie("accessToken");
  return accessToken || null;
};

export const getUserIdStorage = () => {
  if (typeof window === "undefined") {
    return null; // на сервере localStorage не доступен
  }
  let userId = localStorage
    ? parseInt(localStorage.getItem("userId") || "")
    : null;
  return userId || null;
};
