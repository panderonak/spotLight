import axios from "axios";
import postConfig from "../config/post.config";

export class PostService {
  constructor() {
    this.method = "POST";
    this.URL = "/api/v1";
    this.headers = {
      accept: "application/json",
      "content-type": "application/json",
    };
  }

  async createPost({ content }) {
    const options = {
      method: this.method,
      url: `${this.URL}${postConfig.postCreationPath}`,
      headers: this.headers,
      data: {
        content,
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

  async getUserPosts({ userId }) {
    const options = {
      method: "GET",
      url: `${this.URL}${postConfig.userPostsPath}/${userId}`,
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

  async updatePost({ postId, content }) {
    const options = {
      method: "PATCH",
      url: `${this.URL}${postConfig.updatePostPath}/${postId}`,
      headers: this.headers,
      data: {
        content,
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

  async deletePost({ postId }) {
    const options = {
      method: "DELETE",
      url: `${this.URL}${postConfig.postCreationPath}/${postId}`,
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

const postService = new PostService();

export default postService;
