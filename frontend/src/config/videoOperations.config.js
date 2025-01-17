const videoOperationsConfig = {
  videoUploadPath: String(import.meta.env.VITE_VIDEO_UPLOAD_PATH),
  videosPath: String(import.meta.env.VITE_ALL_VIDEOS_PATH),
  updateVideoPath: String(import.meta.env.VITE_UPDATE_VIDEO_PATH),
  publishTogglePath: String(import.meta.env.VITE_TOGGLE_PUBLISH_PATH),
  videoPath: String(import.meta.env.VITE_GET_VIDEO_PATH),
};

export default videoOperationsConfig;
