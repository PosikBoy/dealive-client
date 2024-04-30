import { createAsyncThunk } from "@reduxjs/toolkit";
import { IProfileInfo, IUser } from "../profile/profile.interface";
import profileService from "@/services/profile/profile.service";
import { saveDataToStorage } from "@/services/auth/auth.helper";

export const getProfile = createAsyncThunk<IUser, void>(
  "profile/getProfile",
  async (_, thunkApi) => {
    try {
      const response = await profileService.getProfile();
      return response;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const updateProfile = createAsyncThunk<IUser, IProfileInfo>(
  "profile/updateProfile",
  async (data, thunkApi) => {
    try {
      const response = await profileService.updateProfile(data);

      return response;
    } catch (error: any) {
      console.log(error);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
