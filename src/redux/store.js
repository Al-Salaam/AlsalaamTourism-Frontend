import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import activityReducer from "./reducers/activityReducer";
import packagesReducer from "./reducers/packagesReducer";
import personalInformationReducer from "./reducers/personalInformationReducer";

import wishlistReducer from "./reducers/wishlistReducer"
import contactReducer from "./reducers/contactReducer";
import bookingReducer from "./reducers/bookingReducer";
import inquiryReducer from "./reducers/inquiryReducer";
import newsLetterReducer from "./reducers/newsLetterReducer";

const initialState = {
    loading: false,
    error: null,
    message: null,
    isAuthenticated: false,
    user: null,
  };
  
  // Function to load the state from localStorage
  const loadState = () => {
    if (typeof window === 'undefined') {
      // Server-side, return initial state
      return initialState;
    }
  
    try {
      const serializedState = localStorage.getItem('user');
      if (serializedState === null) {
        return initialState; // When there is no state in localStorage, return the initial state
      }
      return { ...initialState, user: JSON.parse(serializedState), isAuthenticated: true }; // Parse the JSON string and set it as initial state
    } catch (err) {
      console.error('Error loading state: ', err);
      return initialState; 
    }
  };
  

export const store = configureStore({
    reducer:{
        auth : authReducer,
        activity: activityReducer,
        package: packagesReducer,
        personalInfo: personalInformationReducer,
        wishlist: wishlistReducer,
        contactus: contactReducer,
        booking: bookingReducer,
        inquiry: inquiryReducer,
        newsLetter: newsLetterReducer
    },
    preloadedState: {
        auth: loadState(),
      }
})