import { getUserIdStorage } from "@/services/auth/auth.helper";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { checkAuth, login, logOut, register } from "./auth.actions";
import { isError } from "../utils/isError";
interface IInitialState {
  userId: number | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: IInitialState = {
  userId: (getUserIdStorage() as number) || null,
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
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userId = action.payload.userId;
      })

      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userId = action.payload.userId;
      })
      .addCase(logOut.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.isLoading = false;
      })

      .addCase(checkAuth.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userId = action.payload.userId;
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});
