import { createAsyncThunk } from "@reduxjs/toolkit";
import { IClient, IProfileInfo } from "@/types/client.interface";
import profileService from "@/services/profile/profile.service";

export const getProfile = createAsyncThunk<IClient>(
  "client/getProfile",
  async (_, thunkApi) => {
    try {
      const response = await profileService.getProfile();
      return response;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const updateProfile = createAsyncThunk<IClient, IProfileInfo>(
  "client/updateProfile",
  async (data, thunkApi) => {
    try {
      const response = await profileService.updateProfile(data);
      return response;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
