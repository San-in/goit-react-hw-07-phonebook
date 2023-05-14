import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import {
  StyledContactItem,
  StyledContactBtn,
} from 'components/ContactItem/ContactItem.styled';
import { deleteContact } from 'redux/contacts/contactsOperations';

export const ContactItem = ({ item: { name, phone, id } }) => {
  const dispatch = useDispatch();

  return (
    <StyledContactItem>
      <p>
        {name}: {phone}
      </p>
      <StyledContactBtn
        type="button"
        onClick={({ target: { id } }) => dispatch(deleteContact(id))}
        id={id}
      >
        Delete
      </StyledContactBtn>
    </StyledContactItem>
  );
};

ContactItem.propTypes = {
  item: PropTypes.exact({
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};
