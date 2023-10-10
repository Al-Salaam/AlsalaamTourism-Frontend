import { createSlice } from "@reduxjs/toolkit"
import { fetchPackages } from "../actions/packagesAction";

const initialState = {
    loading : false,
    error: null,
    message: null,
    data: []
}

const packagesReducer = createSlice({
    name: "packages",
    initialState,
    reducers: {
        clearMessage: (state) => {
            state.message = null;
        },
        clearError: (state) => {
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPackages.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchPackages.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload.data.pakages;
                state.page = action.payload.data.page;
                state.totalPages = action.payload.data.totalPages;
                state.totalPakages = action.payload.data.totalPakages;
            })
            .addCase(fetchPackages.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error
            })
    }
})
export const { clearError, clearMessage } = packagesReducer.actions;
export default packagesReducer.reducer;