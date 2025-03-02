import axios from "axios";
import likeConfig from "../config/like.config";

export class LikeService {
  constructor() {
    this.method = "POST";
    this.URL = "/api/v1";
    this.headers = {
      accept: "application/json",
      "content-type": "application/json",
    };
  }

  async likedVideos() {
    const options = {
      method: this.method,
      url: `${this.URL}${likeConfig.likedVideosPath}`,
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

  async toggleVideoLike({ videoId }) {
    const options = {
      method: this.method,
      url: `${this.URL}${likeConfig.videoLikeTogglePath}`,
      headers: this.headers,
      params: { videoId },
    };
    try {
      const { data } = await axios.request(options);
      console.log(data);
      if (data.success) {
        console.log("Success");
        return data;
      }
    } catch (error) {
      console.error(error);
    }
  }

  async toggleCommentLike({ commentId }) {
    const options = {
      method: this.method,
      url: `${this.URL}${likeConfig.commentLikeTogglePath}`,
      headers: this.headers,
      params: { commentId },
    };
    try {
      const { data } = await axios.request(options);
      console.log(data);
      if (data.success) {
        console.log("Success");
        return data;
      }
    } catch (error) {
      console.error(error);
    }
  }

  async togglePostLike({ postId }) {
    const options = {
      method: this.method,
      url: `${this.URL}${likeConfig.postLikeTogglePath}`,
      headers: this.headers,
      params: { postId },
    };
    try {
      const { data } = await axios.request(options);
      console.log(data);
      if (data.success) {
        console.log("Success");
        return data;
      }
    } catch (error) {
      console.error(error);
    }
  }
}

const likeService = new LikeService();

export default likeService;
