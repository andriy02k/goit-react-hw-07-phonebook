import { createSlice } from "@reduxjs/toolkit"
import { getContactsThunk, addContactsThunk, dellContactsThunk } from '../store/thunks'

const handlePaending = state => {
  state.isLoading = true;
};

const handleReject = (state, { payload }) => {
  state.error = payload;
};

const initialState = {
    items: [],
    isLoading: false,
    error: null,
}

const contactSlice = createSlice({
    name: 'contacts',
    initialState,
        extraReducers: (builder) => {
            builder
                .addCase(getContactsThunk.pending, handlePaending)
                .addCase(getContactsThunk.rejected, handleReject)
                .addCase(getContactsThunk.fulfilled, (state, { payload }) => {
                    state.items = payload
                })
                .addCase(addContactsThunk.pending, handlePaending)
                .addCase(addContactsThunk.rejected, handleReject)
                .addCase(addContactsThunk.fulfilled, (state, { payload }) => {
                    state.items = [payload, ...state.items]
                })
                .addCase(dellContactsThunk.pending, handlePaending)
                .addCase(dellContactsThunk.rejected, handleReject)
                .addCase(dellContactsThunk.fulfilled, (state, { payload }) => {
                    state.items = state.items.filter(item => item.id !== payload.id)
                })
	    },
});

export const contactsReducer = contactSlice.reducer;
export const { addContactAction, removeContactAction } = contactSlice.actions;