import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  registrationInfo: {},
};

const registrationSlice = createSlice({
  name: "registration",
  initialState,
  reducers: {
    storeRegistrationDetails: (state, action) => {
      state.registrationInfo = action.payload;
    },
    removeRegistrationDetails: (state) => {
      state.registrationInfo = {};
    },
  },
});

export const { storeRegistrationDetails, removeRegistrationDetails } =
  registrationSlice.actions;

const registrationReducer = registrationSlice.reducer;

export default registrationReducer;
