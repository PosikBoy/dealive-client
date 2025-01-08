import authService from "@/services/auth/auth.service";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  IAuthResponse,
  IEmailPassword,
  ILogOutResponse,
} from "@/types/auth.interface";
import { errorCatch } from "@/api/api.helper";
import { ServerMessages } from "@/constants/ServerMessages";

export const registration = createAsyncThunk<
  IAuthResponse,
  IEmailPassword,
  { rejectValue: string }
>("auth/registration", async (data, thunkApi) => {
  try {
    const response = await authService.auth("registration", data);
    return response;
  } catch (error: any) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const login = createAsyncThunk<
  IAuthResponse,
  IEmailPassword,
  { rejectValue: string }
>("auth/login", async (data, thunkApi) => {
  try {
    const response = await authService.auth("login", data);
    return response;
  } catch (error: any) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const logOut = createAsyncThunk<ILogOutResponse, undefined>(
  "auth/logout",
  async (_, thunkApi) => {
    try {
      const response = await authService.logOut();

      return response;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const checkAuth = createAsyncThunk(
  "auth/check-auth",
  async (_, thunkApi) => {
    try {
      const response = await authService.getNewTokens();
      return response;
    } catch (error: any) {
      if (errorCatch(error) === ServerMessages.INVALID_TOKEN) {
        thunkApi.dispatch(logOut());
      }
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
