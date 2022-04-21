import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import contactsActions from 'redux/contacts/contacts-actions';
import { Item, Text, Button } from './ContactItem.styled';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch()
  
  const deleteContact = contactId => {
    dispatch(contactsActions.deleteContact(contactId)
    );
  };

  return (
  <Item>
    <Text>
      {name}:&nbsp; {number}
    </Text>
    <Button type="button" onClick={() => deleteContact(id)}>
      Delete
    </Button>
  </Item>)
};

ContactItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};;

export default ContactItem;
