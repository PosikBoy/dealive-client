import { TypeDispatch, TypeRootState } from "../store/store";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

export const useTypedDispatch = () => useDispatch<TypeDispatch>();
export const useTypedSelector: TypedUseSelectorHook<TypeRootState> =
  useSelector;
