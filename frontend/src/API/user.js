import axios from "axios";

export class UserService {
  constructor() {
    this.method = "POST";
    this.URL = "/api/v1/users";
    this.headers = {
      accept: "application/json",
      "content-type": " application/json",
    };
  }

  async updatePassword({ currentPassword, newPassword, confirmNewPassword }) {}

  async updateUserInfo({ fullname, email }) {}

  async changeAvatar({ avatar }) {}

  async changeCover({ coverImage }) {}

  async getWatchHistory() {}
}

const userService = new UserService();

export default userService;
