import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import phonebookReducer from './phonebook-reducer';

const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
  reducer: { reducer: phonebookReducer },

  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
