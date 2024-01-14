import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeContactAction } from '../../store/sliceContacts';
import { Lists } from './List.styled'

const List = () => {
  const { contacts } = useSelector((state) => state.contacts);
  const { filter } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const removeContact = id => {
      dispatch(removeContactAction(id));
  }

  const filterContact = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = filterContact();
    
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