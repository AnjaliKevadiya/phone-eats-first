const db = require("../models");
const bcrypt = require("bcrypt");

// Defining methods for the usersController

module.exports = {
  findAll: function (req, res) {
    if (!req.user) {
      res.json({});
    } else {
      db.User.find(req.query)
        .sort({ date: -1 })
        .then((dbModel) => res.json(dbModel))
        .catch((err) => res.status(422).json(err));
    }
  },

  checkUserLogin: function (req, res) {
    if (!req.user) {
      // user not logged in
      res.json({});
    } else {
      res.json(req.user);
    }
  },

  findById: function (req, res) {
    db.User.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  register: async function (req, res) {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      console.log("hashed password", hashedPassword);
      db.User.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: hashedPassword,
      })
        .then((userData) => {
          console.log("registerd successfully", userData);
          res.json({
            user: userData,
            message: "Welcome!",
          });
        })
        .catch((err) => {
          res.status(400).json(err);
        });
    } catch (err) {
      res.status(422).json(err);
    }
  },

  //   login: (req, res) => {
  //     // checks to see if the user exists
  //     db.User.findOne({
  //       email: req.body.email,
  //     })
  //       .then(async function (userData) {
  //         console.log("userData", userData);
  //         // if there is no user with that email
  //         if (!userData) {
  //           res.send({
  //             user: false,
  //             message: "No user with that email",
  //           });
  //           return;
  //         }

  //         // checks if both password are same then send the Welcome message
  //         if (await bcrypt.compare(req.body.password, userData.password)) {
  //           res.cookie("userAuth", userData.id).send({
  //             user: userData.id,
  //             message: "Welcome Back",
  //           });
  //         } else {
  //           res.send({
  //             user: false,
  //             message: "Password Incorrect",
  //           });
  //         }
  //       })
  //       .catch((err) => {
  //         console.log("We caught an error", err);
  //         res.send(err);
  //       });
  //   },

  update: function (req, res) {
    db.User.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
