import { createSlice } from "@reduxjs/toolkit";
import { addContacts, deleteContacts, fetchContacts } from "../contacts/operations";
import { logout } from "../auth/operations";



const handlePending = (state) => {
  state.loading = true;
};

const handleRejected = (state, action) => {
  (state.loading = false), (state.error = action.payload);
};


const initialState = {
  items: [],
  loading: false,
  error: null,
}

const slice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(logout.fulfilled, ()=>{
        return initialState
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        (state.loading = false),
          (state.error = null),
          (state.items = action.payload);
      })
      .addCase(fetchContacts.rejected, handleRejected)

      .addCase(addContacts.pending, handlePending)
      .addCase(addContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContacts.rejected, handleRejected)

      .addCase(deleteContacts.pending, handlePending)
      .addCase(deleteContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      })
      .addCase(deleteContacts.rejected, handleRejected);
  },
});

export const contactsReducer = slice.reducer;


