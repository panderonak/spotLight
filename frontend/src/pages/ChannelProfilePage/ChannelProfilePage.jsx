import { useDispatch, useSelector } from "react-redux";
import {
  clearChannelProfileData,
  setChannelProfileData,
} from "../../features/channelProfileStateSlice";
import ChannelBanner from "../../components/ChannelBanner/ChannelBanner";
import ChannelProfileCard from "../../components/ChannelProfileCard/ChannelProfileCard";

export default function ChannelProfilePage({ username }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const subscription = async () => {
      try {
        const channelInfo = await userService.getChannelProfile({ username });
        if (channelInfo.success)
          dispatch(setChannelProfileData(channelInfo?.data));
      } catch (error) {
        console.error(error?.message);
      }
    };

    return () => {
      subscription.unsubscribe();
      dispatch(clearChannelProfileData());
    };
  }, [third]);

  const { channelProfileData } = useSelector((state) => state.channelProfile);

  return (
    <section class="w-full bg-black pb-[70px] sm:ml-[70px] sm:pb-0 lg:ml-0">
      <ChannelBanner channelProfile={channelProfileData} />
      <div class="px-4 pb-4">
        <ChannelProfileCard channelProfile={channelProfileData} />
        <div class="flex flex-col gap-y-4 bg-amber-900 py-4">
          // Channel Profile List // Here // Channel Profile List
        </div>
      </div>
    </section>
  );
}
