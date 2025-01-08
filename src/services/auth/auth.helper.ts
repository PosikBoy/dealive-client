import { IAuthResponse } from "@/types/auth.interface";
import { IClient } from "@/types/client.interface";

export const saveAccessTokenStorage = (accessToken: string) => {
  localStorage.setItem("accessToken", accessToken);
};

export const saveProfileStorage = (data: IClient) => {
  localStorage.setItem("client", JSON.stringify(data));
};

export const saveDataToStorage = (data: IAuthResponse) => {
  saveAccessTokenStorage(data.accessToken);
  localStorage.setItem("client", JSON.stringify(data.client));
};

export const removeInfoStorage = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("client");
};

export const getAccessTokenStorage = () => {
  const accessToken = localStorage.getItem("accessToken");
  return accessToken || null;
};

export const getUserStorage = () => {
  if (typeof window === "undefined") {
    return null;
  }

  let user = localStorage
    ? JSON.parse(localStorage?.getItem("client") || "{}")
    : null;
  return user || null;
};
