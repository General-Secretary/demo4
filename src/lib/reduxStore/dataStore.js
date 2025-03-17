import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice"

export const store = configureStore({
    reducer: { authReducer}, middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})