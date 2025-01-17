const postConfig = {
  postCreationPath: String(import.meta.env.VITE_POST_CREATION_PATH),
  userPostsPath: String(import.meta.env.VITE_GET_USER_POSTS_PATH),
  updatePostPath: String(import.meta.env.VITE_UPDATE_POST_PATH),
  deletePostPath: String(import.meta.env.VITE_DELETE_POST_PATH),
};

export default postConfig;
