import { useDispatch, useSelector } from "react-redux";
import { Container, VideoCard } from "../../components";
import { fetchVideos } from "../../features/videosSlice";
import { useCallback, useEffect } from "react";
import { InfiniteScrollContainer } from "../../components/index";
import authService from "../../API/authentication";

export default function HomePage() {
  const dispatch = useDispatch();
  const { videos, currentPage, hasNextPage, status, error } = useSelector(
    (state) => state.videos
  );

  console.log("Videos:", videos);
  console.log("Status:", status);
  console.log("Current Page:", currentPage);

  useEffect(() => {
    authService.refreshToken();
    console.log("HomePage useEffect triggered");
    if (videos.length === 0 && status === "idle") {
      dispatch(fetchVideos({ page: currentPage }));
    }
  }, [dispatch, videos, status, currentPage]);

  const fetchNextPageVideos = useCallback(() => {
    if (status !== "loading" && hasNextPage) {
      dispatch(fetchVideos({ page: currentPage }));
    }
  }, [dispatch, status, hasNextPage, currentPage]);

  return (
    <Container>
      <InfiniteScrollContainer
        fetchNextPageVideos={fetchNextPageVideos}
        hasNextPage={hasNextPage}
      >
        <div className="h-screen overflow-y-auto bg-[#121212] text-white">
          <section className="w-full pb-[70px] sm:ml-[70px] sm:pb-0 lg:ml-0">
            <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-4 p-4">
              {videos?.map((video) => (
                <VideoCard
                  key={video._id}
                  videoId={video._id}
                  thumbnail={video.thumbnail}
                  title={video.title}
                  duration={video.duration}
                  views={video.views}
                  username={video.owner?.username}
                  avatar={video.owner?.avatar}
                  createdAt={video.createdAt}
                />
              ))}
            </div>
            {status === "loading" && <p>Loading...</p>}
            {status === "failed" && <p>Error: {error}</p>}
          </section>
        </div>
      </InfiniteScrollContainer>
    </Container>
  );
}
