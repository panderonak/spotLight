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

  async uploadVideo({ videoFile, thumbnail, title, description }) {
    const formData = new FormData();
    formData.append("videoFile");
    formData.append("thumbnail");
    formData.append("title");
    formData.append("description");

    const options = {
      method: "POST",
      url: `${this.URL}${videoConfig.videoUploadPath}`,
      headers: this.headers,
      data: formData,
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

  async retrieveVideos(params) {
    const options = {
      method: "GET",
      url: `${this.URL}${videoConfig.videosPath}`,
      headers: this.headers,
      params: params,
    };
    console.log(params);
    console.log(options.url);

    try {
      console.log(params);
      const { data } = await axios.request(options);
      console.log("I am here videos.");
      console.log(data);
      if (data.success) {
        console.log("Success");
        console.log(data);
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
