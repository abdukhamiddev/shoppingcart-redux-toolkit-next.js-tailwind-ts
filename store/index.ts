import { configureStore } from "@reduxjs/toolkit";
import mainSlice from './reducers/main';

export const store = configureStore({
    reducer: {
        main: mainSlice
    }
})
export type AppDispatch = typeof store.dispatch
export type StoreState = ReturnType<typeof store.getState>