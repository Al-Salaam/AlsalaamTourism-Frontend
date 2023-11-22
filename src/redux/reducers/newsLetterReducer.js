import { createSlice } from "@reduxjs/toolkit"
import { createNewsLetter } from "../actions/newsLetterAction";

const initialState = {
    loading: false,
    message: null,
    error: null
}

const newLetterReducer = createSlice({
    name: "newsLetter",
    initialState, 
    reducers: {
        clearError: (state) => {
            state.error = null;
        },
        clearMessage: (state) => {
            state.message = null;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(createNewsLetter.pending, (state) => {
            state.loading = true;
        })
        .addCase(createNewsLetter.fulfilled, (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
        })
        .addCase(createNewsLetter.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
        })
    }
})

export const { clearError, clearMessage } = newLetterReducer.actions;
export default newLetterReducer.reducer;