import { createSlice } from "@reduxjs/toolkit"

const filterSlice = createSlice({
    name: 'filter',
    initialState: '',
        reducers: {
            addFilter: (state, { payload }) => {
                state.filter = payload;
            },
        },
});

export const filterReducer = filterSlice.reducer;
export const { addFilter } = filterSlice.actions;