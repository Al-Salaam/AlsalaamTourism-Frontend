import { createSlice } from "@reduxjs/toolkit"
import { fetchActivities } from "../actions/activityAction";

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
    }
})

export const {clearError, clearMessage } = activityReducer.actions;
export default  activityReducer.reducer;