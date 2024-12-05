export interface IClient extends IProfileInfo {
  id: number;
}

export interface IProfileInfo {
  name: string;
  email: string;
  phoneNumber: string;
}
