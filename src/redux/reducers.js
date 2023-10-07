import { createReducer } from '@reduxjs/toolkit';
import { setFilter } from './actions';

const filterInitial = '';

export const filterReducer = createReducer(filterInitial, {
  [setFilter]: (state, action) => {
    return action.payload;
  },
});
