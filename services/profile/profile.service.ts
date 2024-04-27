import instance from "@/api/api.interceptor";
import { IProfileResponse } from "../types/profile.interface";
import { getContentType } from "@/api/api.helper";
import { saveDataToStorage, saveProfileStorage } from "../auth/auth.helper";

const USERS_URL = process.env.SERVER_URL + "/profile";

interface IProfileInfo {
  name: string;
  email: string;
  phoneNumber: string;
}

class ProfileService {
  async getProfile() {
    const response = await instance<IProfileResponse>({
      url: USERS_URL,
      method: "GET",
    });
    return response.data;
  }
  async updateProfile(data: IProfileInfo) {
    const response = await instance.put<IProfileResponse>(
      process.env.SERVER_URL + "/profile",
      data,
      getContentType()
    );
    if (response.data) {
      saveProfileStorage(response.data);
    }
    return response.data;
  }
}

const profileService = new ProfileService();
export default profileService;
