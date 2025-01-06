import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  userInfo: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authenticateUser: (state, action) => {
      state.isAuthenticated = true;
      state.userInfo = action.payload;
    },
    deauthenticateUser: (state, action) => {
      state.isAuthenticated = false;
      state.userInfo = action.payload;
    },
  },
});

export const { authenticateUser, deauthenticateUser } = authSlice.actions;

const authReducer = authSlice.reducer;

export default authReducer;
