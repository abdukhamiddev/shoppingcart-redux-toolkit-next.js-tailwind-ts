import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, StoreState } from '../../store/intex';



export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<StoreState> = useSelector