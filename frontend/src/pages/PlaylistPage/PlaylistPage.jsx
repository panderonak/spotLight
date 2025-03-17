import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PlaylistCard from "../../components/PlaylistCard/PlaylistCard";
import {
  clearPlaylists,
  retrievePlaylist,
} from "../../features/playlistsSlice";

export default function PlaylistPage() {
  const dispatch = useDispatch();
  const { playlistCollection, status } = useSelector(
    (state) => state.playlists
  );

  // Fetch playlists only when necessary
  useEffect(() => {
    if (playlistCollection.length === 0 && status === "idle") {
      dispatch(retrievePlaylist());
    }
  }, [playlistCollection.length, status, dispatch]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      dispatch(clearPlaylists());
    };
  }, [dispatch]);

  return (
    <div className="grid gap-4 bg-black pt-2 sm:grid-cols-[repeat(auto-fit,minmax(400px,1fr))]">
      {playlistCollection.map((playlist) => (
        <div key={playlist._id}>
          <PlaylistCard
            playlistTitle={playlist?.name}
            playlistDescription={playlist?.description}
            thumbnailImage={playlist?.videos[0]?.thumbnail}
            totalVideos={playlist?.videosCount}
          />
        </div>
      ))}
    </div>
  );
}
