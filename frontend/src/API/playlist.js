import axios from "axios";
import likeConfig from "../config/like.config";
import playlistConfig from "../config/playlist.config";

export class PlaylistService {
  constructor() {
    this.method = "POST";
    this.URL = "/api/v1";
    this.headers = {
      accept: "application/json",
      "content-type": "application/json",
    };
  }

  async createPlaylist({ name, description }) {
    const options = {
      method: this.method,
      url: `${this.URL}${playlistConfig.playlistCreatePath}`,
      headers: this.headers,
      data: {
        name,
        description,
      },
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

  async addVideoPlaylist({ playlistId, videoId }) {
    const options = {
      method: "PATCH",
      url: `${this.URL}${playlistConfig.addVideoPlaylistPath}/${videoId}/${playlistId}`,
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

  async getPlaylist({ playlistId }) {
    const options = {
      method: "GET",
      url: `${this.URL}${playlistConfig.playlistFetchPath}/${playlistId}`,
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

  async getUserPlaylist() {
    const options = {
      method: "GET",
      url: `${this.URL}${playlistConfig.userPlaylistFetchPath}`,
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

  async updatePlaylist({ playlistId, name, description }) {
    const options = {
      method: "PATCH",
      url: `${this.URL}${playlistConfig.playlistCreatePath}/${playlistId}`,
      headers: this.headers,
      data: {
        name,
        description,
      },
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

  async removeVideoFromPlaylist({ playlistId, videoId }) {
    const options = {
      method: "PATCH",
      url: `${this.URL}${playlistConfig.removeVideoFromPlaylistPath}/${videoId}/${playlistId}`,
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

  async deletePlaylist({ playlistId }) {
    const options = {
      method: "DELETE",
      url: `${this.URL}${playlistConfig.playlistDeletePath}/${playlistId}`,
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
}

const playlistService = new PlaylistService();

export default playlistService;
