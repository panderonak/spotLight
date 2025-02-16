import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import registrationReducer from "../features/registrationSlice";
import videoUploadReducer from "../features/videoUploadSlice";
import videosReducer from "../features/videosSlice";
import commentReducer from "../features/commentSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    registration: registrationReducer,
    videoUpload: videoUploadReducer,
    videos: videosReducer,
    comment: commentReducer,
  },
});

export default store;
