import { createSlice } from "@reduxjs/toolkit";
import { updateProfile, getProfile } from "./profile.actions";
import { IUser } from "./profile.interface";

interface IInitialState {
  user: IUser;
  isLoading: boolean;
}

const initialState: IInitialState = {
  user: {
    id: 0,
    name: "",
    secondName: "",
    email: "",
    phoneNumber: "",
  },
  isLoading: false,
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
        state.user = action.payload;
      })
      .addCase(getProfile.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(updateProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(updateProfile.rejected, (state) => {
        state.isLoading = false;
      });
  },
});
