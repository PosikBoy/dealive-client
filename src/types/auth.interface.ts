import { IProfileInfo } from "./profile.interface";

export interface IUser extends IProfileInfo {
  id: number;
}

export interface IEmailPassword {
  email: string;
  password: string;
}

export interface IAuthResponse {
  user: IUser;
  accessToken: string;
}

export interface ILogOutResponse {
  message: string;
}
