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
        localStorage.setItem('accessToken', user.accessToken);
        localStorage.setItem('refreshToken', user.refreshToken);
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

        
        return response?.data;
    } catch (error) {
        throw error?.response?.data?.message;
    }
});


export const forgetPassword = createAsyncThunk('auth/forgetPassword', async (email) => {
    try {
        // Make a GET request to your logout endpoint
        const response = await https.post('/auth/forgetpassword', {email});
        return  response?.data;
    } catch (error) {
        throw error?.response?.data?.message;
    }
});

export const resetPassword = createAsyncThunk('auth/resetPassword', async ({token, password}) => {
    try {
        // Make a GET request to your logout endpoint
        const response = await https.put(`/auth/resetpassword/${token}`, {password});
        return  response?.data;
    } catch (error) {
        throw error?.response?.data?.message;
    }
});