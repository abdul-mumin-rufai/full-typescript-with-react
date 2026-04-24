import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";
import type { TypedUseSelectorHook } from "react-redux";

export const useAppDispatch: () => AppDispatch = useDispatch; // created a custom hook and wrap the AppDispatch type around it
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector; //created a custom hook and wrap the RootState type around it