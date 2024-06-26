import { createAsyncThunk } from "@reduxjs/toolkit";
import { IProfileInfo } from "@/types/profile.interface";
import profileService from "@/services/profile/profile.service";
import { IUser } from "@/types/auth.interface";

export const getProfile = createAsyncThunk<IUser>(
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
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
