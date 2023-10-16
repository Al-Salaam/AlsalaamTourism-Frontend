import { createAsyncThunk } from "@reduxjs/toolkit";
import { https } from "../../helpers/https";

export const addLocation = createAsyncThunk(
    'personlInfo/addLocation',
    async (locationData) => {
        try {
            const response = await https.put(`/addlocation`, locationData);
            return response.data; // Update to match the response structure
        } catch (error) {
            throw error;
        }
    }
);



export const addPersonalInfo = createAsyncThunk(
    'personlInfo/addPersonalInfo',
    async (personalData) => {
        try {
            const response = await https.put(`/updateperfonalinfo`, personalData);
            return response.data; // Update to match the response structure
        } catch (error) {
            throw error;
        }
    }
);


export const changePasswordAction = createAsyncThunk(
    'personlInfo/changePasswordAction',
    async (passData) => {
        try {
            const response = await https.put(`/auth/change-password`, passData);
            return response.data; // Update to match the response structure
        } catch (error) {
            throw error;
        }
    }
);