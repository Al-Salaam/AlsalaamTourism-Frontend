import { createSlice } from "@reduxjs/toolkit"
import { login, signup } from "../actions/authAction";

const initialState = {
    loading: false,
    error: null,
    message: null,
    isAuthenticated: false,
    user: null
}

const authReducer = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        clearMessage: (state) => {
            state.message = null;
        },
        clearError: (state) => {
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder

            // for user sign up
            .addCase(signup.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(signup.fulfilled, (state, action) => {
                state.loading = false;
                state.message = action.payload.message;
            })
            .addCase(signup.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error;
            })



            // for user login
            .addCase(login.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuthenticated = true;
                state.user = action.payload.user;
                state.message = action.payload.message;
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error;
            })
    }
})
export const { clearError, clearMessage } = authReducer.actions;
export default authReducer.reducer;