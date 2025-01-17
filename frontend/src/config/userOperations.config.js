const userOperationsConfig = {
  updatePasswordPath: String(import.meta.env.VITE_USER_UPDATE_PASSWORD_PATH),
  updateUserPath: String(import.meta.env.VITE_USER_UPDATE_USER_PATH),
  updateAvatarPath: String(import.meta.env.VITE_USER_UPDATE_AVATAR_PATH),
  updateCoverPath: String(import.meta.env.VITE_USER_UPDATE_COVER_PATH),
  channelProfile: String(import.meta.env.VITE_USER_CHANNEL_PROFILE_PATH),
  watchHistoryPath: String(import.meta.env.VITE_USER_WATCH_HISTORY_PATH),
};

export default userOperationsConfig;
