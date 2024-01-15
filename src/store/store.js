import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './sliceContacts';
import { filterReducer } from './sliceFilter';
 
const reducer = {
    contacts: contactsReducer,
    filter: filterReducer,
};

export const store = configureStore({ reducer });

