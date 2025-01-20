import axios from "axios";
import subscriptionConfig from "../config/subscription.config";

export class SubscriptionService {
  constructor() {
    this.method = "GET";
    this.URL = "/api/v1";
    this.headers = {
      accept: "application/json",
      "content-type": "application/json",
    };
  }

  async getChannelSubscribers({ channelId }) {
    const options = {
      method: this.method,
      url: `${this.URL}${subscriptionConfig.subscribersPath}/${channelId}`,
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

  async getChannelSubscription({ subscriberId }) {
    const options = {
      method: this.method,
      url: `${this.URL}${subscriptionConfig.subscriptionPath}/${subscriberId}`,
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

  async toggleChannelSubscription({ channelId }) {
    const options = {
      method: "POST",
      url: `${this.URL}${subscriptionConfig.toggleChannelSubscriptionPath}/${channelId}`,
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

const subscriptionService = new SubscriptionService();

export default subscriptionService;
