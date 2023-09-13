import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { reducer as counterReducer } from "./slices/counter/counter.slice";
import { reducer as categoryReducer } from "./slices/category/category.slice";

const rootReducer = combineReducers({
  counter: counterReducer,
  category: categoryReducer,
});

export const store = configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof rootReducer>;
