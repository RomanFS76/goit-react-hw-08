import { createSelector } from "@reduxjs/toolkit";

import { selectNameFilter } from "../filters/selectors";

export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;
export const selectContacts = (state) => state.contacts.items;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filters) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filters.toLowerCase()) || contact.number.toLowerCase().includes(filters.toLowerCase())
    );
  }
);
