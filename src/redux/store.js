import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import activityReducer from "./reducers/activityReducer";

export const store = configureStore({
    reducer:{
        auth : authReducer,
        activity: activityReducer
    }
})