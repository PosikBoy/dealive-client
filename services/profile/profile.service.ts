import instance from "@/api/api.interceptor";
import { IProfileResponse } from "../types/profile.interface";
import { getContentType } from "@/api/api.helper";

const USERS_URL = process.env.SERVER_URL + "/profile";

interface profileInfo {
  name: string;
  secondName: string;
  email: string;
  phoneNumber: string;
}

interface IUpdateProfileResponse {
  message: string;
  profile: IProfileResponse;
}

class ProfileService {
  async getProfile() {
    const response = await instance<IProfileResponse>({
      url: USERS_URL,
      method: "GET",
    });
    return response.data;
  }
  async updateProfile(data: profileInfo) {
    const response = await instance.put<IUpdateProfileResponse>(
      process.env.SERVER_URL + "/profile",
      data,
      getContentType()
    );
    return response.data.profile;
  }
}

const profileService = new ProfileService();
export default profileService;
