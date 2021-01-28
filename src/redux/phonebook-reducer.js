import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  fetchContactsSuccess,
  addSuccess,
  deleteSuccess,
  changeFilter,
} from './phonebook-actions';

const contacts = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [addSuccess]: (state, { payload }) => [...state, payload],
  [deleteSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const error = createReducer(null, {});

export default combineReducers({
  contacts,
  filter,
  error,
});
