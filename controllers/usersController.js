const db = require("../models");
const bcrypt = require("bcrypt");
const { OAuth2Client } = require("google-auth-library");
const fetch = require("node-fetch");

//google auth clientID
const client = new OAuth2Client(
  "1082885186579-00j5a8kbt4tt0q3h6mua0b1ei0fgu9n1.apps.googleusercontent.com"
);

// Defining methods for the usersController

module.exports = {
  findAll: function (req, res) {
    if (!req.user) {
      res.json({});
    } else {
      db.User.find(req.query)
        .populate("posts")
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
      .populate("posts")
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

  //check to see whether user exists in db already, if not cerate new user
  googlelogin: function (req, res) {
    const { tokenId } = req.body;

    client
      .verifyIdToken({
        idToken: tokenId,
        audience:
          "1082885186579-00j5a8kbt4tt0q3h6mua0b1ei0fgu9n1.apps.googleusercontent.com",
      })
      .then((result) => {
        console.log("Info: ", result);

        const {
          email_verified,
          given_name,
          family_name,
          email,
        } = result.payload;

        if (email_verified) {
          db.User.findOne({ email }).exec((err, user) => {
            if (err) {
              return res.status(404).json({
                error: "Something went wrong...",
              });
            } else {
              if (user) {
                res.json(user);
              } else {
                db.User.create({
                  first_name: given_name,
                  last_name: family_name,
                  email: email,
                  password: "",
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
              }
            }
          });
        }
      });
  },

  //facebook login
  facebooklogin: function (req, res) {
    console.log(req.body);
    const { userID, accessToken } = req.body;

    let urlGraphFacebook = `https://graph.facebook.com/v2.11/${userID}/?fields=id,name,email&access_token=${accessToken}`;

    fetch(urlGraphFacebook, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
        const { email, name } = response;
        console.log("NAME: ", name, "EMAIL: ", email);

        //check if user is registered
        db.User.findOne({ email }).exec((err, user) => {
          if (err) {
            return res.status(400).json({
              error: "Something went wrong...",
            });
          } else {
            if (user) {
              res.json(user);
            } else {
              db.User.create({
                first_name: name.split(" ").slice(0, -1).join(" "),
                last_name: name.split(" ").slice(-1).join(" "),
                email: email,
                password: "",
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
            }
          }
        });
      });
  },
};
