import { createSelector } from '@reduxjs/toolkit';

export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;
export const selectContacts = state => state.contacts.items;
export const selectNameFilter = state => state.filter.name;
export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => contacts.filter(({ name }) => name.toLowerCase().includes(filter))
);
