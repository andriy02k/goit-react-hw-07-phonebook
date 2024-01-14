import { createSlice } from "@reduxjs/toolkit"
import { nanoid } from "nanoid";

const initialState = {
    contacts: [],
}

const contactSlice = createSlice({
    name: 'contacts',
    initialState,
        reducers: {
            addContactAction: {
                prepare: (data) => {
                    const newContact = {
                        id: nanoid(),
                        ...data,
                    }
                    return { payload: newContact }
                },
                reducer: (state, { payload }) => {
                    state.contacts.push(payload);
                },
            },
            removeContactAction: (state, { payload }) => {
                state.contacts = state.contacts.filter(item => item.id !== payload);
            },
        },
});

export const contactsReducer = contactSlice.reducer;
export const { addContactAction, removeContactAction } = contactSlice.actions;