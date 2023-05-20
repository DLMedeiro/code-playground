import axios from "axios";

// https causes errors when running on local host
// const BASE_URL = "https://war-backend.onrender.com" || "http://localhost:3001";
const BASE_URL = "https://war-backend.onrender.com";

class WarApi {
  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);
    // Need to add to catch promise from initial function
    //there are multiple ways to pass an authorization token, this is how you pass it in the header.

    const url = `${BASE_URL}/${endpoint}`;
    const params = method === "get" ? data : {};
    const withCredentials = false;
    try {
      return (await axios({ url, method, data, params, withCredentials })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  static async getCards() {
    let res = await this.request(`game/setup`);
    return res;
  }
  static async removeCards() {
    let res = await this.request("game/teardown", {}, "delete");
    return res;
  }

  // User Information

  // log in a user
  static async loginUser(loginData) {
    let res = await this.request(`auth/token`, loginData, "post");
    // console.log(`res=${res}`);

    WarApi.token = res.token;
    localStorage.setItem("headToken", JSON.stringify(WarApi.token));

    return WarApi.token;
  }

  // Pull user information after login
  static async loggedInUser(username) {
    let res = await this.request(`users/${username}`);
    console.log(res);
    return res;
  }

  // Create a new user
  static async registerUser(newUserData) {
    let res = await this.request(`auth/register`, newUserData, "post");
    return res.token;
  }

  // Update user
  static async updateUser(username, updatedData) {
    let res = await this.request(`users/${username}`, updatedData, "patch");
    return res;
  }
}

export default WarApi;
