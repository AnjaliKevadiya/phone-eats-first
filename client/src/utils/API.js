import axios from "axios";

export default {
  // sign up
  signup: function (userData) {
    console.log(userData);
    return axios.post("/api/user/signup", userData);
  },
  // login
  login: function (loginData) {
    return axios.post("/api/user/login", loginData);
  },

  // get all post
  getAllPosts: function () {
    return axios.get("/api/posts/all");
  },

  // create new post
  createNewPost: function (postData) {
    return axios.post("/api/posts/create", postData);
  },

  // update existing post
  updatePost: function (id) {
    return axios.put("/api/posts/", id);
  },

  // delete existing post
  deletePost: function (id) {
    return axios.delete("/api/posts/", id);
  },

  //Google login
  googlelogin: function (googleData) {
    return axios.post("/api/user/googlelogin", googleData);
  }

  //Facebook login
  // facebooklogin: function (facebookData) {
  //   return axios.post("/api/user/facebooklogin", facebooklogin)
  // }
};
