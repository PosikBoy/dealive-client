export interface IProfileInfo {
  name: string;
  email: string;
  phoneNumber: string;
}

export interface IClient extends IProfileInfo {
  id: number;
  userId: number;
  isNumberConfirmed: boolean;
  isEmailConfirmed: boolean;
}
