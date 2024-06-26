import { IAuthResponse, IUser } from "@/types/auth.interface";

export const saveAccessTokenStorage = (accessToken: string) => {
  localStorage.setItem("accessToken", accessToken);
};

export const saveProfileStorage = (data: IUser) => {
  localStorage.setItem("user", JSON.stringify(data));
};

export const saveDataToStorage = (data: IAuthResponse) => {
  saveAccessTokenStorage(data.accessToken);
  localStorage.setItem("user", JSON.stringify(data.user));
};

export const removeInfoStorage = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("user");
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
    ? JSON.parse(localStorage.getItem("user") || "{}")
    : null;
  return user || null;
};
