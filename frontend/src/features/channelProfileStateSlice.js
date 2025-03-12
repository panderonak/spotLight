import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  channelProfileData: null,
};

const channelProfileStateSlice = createSlice({
  name: "channelProfile",
  initialState,
  reducers: {
    setChannelProfileData: (state, action) => {
      state.channelProfileData = action.payload;
    },

    clearChannelProfileData: (state) => {
      state.channelProfileData = null;
    },
  },
});

export const { setChannelProfileData, clearChannelProfileData } =
  channelProfileStateSlice.actions;

const channelProfileReducer = channelProfileStateSlice.reducer;

export default channelProfileReducer;
