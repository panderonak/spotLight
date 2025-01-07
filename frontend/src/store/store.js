import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import registrationReducer from "../features/registrationSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    registration: registrationReducer,
  },
});

export default store;
