export interface IClient extends IProfileInfo {
  id: number;
  userId: number;
  isNumberConfirmed: boolean;
  isEmailConfirmed: boolean;
}

export interface IProfileInfo {
  name: string;
  email: string;
  phoneNumber: string;
}
