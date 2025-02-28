import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import registrationReducer from "../features/registrationSlice";
import videoUploadReducer from "../features/videoUploadSlice";
import videosReducer from "../features/videosSlice";
import commentReducer from "../features/commentSlice";
import videoActionsReducer from "../features/videoActionsSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    registration: registrationReducer,
    videoUpload: videoUploadReducer,
    videos: videosReducer,
    comment: commentReducer,
    videoActions: videoActionsReducer,
  },
});

export default store;
