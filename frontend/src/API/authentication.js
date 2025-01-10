import axios from "axios";

export class AuthService {
  constructor() {
    this.method = "POST";
    this.URL = "/api/v1";
    this.headers = {
      accept: "application/json",
      "content-type": "application/json",
    };
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
      url: `${this.URL}${process.env.VITE_USERS_REGISTER_PATH}`,
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
      url: `${this.URL}${process.env.VITE_USERS_LOGIN_PATH}`,
      headers: this.headers,
      data: {
        username: username?.trim(),
        password: password?.trim(),
      },
    };
    try {
      const { data } = await axios.request(options);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  async getCurrentUser() {
    const options = {
      method: "GET",
      url: `${this.URL}${process.env.VITE_USERS_CURRENT_USER_PATH}`,
      headers: { accept: "application/json" },
    };
    try {
      const { data } = await axios.request(options);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  async logoutUser() {
    const options = {
      method: this.method,
      url: `${this.URL}${process.env.VITE_USERS_LOGOUT_PATH}`,
      headers: { accept: "application/json" },
    };
    try {
      const { data } = await axios.request(options);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
}

const authService = new AuthService();

export default authService;
