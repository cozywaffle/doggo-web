import { createSlice } from "@reduxjs/toolkit";
import { ICounterInitialState } from "../../types/slicesTypes";

const initialState: ICounterInitialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: state => {
      state.count = state.count + 1;
    },
    decrement: state => {
      state.count = state.count - 1;
    },
  },
});

export const { actions, reducer } = counterSlice;
