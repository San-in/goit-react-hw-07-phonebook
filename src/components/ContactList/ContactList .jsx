import React from 'react';
import { useSelector } from 'react-redux';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { selectFilteredList } from 'redux/selectors';

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredList);

  return (
    <ul>
      {filteredContacts.length ? (
        filteredContacts.map(item => {
          return <ContactItem item={item} key={item.id} />;
        })
      ) : (
        <div>No matches</div>
      )}
    </ul>
  );
};
