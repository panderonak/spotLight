const commentConfig = {
  commentPostPath: String(import.meta.env.VITE_ADD_COMMENT_PATH),
  videoCommentsPath: String(import.meta.env.VITE_VIDEO_COMMENTS_PATH),
  editCommentPath: String(import.meta.env.VITE_UPDATE_COMMENT_PATH),
  removeCommentPath: String(import.meta.env.VITE_DELETE_COMMENT_PATH),
};

export default commentConfig;
