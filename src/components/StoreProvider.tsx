"use client";

import { ReactNode } from "react";
import { Provider } from "react-redux";

import store from "@/store/store";

interface IStoreProvider {
  children: ReactNode;
}

export const StoreProvider = ({ children }: IStoreProvider) => {
  return <Provider store={store}>{children}</Provider>;
};
