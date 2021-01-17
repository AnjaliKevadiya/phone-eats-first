const db = require("../models");

//Defining methods for the postsController
module.exports = {
  findAll: function (req, res) {
    db.Post.find({})
      .populate("comments")
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
    console.log("reqqqq ", req.body);
    db.Post.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
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
  uploadPhoto: function (req, res) {
    console.log("req.files ", req.files);
    var newItem = new Item();
    newItem.img.data = fs.readFileSync(req.files.userPhoto.path);
    newItem.img.contentType = "image/png";
    newItem.save();
  },
};
