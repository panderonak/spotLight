import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isUploading: false, // Tracks if the upload is in progress. Use it to show the uploading bar.
  controller: null, // For handling upload cancelation (AbortController)
  isUploadingComplete: false, // Tracks if the upload is complete. Use to show video uploaded complete message.
  isModalVisible: false, // To manage modal visibility for upload
};

const videoUploadSlice = createSlice({
  name: "videoUpload",
  initialState,
  reducers: {
    // Start uploading
    startUploading(state, action) {
      state.isUploading = true;
      state.controller = action.payload.controller;
      state.isModalVisible = true;
    },

    // Upload complete
    uploadComplete(state) {
      state.isUploading = false;
      state.isUploadingComplete = true;
    },

    // Cancel upload
    cancelUpload(state) {
      if (state.controller) {
        state.controller.abort(); // Abort the upload using the controller
      }
      state.isUploading = false;
      state.isModalVisible = false; // Hide modal
    },

    // Hide modal
    hideModal(state) {
      state.isModalVisible = false;
    },
  },
});

export const { startUploading, uploadComplete, cancelUpload, hideModal } =
  videoUploadSlice.actions;

const videoUploadReducer = videoUploadSlice.reducer;

export default videoUploadReducer;
