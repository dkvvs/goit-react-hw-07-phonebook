import { createAction } from '@reduxjs/toolkit';

export const fetchContactsRequest = createAction(
  'contacts/fetchContactsRequest',
);
export const fetchContactsSuccess = createAction(
  'contacts/fetchContactsSuccess',
);
export const fetchContactsError = createAction('contacts/fetchContactsError');

export const addRequest = createAction('contacts/addRequest');
export const addSuccess = createAction('contacts/addSuccess');
export const addError = createAction('contacts/addError');

export const deleteRequest = createAction('contacts/deleteRequest');
export const deleteSuccess = createAction('contacts/deleteSuccess');
export const deleteError = createAction('contacts/deleteError');

export const changeFilter = createAction('contacts/changeFilter');
