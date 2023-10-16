import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import activityReducer from "./reducers/activityReducer";
import packagesReducer from "./reducers/packagesReducer";
import personalInformationReducer from "./reducers/personalInformationReducer";
import WishlistReducer from "./reducers/WishlistReducer";



export const store = configureStore({
    reducer:{
        auth : authReducer,
        activity: activityReducer,
        package: packagesReducer,
        personalInfo: personalInformationReducer,
        wishlist: WishlistReducer
    }
})