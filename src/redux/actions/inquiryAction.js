import { createAsyncThunk } from "@reduxjs/toolkit";
import { https } from "../../helpers/https";

export const createInquiryForUser = createAsyncThunk('inquiry/createInquiryForUser', async ({ packageId, ...inquiryData }) => {
    try {
        const response = await https.post(`/packages/${packageId}/inquiry`, inquiryData);
        return response.data;
    } catch (error) {
        throw error;
    }
});


export const getInquiryForUser = createAsyncThunk('inquiry/getInquiryForUser', async () => {
    try {
        const response = await https.get('/packages/inquiry/user');
        return response.data;
    } catch (error) {
        throw error;
    }
});