const db = require("../models");

//Defining methods for the postsController
module.exports = {
  findAll: function (req, res) {
    db.Post.find({})
      .populate("comments")
      .sort({ date: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Post.findById(req.params.id)
      .populate("comments")
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Post.create(req.body)
      .then((dbPost) => {
        return db.User.findOneAndUpdate(
          { _id: req.body.id },
          { $push: { posts: dbPost._id } },
          { new: true }
        );
      })
      .then(function (dbUser) {
        res.json(dbUser);
      })
      .catch((err) => {
        res.status(422).json(err);
      });
  },
  update: function (req, res) {
    db.Post.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Post.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  updateLike: function (req, res) {
    db.Post.update({ _id: req.body.id }, { $inc: { number_of_likes: 1 } })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
