import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { updateProfile, getProfile } from "./client.actions";
import { isError } from "../utils/isError";
import { IClient } from "@/types/client.interface";
import { getUserStorage } from "@/services/auth/auth.helper";

interface IInitialState {
  client: IClient;
  isLoading: boolean;
  error: string | null | undefined;
}

const initialState: IInitialState = {
  client: getUserStorage() || null,
  isLoading: false,
  error: null,
};

export const clientSlice = createSlice({
  name: "client",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProfile.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.error = null;
        state.isLoading = false;
        console.log("asdc", state, action);
        state.client = action.payload;
      })
      .addCase(updateProfile.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.error = null;
        state.isLoading = false;
        state.client = action.payload;
      })
      .addMatcher(
        (action) => isError(action, "client"),
        (state, action: PayloadAction<string>) => {
          state.error = action.payload;
          state.isLoading = false;
        }
      );
  },
});
