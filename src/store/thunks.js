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
	async (_, { rejectWithValue }) => {
		try {
			return await addContacts()
		} catch (error) {
			return rejectWithValue(error)
		}
	}
)

export const dellContactsThunk = createAsyncThunk(
	'contacts/dellContacts',
	async (_, { rejectWithValue }) => {
		try {
			return await dellContacts()
		} catch (error) {
			return rejectWithValue(error)
		}
	}
)
