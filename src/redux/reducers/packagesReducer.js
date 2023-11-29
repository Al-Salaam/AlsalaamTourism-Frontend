import { createSlice } from "@reduxjs/toolkit"
import { createPackagesReviews, fetchPackages, fetchPackagesById, fetchPackagesReviews } from "../actions/packagesAction";

const initialState = {
    loading: false,
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
                state.data = action?.payload?.data?.pakages;
                state.page = action?.payload?.data?.page;
                state.totalPages = action?.payload?.data?.totalPages;
                state.totalPakages = action?.payload?.data?.totalPakages;
            })
            .addCase(fetchPackages.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error
            })

            // fetch activity by id
            .addCase(fetchPackagesById.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchPackagesById.fulfilled, (state, action) => {
                state.loading = false;
                state.pakage = action.payload.pakage;
            })
            .addCase(fetchPackagesById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error;
            })

            // get all activity reviews
            .addCase(fetchPackagesReviews.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchPackagesReviews.fulfilled, (state, action) => {
                state.loading = false;
                state.reviews = action.payload.reviews;
            })
            .addCase(fetchPackagesReviews.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error;
            })

            // create the activity review
            .addCase(createPackagesReviews.pending, (state) => {
                state.loading = true;
            })
            .addCase(createPackagesReviews.fulfilled, (state, action) => {
                state.loading = false;
                state.message = action.payload.message;

            })
            .addCase(createPackagesReviews.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error;
            })
    }
}
)
export const { clearError, clearMessage } = packagesReducer.actions;
export default packagesReducer.reducer;