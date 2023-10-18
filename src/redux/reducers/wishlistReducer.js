import { createSlice } from "@reduxjs/toolkit"
import { addtoWishlist, fetchWishlistData, removeWishListItems } from "../actions/wishlistAction";

const initialState = {
    loading: false,
    error: null,
    message: null,
    data: []
}

const wishlistReducer = createSlice({
    name: 'wishlist',
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

            .addCase(addtoWishlist.pending, (state) => {
                state.loading = true;

            })
            .addCase(addtoWishlist.fulfilled, (state, action) => {
                state.loading = false;
                state.message = action.payload.message;
            })
            .addCase(addtoWishlist.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error
            })


            // getting wishlist data
            .addCase(fetchWishlistData.pending, (state) => {
                state.loading = true;

            })
            .addCase(fetchWishlistData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload.wishlist;
            })
            .addCase(fetchWishlistData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error
            })


            // remove to wishlist item
            .addCase(removeWishListItems.pending, (state) => {
                state.loading = true;

            })
            .addCase(removeWishListItems.fulfilled, (state, action) => {
                state.loading = false;
                state.message = action.payload.message;
                const itemId = action.meta.arg.itemId; // Get the removed item's ID from action meta
                const itemType = action.meta.arg.itemType; // Get the removed item's type from action meta

                // Filter out the removed item from the wishlist data
                if (itemType === "activity") {
                    state.data.activities = state.data.activities.filter((activity) => activity._id !== itemId);
                } else if (itemType === "package") {
                    state.data.packages = state.data.packages.filter((pkg) => pkg._id !== itemId);
                }

            })
            .addCase(removeWishListItems.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error
            })
    }
})

export const { clearError, clearMessage } = wishlistReducer.actions;
export default wishlistReducer.reducer;