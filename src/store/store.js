import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './sliceContacts';
import { filterReducer } from './sliceFilter';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'contacts',
    storage,
    whitelist: ['contacts']
};
 
const persistedReducer = persistReducer(persistConfig, contactsReducer);

const reducer = {
    contacts: persistedReducer,
    filter: filterReducer,
};



export const store = configureStore({ reducer });
export const persistor = persistStore(store);
