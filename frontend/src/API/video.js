import axios from "axios";
import videoConfig from "../config/video.config";

export class VideoService {
  constructor() {
    this.method = "PATCH";
    this.URL = "/api/v1";
    this.headers = {
      accept: "application/json",
      "content-type": "application/json",
    };
  }

  async uploadVideo({ videoFile, thumbnail, title, description, owner }) {
    const options = {
      method: "POST",
      url: `${this.URL}${videoConfig.videoUploadPath}`,
      headers: this.headers,
      data: { videoFile, thumbnail, title, description, owner },
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

  async retrieveVideos() {
    const options = {
      method: "GET",
      url: `${this.URL}${videoConfig.videosPath}`,
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

  async updateVideoDetails({
    thumbnail,
    updatedTitle,
    updatedDescription,
    videoId,
  }) {
    const options = {
      method: this.method,
      url: `${this.URL}${videoConfig.updateVideoPath}/${videoId}`,
      headers: this.headers,
      data: { thumbnail, updatedTitle, updatedDescription },
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

  async toggleVideoPublishStatus({ videoId }) {
    const options = {
      method: this.method,
      url: `${this.URL}${videoConfig.videoUploadPath}/${videoId}`,
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

  async retrieveVideo({ videoId }) {
    const options = {
      method: "GET",
      url: `${this.URL}${videoConfig.videoUploadPath}/${videoId}`,
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

const videoService = new VideoService();

export default videoService;
