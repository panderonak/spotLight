import axios from "axios";
import commentConfig from "../config/comment.config";

export class CommentService {
  constructor() {
    this.method = "POST";
    this.URL = "/api/v1";
    this.headers = {
      accept: "applicaion/json",
      "content-type": "application/json",
    };
  }

  async commentPost({ videoId, content }) {
    const options = {
      method: this.method,
      url: `${this.URL}${commentConfig.commentPostPath}/${videoId}`,
      headers: this.headers,
      data: { content },
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

  async fetchVideoComments(params) {
    const options = {
      method: "GET",
      url: `${this.URL}${commentConfig.videoCommentsPath}/${videoId}`,
      headers: this.headers,
      params: params,
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

  async editComment({ commentId, updatedComment }) {
    const options = {
      method: this.method,
      url: `${this.URL}${commentConfig.editCommentPath}/${commentId}`,
      headers: this.headers,
      data: { updatedComment },
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

  async deleteComment({ commentId }) {
    const options = {
      method: "DELETE",
      url: `${this.URL}${commentConfig.removeCommentPath}/${commentId}`,
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

const commentService = new CommentService();

export default commentService;
