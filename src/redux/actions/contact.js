import { createAsyncThunk } from "@reduxjs/toolkit";
import { https } from "../../helpers/https";

export const contactAsync = createAsyncThunk(
    'contact/contactAsync',
    async (contactData) => {
        try {
            const response = await https.post(`/contact`, contactData);
            return response.data; // Update to match the response structure
        } catch (error) {
            throw error?.response?.data?.message;
        }
    }
);