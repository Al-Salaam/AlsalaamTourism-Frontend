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