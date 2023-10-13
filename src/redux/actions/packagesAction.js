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

export const fetchPackagesById = createAsyncThunk('packages/fetchPackagesById', async (id) => {
    try {
        const response = await https.get(`/pakages/${id}`);
        return response.data;
    } catch (error) {
        throw error
    }
})


export const fetchPackagesReviews = createAsyncThunk(
    'packages/fetchPackagesReviews',
    async (id) => {
        try {
            const response = await https.get(`/pakages/${id}/reviews`);
            return response.data; // Update to match the response structure
        } catch (error) {
            throw error;
        }
    }
);

export const createPackagesReviews = createAsyncThunk(
    'packages/createPackagesReviews',
    async ({id, ratingData}) => {
        try {
            const response = await https.put(`/pakages/${id}/reviews`, ratingData);
            return response.data; // Update to match the response structure
        } catch (error) {
            throw error;
        }
    }
);