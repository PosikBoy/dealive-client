import { IProfileResponse } from "./profile.interface";

export interface IEmailPassword {
  email: string;
  password: string;
}

export interface IAuthResponse {
  user: IProfileResponse;
  accessToken: string;
}
