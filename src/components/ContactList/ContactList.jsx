import { useSelector } from 'react-redux';
import { getContacts,getVisibleContacts } from 'redux/contacts/contacts-selectors';
import ContactItem from '../ContactItem/ContactItem';

const ContactList = () => {
  const contacts = useSelector(getContacts)
  const visibledContacts = useSelector(getVisibleContacts)

  return (
  <>
    {contacts && (
      <ul>
          {visibledContacts.map(({ name, id, number }) => {
        return (
          <ContactItem
            key={id}
            id={id}
            name={name}
            number={number}
          />
        );
      })}
      </ul>
    )}
  </>)
};

export default ContactList;
