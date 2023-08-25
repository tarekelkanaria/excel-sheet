import { DispatchAction, RootState } from "@/types";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const useAppDispatch = () => useDispatch<DispatchAction>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
