// import { createSelector } from "@reduxjs/toolkit";

// import { selectNameFilter } from "../filters/selectors";

export const selectLoading = (state) => state.auth.loading;
export const selectError = (state) => state.auth.error;
export const selectUser = (state) => state.auth.user;


selectUser