import { useLocation } from "react-router-dom";
import { CommentSection, VideoOverview } from "../../components";
import { useDispatch } from "react-redux";
import { retrieveVideo } from "../../features/videoActionsSlice";
import { cleanUpComments, fetchComments } from "../../features/commentSlice";

export default function VideoDetailView() {
  const location = useLocation();
  const videoId = location.state?.videoId;
  const dispatch = useDispatch();
  const video = useSelector((state) => state.video?.video);

  useEffect(() => {
    if (videoId) {
      dispatch(retrieveVideo({ videoId }));
      dispatch(fetchComments({ videoId }));
    }

    return () => {
      dispatch(cleanUpComments());
    };
  }, [dispatch, videoId]);

  return (
    <section class="w-full bg-black pb-[70px] sm:ml-[70px] sm:pb-0">
      <div class="flex w-full flex-wrap gap-4 p-4 lg:flex-nowrap">
        <div class="col-span-12 w-full">
          <div class="relative mb-4 w-full pt-[56%]">
            <div class="absolute inset-0">
              <video class="h-full w-full" controls="" autoplay="" muted="">
                <source
                  src="https://videos.pexels.com/video-files/30070218/12897557_2560_1440_30fps.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
          <VideoOverview
            title={video?.title}
            description={video?.description}
            views={video?.views}
            avatar={video?.owner?.avatar}
            owner={video?.owner?.username}
            createdAt={video?.createdAt}
            likes={video?.likes}
            subscribers={video?.owner?.subscribers}
            isSubscribed={video?.owner?.isSubscribed}
            likedByCurrentUser={video?.likedByCurrentUser}
          />
          <CommentSection videoId={videoId} />
        </div>
      </div>
    </section>
  );
}
