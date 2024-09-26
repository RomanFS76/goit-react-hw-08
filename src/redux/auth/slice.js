import { createSlice } from "@reduxjs/toolkit";
import { register, login, logOut,refresh } from "./operations";



const handlePending = (state) => {
  state.loading = true;
};

const handleRejected = (state, action) => {
  (state.loading = false), (state.error = action.payload);
};

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
}

const slice = createSlice({
  name: "auth",
  initialState, 
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, handlePending)
      .addCase(register.fulfilled, (state, action) => {
        (state.loading = false),
          (state.error = null),
          (state.user = action.payload);
      })
      .addCase(register.rejected, handleRejected)


      // .addCase(login.pending, handlePending)
      // .addCase(login.fulfilled, (state, action) => {
      //   state.loading = false;
      //   state.error = null;
      //   state.items.push(action.payload);
      // })
      // .addCase(login.rejected, handleRejected)
      

      // .addCase(logOut.pending, handlePending)
      // .addCase(logOut.fulfilled, (state, action) => {
      //   state.loading = false;
      //   state.error = null;
      //   state.items = state.items.filter(
      //     (item) => item.id !== action.payload.id
      //   );
      // })
      // .addCase(logOut.rejected, handleRejected)


      // .addCase(refresh.pending, handlePending)
      // .addCase(refresh.fulfilled, (state, action) => {
      //   state.loading = false;
      //   state.error = null;
      //   state.items = state.items.filter(
      //     (item) => item.id !== action.payload.id
      //   );
      // })
      // .addCase(refresh.rejected, handleRejected);
  },
});

export const authReducer = slice.reducer;


