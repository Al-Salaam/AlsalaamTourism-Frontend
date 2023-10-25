import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import activityReducer from "./reducers/activityReducer";
import packagesReducer from "./reducers/packagesReducer";
import personalInformationReducer from "./reducers/personalInformationReducer";

import wishlistReducer from "./reducers/wishlistReducer"
import contactReducer from "./reducers/contactReducer";
import bookingReducer from "./reducers/bookingReducer";
import inquiryReducer from "./reducers/inquiryReducer";



export const store = configureStore({
    reducer:{
        auth : authReducer,
        activity: activityReducer,
        package: packagesReducer,
        personalInfo: personalInformationReducer,
        wishlist: wishlistReducer,
        contactus: contactReducer,
        booking: bookingReducer,
        inquiry: inquiryReducer
    }
})