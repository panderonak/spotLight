const authenticationConfig = {
  registerPath: String(import.meta.env.VITE_USERS_REGISTER_PATH),
  loginPath: String(import.meta.env.VITE_USERS_LOGIN_PATH),
  logoutPath: String(import.meta.env.VITE_USERS_LOGOUT_PATH),
  currentUserPath: String(import.meta.env.VITE_USERS_CURRENT_USER_PATH),
  refreshTokenPath: String(import.meta.env.VITE_USERS_REFRESH_TOKEN_PATH),
};

export default authenticationConfig;
