import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import commentService from "../API/comment";

const initialState = {
  isLoading: false,
  comments: [],
  totalCommentCount: 0,
  hasMoreComments: false,
  isUpdateActionTriggered: false,
  updatedComment: null,
  editable: false,
  error: null,
};

export const createNewComment = createAsyncThunk(
  "comments/createNewComment",
  async ({ videoId, content }, { rejectWithValue }) => {
    try {
      const response = await commentService.commentPost({ videoId, content });
      if (response.success) return response.data;
      return rejectWithValue("Failed to create comment");
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateComment = createAsyncThunk(
  "comments/updateComment",
  async ({ commentId, updatedComment }, { rejectWithValue }) => {
    try {
      const response = await commentService.editComment({
        commentId,
        updatedComment,
      });
      if (response.success) return response.data.content;
      return rejectWithValue("Failed to update comment");
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteComment = createAsyncThunk(
  "comments/removeComment",
  async ({ commentId }, { rejectWithValue }) => {
    try {
      const response = await commentService.deleteComment({ commentId });
      if (response.success) return { commentId }; // Return commentId for filtering the comments
      return rejectWithValue("Failed to delete comment");
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchComments = createAsyncThunk(
  "fetchComments",
  async ({ videoId, page, limit }, { rejectWithValue }) => {
    const params = { videoId };
    if (page) params.page = page;
    if (limit) params.limit = limit;
    try {
      const response = await commentService.fetchVideoComments(params);
      if (response.success) return response.data;
      return rejectWithValue("Failed to fetch comments");
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    cleanUpComments(state) {
      state.isLoading = false;
      state.comments = [];
      state.totalCommentCount = 0;
      state.hasMoreComments = false;
      state.error = null;
    },
    startUpdating(state, action) {
      const { modifiedComment } = action.payload;
      state.isUpdateActionTriggered = true;
      state.updatedComment = modifiedComment;
      state.editable = true;
    },
    completeUpdating(state) {
      state.isUpdateActionTriggered = false;
      state.updatedComment = null;
      state.editable = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchComments.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchComments.fulfilled, (state, action) => {
      state.isLoading = false;
      state.comments = [...state.comments, ...action.payload.docs];
      state.totalCommentCount = action.payload.totalDocs;
      state.hasMoreComments = action.payload.hasNextPage;
    });
    builder.addCase(fetchComments.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    builder.addCase(createNewComment.fulfilled, (state, action) => {
      state.comments.unshift(action.payload);
      state.totalCommentCount += 1;
    });
    builder.addCase(createNewComment.rejected, (state, action) => {
      state.error = action.payload;
    });

    builder.addCase(updateComment.fulfilled, (state, action) => {
      const updatedComment = action.payload;
      const index = state.comments.findIndex(
        (comment) => comment._id === updatedComment._id
      );
      if (index !== -1) {
        state.comments[index].content = updatedComment; // Update the comment in the array
      }
    });
    builder.addCase(updateComment.rejected, (state, action) => {
      state.error = action.payload;
    });

    // Delete comment
    builder.addCase(deleteComment.fulfilled, (state, action) => {
      const { commentId } = action.payload;
      state.comments = state.comments.filter(
        (comment) => comment._id !== commentId
      );
      state.totalCommentCount -= 1;
    });
    builder.addCase(deleteComment.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export const { cleanUpComments, startUpdating, completeUpdating } =
  commentSlice.actions;

const commentReducer = commentSlice.reducer;

export default commentReducer;
