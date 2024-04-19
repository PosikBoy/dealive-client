import { IUser } from "./profile.interface";

export interface IEmailPassword {
  email: string;
  password: string;
}

export interface IAuthResponse {
  userId: number;
  accessToken: string;
}
