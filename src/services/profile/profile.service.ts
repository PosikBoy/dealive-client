import instance from "@/api/api.interceptor";
import { saveProfileStorage } from "@/services/auth/auth.helper";
import { PROFILE_URL } from "@/constants/URLS";
import { IUser } from "@/types/auth.interface";

interface IProfileInfo {
  name: string;
  email: string;
  phoneNumber: string;
}

class ProfileService {
  async getProfile() {
    try {
      const response = await instance.get<IUser>(PROFILE_URL);
      if (response.data) {
        saveProfileStorage(response.data);
      }
      return response.data;
    } catch (error: any) {
      throw Error(error.response.data.message);
    }
  }
  async updateProfile(data: IProfileInfo) {
    try {
      const response = await instance.put<IUser>(PROFILE_URL, data);
      if (response.data) {
        saveProfileStorage(response.data);
      }
      return response.data;
    } catch (error: any) {
      throw Error(error.response.data.message);
    }
  }
}

const profileService = new ProfileService();
export default profileService;
