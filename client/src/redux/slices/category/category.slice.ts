import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "Home",
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    changeCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { actions, reducer } = categorySlice;
