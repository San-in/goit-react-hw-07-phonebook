import { createSlice } from '@reduxjs/toolkit';
import { STATUS } from 'redux/constants';
import * as handlers from 'redux/contacts/helpersHandlers';
import {
  AnyOfActionsFilteredByStatus,
  getAction,
} from 'redux/contacts/helpersActions';
import {
  addContact,
  deleteContact,
  fetchContacts,
} from 'redux/contacts/contactsOperations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(getAction(fetchContacts), handlers.fulfilledGet)
      .addCase(getAction(addContact), handlers.fulfilledPost)
      .addCase(getAction(deleteContact), handlers.fulfilledDelete)
      .addMatcher(
        AnyOfActionsFilteredByStatus(STATUS.PENDING),
        handlers.pending
      )
      .addMatcher(
        AnyOfActionsFilteredByStatus(STATUS.FULFILLED),
        handlers.fulfilled
      )
      .addMatcher(
        AnyOfActionsFilteredByStatus(STATUS.REJECTED),
        handlers.rejected
      );
  },
});

export const contactsReducer = contactsSlice.reducer;
