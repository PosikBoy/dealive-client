import { isRejectedWithValue, UnknownAction } from "@reduxjs/toolkit";

export const isError = (action: UnknownAction, sliceName: string): boolean => {
  return isRejectedWithValue(action) && action.type.startsWith(sliceName);
};
