import { isAnyOf } from '@reduxjs/toolkit';
import * as operations from 'redux/contacts/contactsOperations';
import { STATUS } from 'redux/constants';

export const AnyOfActionsFilteredByStatus = status => {
  const arrayOfActions = Object.values(operations);
  const actionsFilteredByStatus = arrayOfActions.map(
    itemOperation => itemOperation[status]
  );
  return isAnyOf(...actionsFilteredByStatus);
};

export const getAction = (itemOperation, status = STATUS.FULFILLED) =>
  itemOperation[status].type;
