import Cookies from "@/utils/cookie";
import { IAuthResponse } from "../types/auth.interface";
import { IProfileResponse } from "../types/profile.interface";

export const saveAccessTokenStorage = (accessToken: string) => {
  console.log("saveAccessTokenStorage", accessToken);
  Cookies.setCookie("accessToken", accessToken);
};

export const saveProfileStorage = (data: IProfileResponse) => {
  localStorage.setItem("user", JSON.stringify(data));
};

export const saveDataToStorage = (data: IAuthResponse) => {
  saveAccessTokenStorage(data.accessToken);
  localStorage.setItem("user", JSON.stringify(data.user));
};

export const removeInfoStorage = () => {
  Cookies.deleteCookie("accessToken");
  localStorage.removeItem("user");
};

export const getAccessTokenStorage = () => {
  const accessToken = Cookies.getCookie("accessToken");

  return accessToken || null;
};

export const getUserStorage = () => {
  if (typeof window === "undefined") {
    return null; // на сервере localStorage не доступен
  }
  let user = localStorage
    ? JSON.parse(localStorage.getItem("user") || "{}")
    : null;
  return user || null;
};
