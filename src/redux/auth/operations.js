import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://connections-api.goit.global",
});

export const register = createAsyncThunk(
  "auth/register",
  async (_, thunkAPI) => {
    try {
      const { data } = await instance.post("/users/signup");
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (values, thunkAPI) => {
    try {
      const { data } = await instance.post("/users/login", values);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logOut = createAsyncThunk(
  "auth/logout",
  async (contactId, thunkAPI) => {
    try {
      const { data } = await instance.post(`/users/logout`);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const refresh = createAsyncThunk(
  "auth/refresh",
  async (contactId, thunkAPI) => {
    try {
      const { data } = await instance.get(`/users/current`);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);