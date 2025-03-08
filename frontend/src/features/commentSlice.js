import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import commentService from "../API/comment";

const initialState = {
  isLoading: false,
  comments: [],
  totalCommentCount: null,
  hasMoreComments: false,
  isUpdateActionTriggered: false,
  updatedComment: null,
  editable: false,
};

export const createNewComment = createAsyncThunk(
  "comments/createNewComment",
  async ({ videoId, content }) => {
    try {
      const response = await commentService.commentPost({ videoId, content });
      if (response.success) return response;
    } catch (error) {
      return error.message;
    }
  }
);

export const updateComment = createAsyncThunk(
  "comments/updateComment",
  async ({ commentId, updatedComment }) => {
    try {
      const response = await commentService.editComment({
        commentId,
        updatedComment,
      });
      if (response.success) return response;
    } catch (error) {
      return error.message;
    }
  }
);

export const deleteComment = createAsyncThunk(
  "comments/removeComment",
  async ({ commentId }) => {
    try {
      const response = await commentService.deleteComment({
        commentId,
      });
      if (response.success) return response;
    } catch (error) {
      return error.message;
    }
  }
);

export const fetchComments = createAsyncThunk(
  "fetchComments",
  async ({ videoId, page, limit }) => {
    const params = { videoId };

    if (page) params.page = page;
    if (limit) params.limit = limit;

    try {
      const response = commentService.fetchVideoComments(params);
      if (response.success) return response;
    } catch (error) {
      return error.message;
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
      state.totalCommentCount = null;
      state.hasMoreComments = false;
    },
    startUpdating(state, action) {
      const { modifiedComment, buttonClicked } = action.payload;
      state.isUpdateActionTriggered = buttonClicked;
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
    });
    builder.addCase(fetchComments.fulfilled, (state, action) => {
      state.isLoading = false;
      state.comments = [...state.comments, ...action.payload.docs];
      state.totalCommentCount = action.payload.totalDocs;
      state.hasMoreComments = action.payload.hasNextPage;
    });
    builder.addCase(createNewComment.fulfilled, (state, action) => {
      state.comments.unshift(action.payload);
      state.totalCommentCount++;
    });
    builder.addCase(deleteComment.fulfilled, (state, action) => {
      state.comments = state.comments.filter(
        (comment) => comment._id !== action.payload.commentId
      );
      state.totalCommentCount--;
    });
  },
});

export const { cleanUpComments, startUpdating, completeUpdating } =
  commentSlice.actions;

const commentReducer = commentSlice.reducer;

export default commentReducer;
