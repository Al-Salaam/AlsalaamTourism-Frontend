import { createAsyncThunk } from "@reduxjs/toolkit";
import { https } from "../../helpers/https";

export const fetchActivities = createAsyncThunk(
    'activity/fetchActivities',
    async (currentPage) => {
        try {
            const response = await https.get(`/activity?page=${currentPage}`);
            return response.data; // Update to match the response structure
        } catch (error) {
            throw error;
        }
    }
);