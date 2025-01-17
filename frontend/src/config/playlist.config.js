const playlistConfig = {
  playlistCreatePath: String(import.meta.env.VITE_CREATE_PLAYLIST_PATH),
  addVideoPlaylistPath: String(import.meta.env.VITE_ADD_VIDEO_TO_PLAYLIST_PATH),
  playlistFetchPath: String(import.meta.env.VITE_GET_PLAYLIST_PATH),
  userPlaylistFetchPath: String(import.meta.env.VITE_GET_USER_PLAYLIST_PATH),
  playlistUpdatePath: String(import.meta.env.VITE_UPDATE_PLAYLIST_PATH),
  removeVideoFromPlaylistPath: String(
    import.meta.env.VITE_REMOVE_VIDEO_FROM_PLAYLIST_PATH
  ),
  playlistDeletePath: String(import.meta.env.VITE_PLAYLIST_DELETE_PATH),
};

export default playlistConfig;
