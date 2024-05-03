"use client";

import store from "@/store/store";
import { ReactNode } from "react";
import { Provider } from "react-redux";

interface IStoreProvider {
  children: ReactNode;
}

export const StoreProvider = ({ children }: IStoreProvider) => {
  return <Provider store={store}>{children}</Provider>;
};
