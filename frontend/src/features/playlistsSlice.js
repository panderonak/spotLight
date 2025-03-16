import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import playlistService from "../API/playlist";

const initialState = {
  playlistCollection: [],
  status: "idle",
  error: null,
};

export const retrievePlaylist = createAsyncThunk("playlist", async () => {
  try {
    const response = await playlistService.getUserPlaylist();
    if (response.success) return response;
    return thunkAPI.rejectWithValue("Failed to fetch playlist");
  } catch (error) {
    console.error(error?.message);
    return thunkAPI.rejectWithValue(error.message);
  }
});

const playlistsSlice = createSlice({
  name: "playlists",
  initialState,
  reducers: {
    clearPlaylists: (state) => {
      state.playlistCollection = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(retrievePlaylist.pending, (state) => {
        state.status = "loading";
      })
      .addCase(retrievePlaylist.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.playlistCollection = action.payload.data;
      })
      .addCase(retrievePlaylist.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setPlaylists, clearPlaylists } = playlistsSlice.actions;

const playlistReducer = playlistsSlice.reducer;

export default playlistReducer;
