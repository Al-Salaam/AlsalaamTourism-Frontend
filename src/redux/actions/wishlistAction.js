import { createAsyncThunk } from "@reduxjs/toolkit";
import { https } from "../../helpers/https";

export const addtoWishlist = createAsyncThunk(
    'wishlist/addtoWishlist',
    async (whistlistData) => {
        try {
            const response = await https.post(`/wishlist/add-to-wishlist`, whistlistData);
            return response.data; // Update to match the response structure
        } catch (error) {
            throw error?.response?.data?.message;
        }
    }
);


export const fetchWishlistData = createAsyncThunk(
    'wishlist/fetchWishlistData',
    async () => {
        try {
            const response = await https.get(`/wishlist`);
            return response.data; // Update to match the response structure
        } catch (error) {
            throw error?.response?.data?.message;
        }
    }
);


export const removeWishListItems = createAsyncThunk(
    'wishlist/removeWishListItems',
    async ({ itemId, itemType }) => {
        try {
            const response = await https.delete(`/wishlist/remove-from-wishlist`, { data: { itemId, itemType } });
            return response.data; // Update to match the response structure
        } catch (error) {
            throw error?.response?.data?.message;
        }
    }
);

