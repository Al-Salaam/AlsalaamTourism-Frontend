import { createAsyncThunk } from "@reduxjs/toolkit";
import { https } from "../../helpers/https";

export const fetchActivities = createAsyncThunk(
    'activity/fetchActivities',
    async () => {
        try {
            const response = await https.get(`/activity/loadmore`);
            return response.data; // Update to match the response structure
        } catch (error) {
            throw error;
        }
    }
);

export const fetchActivityById = createAsyncThunk('activity/fetchActivityById', async (id) => {
    try {
        const response = await https.get(`/activity/${id}`);
        return response.data;
    } catch (error) {
        throw error
    }
})


export const fetchActivitiesReviews = createAsyncThunk(
    'activity/fetchActivitiesReviews',
    async (activityId) => {
        try {
            const response = await https.get(`/activity/${activityId}/reviews`);
            return response.data; // Update to match the response structure
        } catch (error) {
            throw error;
        }
    }
);

export const createActivitiesReviews = createAsyncThunk(
    'activity/createActivitiesReviews',
    async ({id, ratingData}) => {
        try {
            const response = await https.put(`/activity/${id}/review`, ratingData);
            return response.data; // Update to match the response structure
        } catch (error) {
            throw error;
        }
    }
);