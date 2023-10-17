import { createSlice } from "@reduxjs/toolkit"
import { contactAsync } from "../actions/contact";

const initialState = {
    loading : false,
    error: null,
    message: null
}

const contactReducer = createSlice({
    name: 'contact',
    initialState,
    reducers: {
        clearError: (state) => {
            state.error = null;
        },
        clearMessage : (state) => {
            state.message = null;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(contactAsync.pending ,(state) => {
            state.loading = true;
        })
        .addCase(contactAsync.fulfilled ,(state , action) => {
            state.loading = false;
            state.message = action.payload.message;

        })
        .addCase(contactAsync.rejected ,(state , action) => {
            state.loading = false;
            state.error = action.error;

        })
    }
});

export const { clearError, clearMessage } = contactReducer.actions;
export default contactReducer.reducer;