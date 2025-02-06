import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import registrationReducer from "../features/registrationSlice";
import videoUploadReducer from "../features/videoUploadSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    registration: registrationReducer,
    videoUploadState: videoUploadReducer,
  },
});

export default store;
