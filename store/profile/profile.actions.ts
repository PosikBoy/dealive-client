import { createAsyncThunk } from "@reduxjs/toolkit";
import { IProfileInfo, IUser } from "../profile/profile.interface";
import profileService from "@/services/profile/profile.service";

export const getProfile = createAsyncThunk<IUser, void>(
  "profile/getProfile",
  async (_, thunkApi) => {
    try {
      const response = await profileService.getProfile();
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const updateProfile = createAsyncThunk<IUser, IProfileInfo>(
  "auth/login",
  async (data, thunkApi) => {
    try {
      const response = await profileService.updateProfile(data);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
