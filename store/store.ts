import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/auth.slice";
import { profileSlice } from "./profile/profile.slice";
import { orderFormSlice } from "./orderForm/orderForm.slice";
const rootReducer = combineReducers({
  auth: authSlice.reducer,
  profile: profileSlice.reducer,
  orderForm: orderFormSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

export type TypeRootState = ReturnType<typeof store.getState>;
export type TypeDispatch = typeof store.dispatch;
