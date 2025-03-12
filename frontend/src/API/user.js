import axios from "axios";
import userConfig from "../config/user.config";

export class UserService {
  constructor() {
    this.method = "POST";
    this.URL = "/api/v1";
    this.headers = {
      accept: "application/json",
      "content-type": " application/json",
    };
  }

  async updatePassword({ currentPassword, newPassword, confirmNewPassword }) {
    const options = {
      method: this.method,
      url: `${this.URL}${userConfig.updatePasswordPath}`,
      headers: this.headers,
      data: {
        currentPassword,
        newPassword,
        confirmNewPassword,
      },
    };

    try {
      const { data } = await axios.request(options);
      console.log(data);
      if (data.success) {
        console.log("Success");
      }
    } catch (error) {
      console.error(error);
    }
  }

  async updateUserInfo({ fullname, email }) {
    const options = {
      method: `PATCH`,
      url: `${this.URL}${userConfig.updateUserPath}`,
      headers: this.headers,
      data: {
        fullname,
        email,
      },
    };

    try {
      const { data } = await axios.request(options);
      if (data.success) {
        console.log("Success");
      }
    } catch (error) {
      console.error(error);
    }
  }

  async changeAvatar({ avatar }) {
    const options = {
      method: this.method,
      url: `${this.URL}${userConfig.updateAvatarPath}`,
      headers: this.headers,
      data: {
        avatar,
      },
    };
    try {
      const { data } = await axios.request(options);
      if (data.success) console.log("Success");
    } catch (error) {
      console.error(error);
    }
  }

  async changeCover({ coverImage }) {
    const options = {
      method: this.method,
      url: `${this.URL}${userConfig.updateCoverPath}`,
      headers: this.headers,
      data: {
        coverImage,
      },
    };
    try {
      const { data } = await axios.request(options);
      if (data.success) console.log("Success");
    } catch (error) {
      console.error(error);
    }
  }

  async getWatchHistory() {
    const options = {
      method: `GET`,
      url: `${this.URL}${userConfig.watchHistoryPath}`,
      headers: this.headers,
    };

    try {
      const { data } = await axios.request(options);
      if (data.success) {
        console.log("Success");
        return data;
      }
    } catch (error) {
      console.error(error);
    }
  }

  async getChannelProfile({ username }) {
    const options = {
      method: `GET`,
      url: `${this.URL}${userConfig.channelProfile}`,
      headers: this.headers,
      params: { username },
    };

    try {
      const { data } = await axios.request(options);
      if (data.success) {
        console.log("Success");
        return data;
      }
    } catch (error) {
      console.error(error);
    }
  }
}

const userService = new UserService();

export default userService;
