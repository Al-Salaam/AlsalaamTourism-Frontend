import { createAsyncThunk } from "@reduxjs/toolkit";
import { https } from "../../helpers/https";

export const getBookingDetailsForUsers = createAsyncThunk('booking/getBookingDetailsForUsers', async () => {
    try {
        
        const response = await https.get('/bookings/user');
        return response.data;
    } catch (error) {
        throw error?.response?.data?.message;
    }
})