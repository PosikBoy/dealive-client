import { getUserStorage } from "@/services/auth/auth.helper";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { checkAuth, login, logOut, registration } from "./auth.actions";
import { isError } from "../utils/isError";
import { IClient } from "@/types/client.interface";

interface IInitialState {
  client: IClient | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: IInitialState = {
  client: getUserStorage() || null,
  isLoading: false,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registration.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(registration.fulfilled, (state, action) => {
        state.isLoading = false;
        state.client = action.payload.client;
        state.error = null;
      })
      .addCase(login.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.client = action.payload.client;
        state.error = null;
      })
      .addCase(logOut.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.client = null;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(checkAuth.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(checkAuth.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
      })
      .addMatcher(
        (action) => isError(action, "auth"),
        (state, action: PayloadAction<string>) => {
          state.error = action.payload;
          state.isLoading = false;
        }
      );
  },
});
