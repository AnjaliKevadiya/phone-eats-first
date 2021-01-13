const db = require("../models");
const bcrypt = require("bcrypt");

// Defining methods for the usersController

module.exports = {
  findAll: function (req, res) {
    db.User.find(req.query)
      .sort({ date: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
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
      }).then((userData) => {
        console.log("registerd successfully", userData);
        res.send({ user: userData.id, message: "Welcome!" });
      });
    } catch (err) {
      res.status(422).json(err);
    }
    // db.User.create(req.body).then((dbModel) => res.json(dbModel));
  },
  update: function (req, res) {
    db.User.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
