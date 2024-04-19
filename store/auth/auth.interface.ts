export interface IEmailPassword {
  email: string;
  password: string;
}

export interface IAuthResponse {
  userId: number;
  accessToken: string;
}

export interface ILogOutResponse {
  message: string;
}
