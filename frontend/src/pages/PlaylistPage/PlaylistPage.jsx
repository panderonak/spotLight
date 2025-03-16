import PlaylistCard from "../../components/PlaylistCard/PlaylistCard";
import {
  clearPlaylists,
  retrievePlaylist,
} from "../../features/playlistsSlice";

export default function PlaylistPage() {
  const { playlistCollection, status } = useSelector(
    (state) => state.channelProfile
  );

  useEffect(() => {
    try {
      if (playlistCollection.length === 0 && status === "idle") {
        dispatch(retrievePlaylist());
      }
    } catch (error) {
      console.error(error?.message);
    }

    return () => {
      dispatch(clearPlaylists());
    };
  });

  return (
    <div class="grid gap-4 bg-black pt-2 sm:grid-cols-[repeat(auto-fit,_minmax(400px,_1fr))]">
      {playlistCollection.map((playlist) => (
        <PlaylistCard
          playlistTitle={playlist?.name}
          playlistDescription={playlist?.description}
          thumbnailImage={playlist?.videos?.thumbnail}
          totalVideos={playlist?.videosCount}
        />
      ))}
    </div>
  );
}
