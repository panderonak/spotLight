import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import postService from "../API/post";

const initialState = {
  isLoading: false,
  posts: [],
  isUpdateActionTriggered: false,
  hasMorePosts: false,
  updatePost: null,
  editable: false,
  error: null,
};

export const createPost = createAsyncThunk(
  "posts/createPost",
  async ({ content }, { rejectWithValue }) => {
    try {
      const response = await postService.createPost({ content });
      if (response.success) return response.data;
      return rejectWithValue(response.message || "Failed to create post");
    } catch (error) {
      return rejectWithValue(error.message || "An error occurred");
    }
  }
);

export const updatePost = createAsyncThunk(
  "posts/updatePost",
  async ({ postId, content }, { rejectWithValue }) => {
    try {
      const response = await postService.updatePost({ postId, content });
      if (response.success) return response.data;
      return rejectWithValue(response.message || "Failed to update post");
    } catch (error) {
      return rejectWithValue(error.message || "An error occurred");
    }
  }
);

export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async ({ postId }, { rejectWithValue }) => {
    try {
      const response = await postService.deletePost({ postId });
      if (response.success) return { postId }; // Return only postId for clarity
      return rejectWithValue(response.message || "Failed to delete post");
    } catch (error) {
      return rejectWithValue(error.message || "An error occurred");
    }
  }
);

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async ({ userId, page, limit }, { rejectWithValue }) => {
    const params = { userId, page, limit };
    try {
      const response = await postService.getUserPosts(params);
      if (response.success) {
        const { docs, hasNextPage, nextPage } = response.data;
        return { docs, hasNextPage, nextPage };
      }
      return rejectWithValue(response.message || "Failed to fetch posts");
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    cleanUpPosts(state) {
      state.isLoading = false;
      state.posts = [];
      state.hasMorePosts = false;
      state.page = 1; // Reset to first page
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = [...action.payload.docs, ...state.posts];
        state.hasMorePosts = action.payload.hasNextPage;
        if (action.payload.hasNextPage) {
          state.page += 1; // Increment page for next fetch
        }
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { cleanUpPosts } = postSlice.actions;

export default postSlice.reducer;
