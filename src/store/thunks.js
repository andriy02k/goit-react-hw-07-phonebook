import { createAsyncThunk } from '@reduxjs/toolkit'
import { getContacts, addContacts, dellContacts } from '../api/api'

export const getContactsThunk = createAsyncThunk(
	'contacts/getContacts',
	async (_, { rejectWithValue }) => {
		try {
			return await getContacts()
		} catch (error) {
			return rejectWithValue(error)
		}
	}
)

export const addContactsThunk = createAsyncThunk(
	'contacts/addContacts',
	async (contact, { rejectWithValue }) => {
		try {
			return await addContacts(contact)
		} catch (error) {
			return rejectWithValue(error)
		}
	}
)

export const dellContactsThunk = createAsyncThunk(
	'contacts/dellContacts',
	async (id, { rejectWithValue }) => {
		try {
			return await dellContacts(id)
		} catch (error) {
			return rejectWithValue(error)
		}
	}
)
