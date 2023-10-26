import { createSlice } from "@reduxjs/toolkit"
import { createInquiryForUser, getInquiryForUser } from "../actions/inquiryAction";

const initialState = {
    loading: false,
    error: null,
    message: null,
}


const inquiryReducer = createSlice({
    name: 'inquiry',
    initialState,
    reducers:{
        clearError: (state) => {
            state.error = null;
        },
        clearMessage: (state) => {
            state.message = null;
        }
    },
    extraReducers : (builder) => {
        builder
        .addCase(createInquiryForUser.pending,(state) => {
            state.loading = true;
        })
        .addCase(createInquiryForUser.fulfilled,(state, action) => {
            state.loading =  false;
            state.message = action.payload.message
        })
        .addCase(createInquiryForUser.rejected,(state, action) => {
            state.loading = false;
            state.error = action.error;
        })
        .addCase(getInquiryForUser.pending,(state) => {
            state.loading = true;
        })
        .addCase(getInquiryForUser.fulfilled,(state, action) => {
            state.loading =  false;
            state.inquiries = action.payload.inquiries
        })
        .addCase(getInquiryForUser.rejected,(state, action) => {
            state.loading = false;
            state.error = action.error;
        })

    }
})

export const { clearError, clearMessage } = inquiryReducer.actions;
export default inquiryReducer.reducer;