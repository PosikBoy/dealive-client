export interface IEmailPassword {
  email: string;
  password: string;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
}

export interface IAuthResponse {
  user: IUser;
  accessToken: string;
}

export interface ILogOutResponse {
  message: string;
}
