import { createAsyncThunk } from "@reduxjs/toolkit";
import { https } from "../../helpers/https";

export const login = createAsyncThunk('auth/login', async (credentials) => {
    try {
        // Make a POST request to your login endpoint
        const response = await https.post('/auth/login', credentials);

        // Axios automatically throws an error for non-2xx responses
        const user = response.data;
        localStorage.setItem('user', JSON.stringify(user));
        return user;
    } catch (error) {
        throw error;
    }
})