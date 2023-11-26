import { createAsyncThunk } from "@reduxjs/toolkit";
import { https } from "../../helpers/https";



export const signup = createAsyncThunk('auth/signup', async (credentials) => {
    try {
        // Make a POST request to your login endpoint
        const response = await https.post('/auth/register', credentials);

        // Axios automatically throws an error for non-2xx responses
        const user = response.data;

        return user;
    } catch (error) {
        throw error?.response?.data?.message;;
    }
})

export const login = createAsyncThunk('auth/login', async (credentials) => {
    try {
        // Make a POST request to your login endpoint
        const response = await https.post('/auth/login', credentials);

        // Axios automatically throws an error for non-2xx responses
        const user = response.data;
        localStorage.setItem('user', JSON.stringify(user));
        return user;
    } catch (error) {
        throw error?.response?.data?.message;;
    }
})


// get user profile function
export const fetchUserProfile = createAsyncThunk('auth/fetchUserProfile', async () => {
    try {
        // Make a GET request to your logout endpoint
        const response = await https.get('/me');

        const user = response?.data;
        return user;
    } catch (error) {
        throw error?.response?.data?.message;
    }
});


// get user profile function
export const logoutUser = createAsyncThunk('auth/logoutUser', async () => {
    try {
        // Make a GET request to your logout endpoint
        const response = await https.get('/logout');

        // Clear user data from local storage after successful logout
        localStorage.removeItem('user'); // Assuming 'user' is the key under which user data is stored

        return response?.data;
    } catch (error) {
        throw error?.response?.data?.message;
    }
});