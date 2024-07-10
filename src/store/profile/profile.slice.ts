import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { updateProfile, getProfile } from "./profile.actions";
import { isError } from "../utils/isError";
import { IUser } from "@/types/auth.interface";

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
        state.error = null;
        state.isLoading = true;
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.error = null;
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(updateProfile.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.error = null;
        state.isLoading = false;
        state.user = action.payload;
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        console.log("aksdfn");
        state.isLoading = false;
      });
  },
});
