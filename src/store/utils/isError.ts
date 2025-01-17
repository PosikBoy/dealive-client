import { isRejectedWithValue } from "@reduxjs/toolkit";

export const isError = (action: any, sliceName: string) => {
  return isRejectedWithValue(action) && action.type.startsWith(sliceName);
};
