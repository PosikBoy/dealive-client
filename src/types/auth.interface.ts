import { IClient } from "./client.interface";

export interface IEmailPassword {
  email: string;
  password: string;
}

export interface IAuthResponse {
  client: IClient;
  accessToken: string;
}

export interface IRefreshTokenResponse {
  accessToken: string;
}
export interface ILogOutResponse {
  message: string;
}
