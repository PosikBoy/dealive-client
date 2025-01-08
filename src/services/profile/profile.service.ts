import instance from "@/api/api.interceptor";
import { saveProfileStorage } from "@/services/auth/auth.helper";
import { PROFILE_URL } from "@/constants/URLS";
import { IClient } from "@/types/client.interface";

interface IProfileInfo {
  name: string;
  email: string;
  phoneNumber: string;
}

class ProfileService {
  async getProfile() {
    try {
      const response = await instance.get<IClient>(PROFILE_URL);
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
      const response = await instance.put<IClient>(PROFILE_URL, data);
      console.log(response.data);
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
