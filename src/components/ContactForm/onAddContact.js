import { toast } from 'react-toastify';
import { addContact } from 'redux/contacts/contactsOperations';
import { changeFilter } from 'redux/filterSlice';

export const onAddContact = (e, dispatch, contacts) => {
  e.preventDefault();
  const { name, number } = e.currentTarget;
  const isContactExist = contacts.find(
    contact => contact.name.toLowerCase() === name.value.toLowerCase()
  );
  if (isContactExist) {
    toast.warning(`${name.value} is already in contacts.`);
  } else {
    dispatch(
      addContact({
        name: name.value,
        phone: number.value,
      })
    );
    dispatch(changeFilter(''));
  }

  e.currentTarget.reset();
};
