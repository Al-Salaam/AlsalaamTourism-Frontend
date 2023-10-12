import { createSlice } from "@reduxjs/toolkit"
import { createActivitiesReviews, fetchActivities, fetchActivitiesReviews, fetchActivityById } from "../actions/activityAction";

const initialState = {
    loading: false,
    error: null,
    message : null,
    data: []
}

const activityReducer = createSlice({
    name: "activity",
    initialState,
    reducers: {
        clearMessage: (state) => {
            state.message = null;
        },
        clearError: (state) => {
            state.error = null;
        }
    },
    extraReducers: (builders) => {
        builders 
        // for fetch all activities
        .addCase(fetchActivities.pending ,(state) => {
            state.loading = true;
        })
        .addCase(fetchActivities.fulfilled ,(state, action) => {
            state.loading = false;
            state.data = action.payload.data.activities;
        })
        .addCase(fetchActivities.rejected ,(state, action) => {
            state.loading = false;
            state.error = action.error;
        })

        // fetch activity by id
        .addCase(fetchActivityById.pending ,(state) => {
            state.loading = true;
        })
        .addCase(fetchActivityById.fulfilled ,(state, action) => {
            state.loading = false;
            state.activity = action.payload.activity;
        })
        .addCase(fetchActivityById.rejected ,(state, action) => {
            state.loading = false;
            state.error = action.error;
        })


        // get all activity reviews
        .addCase(fetchActivitiesReviews.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchActivitiesReviews.fulfilled, (state, action) => {
            state.loading = false;
            state.reviews = action.payload.reviews;
        })
        .addCase(fetchActivitiesReviews.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
        })

        // create the activity review
        .addCase(createActivitiesReviews.pending, (state) => {
            state.loading = true;
        })
        .addCase(createActivitiesReviews.fulfilled, (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
            
        })
        .addCase(createActivitiesReviews.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
        })
    }
})

export const {clearError, clearMessage } = activityReducer.actions;
export default  activityReducer.reducer;