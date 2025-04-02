import api from "./api";

export class AuthService {
  async createAccount({ fullname, username, email, avatar, password }) {
    const formData = new FormData();
    formData.append("fullname", fullname);
    formData.append("username", username);
    formData.append("email", email);
    formData.append("avatar", avatar);
    formData.append("password", password);

    const { data } = await api.post("/register", formData);
    if (data.success) {
      return await this.loginUser({ username, password });
    } else {
      throw new Error("Registration failed");
    }
  }

  async loginUser({ username, password }) {
    const { data } = await api.post("/login", {
      username: username?.trim(),
      password: password?.trim(),
    });
    return data;
  }

  async getCurrentUser() {
    const { data } = await api.get("/current-user");
    return data;
  }

  async logoutUser() {
    const { data } = await api.post("/logout");
    return data;
  }

  async refreshToken() {
    const { data } = await api.post("/refresh-token");
    return data;
  }
}

const authService = new AuthService();
export default authService;
