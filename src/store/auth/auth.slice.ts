import { getUserStorage } from "@/services/auth/auth.helper";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { checkAuth, login, logOut, register } from "./auth.actions";
import { isError } from "../utils/isError";
import { IUser } from "@/types/auth.interface";

interface IInitialState {
  user: IUser | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: IInitialState = {
  user: getUserStorage() || null,
  isLoading: false,
  error: null,
};

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.error = null;
      })
      .addCase(login.pending, (state) => {
        state.error = null;

        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.error = null;
      })
      .addCase(logOut.pending, (state) => {
        state.error = null;

        state.isLoading = true;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.user = null;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(checkAuth.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.error = null;
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});
