import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as authUser } from "./slices/auth.slice";

const RootReducer = combineReducers({
  auth: authUser,
});

export const store = configureStore({
  reducer: RootReducer,
});

export type RootState = ReturnType<typeof RootReducer>;
export type AppDispatch = typeof store.dispatch;
