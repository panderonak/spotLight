import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import videoService from "../API/video";

const initialState = {
  videos: [],
  currentPage: 1,
  hasNextPage: false,
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

export const fetchVideos = createAsyncThunk(
  "videos/fetchVideos",
  async ({ page, userId, sortBy, sortType, query, limit }, thunkAPI) => {
    const params = { page };
    if (userId) params.userId = userId;
    if (sortBy) params.sortBy = sortBy;
    if (sortType) params.sortType = sortType;
    if (query) params.query = query;
    if (limit) params.limit = limit;

    try {
      const response = await videoService.retrieveVideos(params);
      if (response.success) return response;
      return thunkAPI.rejectWithValue("Failed to fetch videos");
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const videosSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {
    resetVideos(state) {
      state.videos = [];
      state.currentPage = 1;
      state.hasNextPage = false;
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideos.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchVideos.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.videos = [...state.videos, ...action.payload.data.docs];
        state.currentPage += 1;
        state.hasNextPage = action.payload.data.hasNextPage;
      })
      .addCase(fetchVideos.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { resetVideos } = videosSlice.actions;

const videosReducer = videosSlice.reducer;

export default videosReducer;
