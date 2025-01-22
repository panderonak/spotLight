import axios from "axios";
import authenticationConfig from "../config/authentication.config";

export class AuthService {
  constructor() {
    this.method = "POST";
    this.URL = "/api/v1";
    this.headers = {
      accept: "application/json",
      "content-type": "application/json",
    };
    this.refreshToken = this.refreshToken.bind(this);

    axios.interceptors.response.use(
      (response) => response,
      async (error) => {
        console.log(error);
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;

          try {
            const response = await this.refreshToken();

            if (response.success) {
              console.log("Token refreshed successfully");
              return axios(originalRequest);
            } else {
              console.error("Token refresh failed. Please log in again.");
              return Promise.reject(error);
            }
          } catch (error) {
            console.error("Error refreshing token:", error);
            return Promise.reject(error);
          }
        }
        return Promise.reject(error);
      }
    );
  }

  async createAccount({ fullname, username, email, avatar, password }) {
    const formData = new FormData();
    formData.append("fullname", fullname);
    formData.append("username", username);
    formData.append("email", email);
    formData.append("avatar", avatar);
    formData.append("password", password);

    const options = {
      method: this.method,
      url: `${this.URL}${authenticationConfig.registerPath}`,
      data: formData,
    };

    try {
      const { data } = await axios.request(options);
      console.log(data);
      if (data.success) return this.loginUser({ username, password });
    } catch (error) {
      console.log(error?.message);
    }
  }

  async loginUser({ username, password }) {
    const options = {
      method: this.method,
      url: `${this.URL}${authenticationConfig.loginPath}`,
      headers: this.headers,
      data: {
        username: username?.trim(),
        password: password?.trim(),
      },
    };
    try {
      const { data } = await axios.request(options);
      console.log(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  async getCurrentUser() {
    const options = {
      method: "GET",
      url: `${this.URL}${authenticationConfig.currentUserPath}`,
      headers: { accept: "application/json" },
    };
    try {
      const { data } = await axios.request(options);
      console.log(data);
      if (data.success) {
        return data;
      }
    } catch (error) {
      console.error(
        "Service :: getCurrentUser - Error retrieving current user. Details: ",
        error
      );
    }
  }

  async logoutUser() {
    const options = {
      method: this.method,
      url: `${this.URL}${authenticationConfig.logoutPath}`,
      headers: { accept: "application/json" },
    };
    try {
      const { data } = await axios.request(options);
      console.log(data);
    } catch (error) {
      console.error(
        "Service :: logoutUser - Error during user logout process. Details: ",
        error
      );
    }
  }

  async refreshToken() {
    const options = {
      method: this.method,
      url: `${this.URL}${authenticationConfig.refreshTokenPath}`,
      headers: { ...this.headers, withCredentials: true },
    };
    try {
      const { data } = await axios.request(options);
      if (data.success)
        console.log("Successfully retrieved a new refresh token.");
    } catch (error) {
      console.error(
        "Service :: refreshToken :: An error occurred while attempting to refresh the authentication token. Details: ",
        error
      );
    }
  }
}

const authService = new AuthService();

export default authService;
