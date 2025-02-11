import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import videoService from "../API/video";

export const fetchVideos = () =>
  createAsyncThunk("videos/fetchVideos", async (thunkAPI) => {
    try {
      const response = await videoService.retrieveVideos({}); // TODO: Give the necessary parameters. And understand this file first.
      if (response.success) return response;
    } catch (error) {
      console.error(error);
    }
  });

const videosSlice = createSlice({
  name: "videos",
  initialState: {
    videos: [],
    currentPage: 1,
    hasNextPage: true,
    status: "idle",
    error: null,
  },
  reducers: {
    resetVideos(state) {
      state.videos = [];
      state.currentPage = 1;
      state.hasNextPage = true;
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchVideos.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchVideos.fulfilled, (state, action) => {
      state.status = "succeeded";
      // Append new videos to the existing list
      state.videos = [...state.videos, ...action.payload.videos];
      // Increment page for the next call
      state.currentPage += 1;
      // Update hasNextPage based on API response
      state.hasNextPage = action.payload.hasNextPage;
    });
    builder.addCase(fetchVideos.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
  },
});

export const { resetVideos } = videosSlice.actions;

const videosReducer = videosSlice.reducer;

export default videosReducer;
