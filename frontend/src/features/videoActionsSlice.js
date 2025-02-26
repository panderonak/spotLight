import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import videoService from "../API/video";

const initialState = {
  loading: false,
  video: null,
  publishStatus: false,
};

export const retrieveVideo = createAsyncThunk(async ({ videoId }) => {
  try {
    const response = await videoService.retrieveVideo({ videoId });
    if (response.success) return response;
    return thunkAPI.rejectWithValue(
      "There was an issue fetching the video. Please try again later."
    );
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const updateVideoDetails = createAsyncThunk(
  async ({ thumbnail, updatedTitle, updatedDescription, videoId }) => {
    try {
      const response = await videoService.updateVideoDetails({
        thumbnail,
        updatedTitle,
        updatedDescription,
        videoId,
      });
      if (response.success) return response;
      return thunkAPI.rejectWithValue(
        "There was an issue updating the video details. Please try again later."
      );
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const toggleVideoPublishStatus = createAsyncThunk(
  async ({ videoId }) => {
    try {
      const response = await videoService.toggleVideoPublishStatus({
        videoId,
      });
      if (response.success) return response;
      return thunkAPI.rejectWithValue(
        "We encountered an error while updating the video publish status. Please try again later."
      );
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const videoActionsSlice = createSlice({
  name: "videoActions",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(retrieveVideo.pending, (state) => {
        state.loading = true;
      })
      .addCase(retrieveVideo.fulfilled, (state, action) => {
        state.loading = false;
        state.video = action.payload;
      })
      .addCase(updateVideoDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateVideoDetails.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(toggleVideoPublishStatus.pending, (state) => {
        state.loading = true;
      })
      .addCase(toggleVideoPublishStatus.fulfilled, (state) => {
        state.loading = false;
      });
  },
});

const videoActionsReducer = videoActionsSlice.reducer;

export default videoActionsReducer;
