import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";
import { RootState } from "../store";

export interface IReqData {
  username?: string;
  login: string;
  password: string;
}

export const createUser = createAsyncThunk(
  "auth/createUser",
  async (userData: IReqData) => {
    const { data } = await axios.post("/auth/reg", userData);

    return data;
  },
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (userData: IReqData) => {
    console.log("userData", userData);
    const { data } = await axios.post("/auth/login", userData);

    return data;
  },
);

export const fetchMe = createAsyncThunk("auth/fetchAuthMe", async () => {
  const { data } = await axios.get("/auth/me");

  console.log(data);

  return data;
});

interface IUser {
  avatarUrl: string;
  createdAt: string;
  login: string;
  passwordHash: string;
  updatedAt: string;
  username: string;
  __v: number;
  _id: string;
}

interface IPost {
  createdAt: string;
  imageUrl: string;
  tags: string[];
  text: string;
  title: string;
  updatedAt: string;
  user: IUser;
  viewsCount: number;
  __v: number;
  _id: string;
}

interface IData {
  userData: IUser;
  posts: IPost[];
}

interface IinitialState {
  data: null | IData;
  status: string;
}

const initialState: IinitialState = {
  data: null,
  status: "idle",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = "success";
    });
    builder.addCase(createUser.rejected, state => {
      state.status = "failed";
    });
    builder.addCase(createUser.pending, state => {
      state.status = "loading";
    });

    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = "success";
    });
    builder.addCase(loginUser.rejected, state => {
      state.status = "failed";
    });
    builder.addCase(loginUser.pending, state => {
      state.status = "loading";
    });

    builder.addCase(fetchMe.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = "success";
    });
    builder.addCase(fetchMe.rejected, state => {
      state.status = "failed";
    });
    builder.addCase(fetchMe.pending, state => {
      state.status = "loading";
    });
  },
});

export const selectIsAuth = (state: RootState) => Boolean(state.auth.data);

export const { actions, reducer } = authSlice;
