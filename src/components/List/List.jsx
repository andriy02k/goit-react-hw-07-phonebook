import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { dellContactsThunk } from '../../store/thunks';
import { contactsSelector, filterSelector } from '../../store/selectors';
import { Lists } from './List.styled'

const List = () => {
  const contacts = useSelector(contactsSelector);
  const filter = useSelector(filterSelector);
  const dispatch = useDispatch();

  const removeContact = id => {
      dispatch(dellContactsThunk(id));
  }

  const filterContact = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = filterContact();
  console.log(filteredContacts);
    
  return (
    <Lists>
          {filteredContacts.map(item => (
              <li key={item.id}>
                  {item.name}: {item.number}
                  <button onClick={() => removeContact(item.id)}>Delete</button>
              </li>
          ))}
    </Lists>
  )
}

export default List