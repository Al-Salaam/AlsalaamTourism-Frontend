import { createSlice } from "@reduxjs/toolkit"
import { addLocation } from "../actions/personalInfoAction";
import { message } from "antd";

const initialState = {
    loading : false,
    error: null, 
    message : null,
}

const personalInfoReducer = createSlice({
    name: "personlInfo", 
    initialState,
    reducers:{
        clearError: (state) => {
            state.error = null;
        },
        clearMessage: (state) => {
            state.message = null;
        }
    }
    , 
    extraReducers : (builder) => {
        builder
        .addCase(addLocation.pending, (state) => {
            state.loading = true;

        })
        .addCase(addLocation.fulfilled, (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
        })
        .addCase(addLocation.rejected, (state ,action) => {
            state.loading = false;
            state.error = action.error
        })
    }
})

export const { clearError, clearMessage } = personalInfoReducer.actions;
export default personalInfoReducer.reducer;