import {
  AvatarUpdater,
  CoverImageUpdater,
  UserDetailsUpdate,
} from "../../components";

export default function ProfileSettingsPage() {
  return (
    <>
      <AvatarUpdater />
      <CoverImageUpdater />
      <UserDetailsUpdate />
    </>
  );
}
