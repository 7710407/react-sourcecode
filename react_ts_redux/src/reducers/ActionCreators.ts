import { AppDispatch } from "../store/store";
import axios from "axios";
import { IUser } from "../models/IUser";
import { userSlice } from "./UserSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
  "user.fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("404 NOT FOUND");
    }
  }
);

// try {
//     dispatch(userSlice.actions.usersFetching())
//     const response = await axios.get<IUser[]>(
//         "https://jsonplaceholder.typicode.com/users"
//     )
//     dispatch(userSlice.actions.usersFetchingSuccess(response.data))
// } catch (error: any) {
//     dispatch(userSlice.actions.usersFetchingError(error.message))
// }
