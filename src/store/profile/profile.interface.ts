export interface IProfileInfo {
  name: string;
  email: string;
  phoneNumber: string;
}
export interface IUser extends IProfileInfo {
  id: number;
}
