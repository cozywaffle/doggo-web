import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { reducer as counterReducer } from "./slices/counter/counter.slice";

const rootReducer = combineReducers({
  counter: counterReducer,
});

export const store = configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof rootReducer>;
