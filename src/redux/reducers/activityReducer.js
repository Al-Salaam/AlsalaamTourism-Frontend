import { createSlice } from "@reduxjs/toolkit"
import { createActivitiesReviews, fetchActivities, fetchActivitiesReviews, fetchActivityById } from "../actions/activityAction";

const getCartDataFromLocalStorage = () => {
    const cartData = localStorage.getItem('shoppingCart');
    return cartData ? JSON.parse(cartData) : [];
};

const saveCartDataToLocalStorage = (cart) => {
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
};


const initialState = {
    loading: false,
    error: null,
    message : null,
    data: [],
    cart: getCartDataFromLocalStorage(),
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
        },
        addToCart: (state, action) => {
            const newCartItem = action.payload;
            const existingItemIndex = state.cart.findIndex(item => item.activityId === newCartItem.activityId);
 
            if (existingItemIndex !== -1) {
                // An item with the same activityId already exists
                state.error = 'Item already exists in the cart.';
                state.message = ''; // Clear any previous success message
            } else {
                // Remove the existing cart data from local storage
                localStorage.removeItem('shoppingCart');
                
                // Add the new item to the cart
                state.cart = [newCartItem];
 
                // Save the updated cart data to local storage
                saveCartDataToLocalStorage(state.cart);
 
                // Set a success message
                state.message = 'Item successfully added to the cart.';
            }
        },

        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(item => item.activityId !== action.payload.activityId);
            saveCartDataToLocalStorage(state.cart); // Save updated cart data to local storage
        },

        getAddToCartData: (state) => {
            state.cart = getCartDataFromLocalStorage(); // Retrieve cart data from local storage
        },
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

export const { clearError, clearMessage, addToCart, removeFromCart, getAddToCartData } = activityReducer.actions;
export default activityReducer.reducer;