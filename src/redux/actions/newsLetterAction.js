import { createAsyncThunk } from "@reduxjs/toolkit";
import { https } from "../../helpers/https";

export const createNewsLetter = createAsyncThunk(
    'newsLetter/createNewsLetter',
    async (email) => {
        try {
            const response = await https.post(`/subscribe`, {email});
            return response.data; // Update to match the response structure
        } catch (error) {
            throw error;
        }
    }
);