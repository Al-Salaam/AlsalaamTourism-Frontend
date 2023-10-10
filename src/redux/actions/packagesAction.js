import { createAsyncThunk } from "@reduxjs/toolkit";
import { https } from "../../helpers/https";

export const fetchPackages = createAsyncThunk(
    'packages/fetchPackages',
    async (currentPage) => {
        try {
            const response = await https.get(`/pakages?page=${currentPage}`);
            return response.data; // Update to match the response structure
        } catch (error) {
            throw error;
        }
    }
);