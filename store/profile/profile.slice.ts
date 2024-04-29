import { createSlice } from "@reduxjs/toolkit";
import { updateProfile, getProfile } from "./profile.actions";
import { IUser } from "./profile.interface";

interface IInitialState {
  user: IUser;
  isLoading: boolean;
  error: string | null | undefined;
}

const initialState: IInitialState = {
  user: {
    id: 0,
    name: "",
    email: "",
    phoneNumber: "",
  },
  isLoading: false,
  error: null,
};

export const profileSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.user = action.payload;
      })
      .addCase(getProfile.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      })
      .addCase(updateProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      });
  },
});
