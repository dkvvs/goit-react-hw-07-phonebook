import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.reducer.contacts;

export const getFilter = state => state.reducer.filter;

export const getVisibleContact = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  },
);
