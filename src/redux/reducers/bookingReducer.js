import { createSlice } from "@reduxjs/toolkit"
import {  getBookingDetailsForUsers } from "../actions/bookingAction"

const initialState = {
    loading : false, 
    error: null ,
    bookings: [],
}

const bookingReducer = createSlice({
    name: 'booking',
    initialState,
    reducers:{

    },
    extraReducers: (builder) => {
        builder
        .addCase(getBookingDetailsForUsers.pending, (state) => {
            state.loading = true;
        })
        .addCase(getBookingDetailsForUsers.fulfilled, (state, action) => {
            state.loading = false;
            state.bookings = action.payload.data.bookings;
        })
        .addCase(getBookingDetailsForUsers.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
        })
    }
})

export default bookingReducer.reducer;