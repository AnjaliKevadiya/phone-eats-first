import axios from "axios";

export default {
  // sign up
  signup: function (userData) {
    return axios.post("/api/user/signup", userData);
  },
  // login
  login: function (loginData) {
    return axios.post("/api/user/login" + loginData);
  },
};
