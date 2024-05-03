import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  pickupAddress: string;
  destinationAddress: string;
}

const initialState: IInitialState = {
  pickupAddress: "",
  destinationAddress: "",
};

export const orderFormSlice = createSlice({
  name: "orderForm",
  initialState,
  reducers: {
    addData(state, action) {
      state.pickupAddress = action.payload.pickupAddress;
      state.destinationAddress = action.payload.destinationAddress;
    },
  },
});

export const { addData } = orderFormSlice.actions;
