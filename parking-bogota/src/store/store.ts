import { configureStore } from "@reduxjs/toolkit";
import parqueaderoReducer from "./parqueaderoSlice";

export const store = configureStore({
  reducer: {
    parqueaderos: parqueaderoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
