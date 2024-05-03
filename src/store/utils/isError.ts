import { Action } from "@reduxjs/toolkit";

export const isError = (action: Action) => {
  return action.type.endsWith("rejected");
};
