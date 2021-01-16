const db = require("../models");

//Defining methods for the commentsController
module.exports = {
  findAll: function (req, res) {
    db.Comment.find(req.query)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    // Create a new comment and pass the req.body to the entry
    console.log("comment hit", req.body);

    db.Comment.create(req.body)
      .then((dbComment) => {
        // If a Comment was created successfully, find one Post with an `_id` equal to `req.params.id`. Update the Post to be associated with the new Review
        // { new: true } tells the query that we want it to return the updated Post -- it returns the original by default
        // Since our mongoose query returns a promise, we can chain another `.then` which receives the result of the query
        console.log("post post", req.body);

        return db.Post.findOneAndUpdate(
          {},
          { $push: { comments: dbComment._id } },
          { new: true }
          //   { _id: req.body.id },
          //   { comments: dbComment._id },
          //   { new: true }
        );
      })
      .then(function (dbPost) {
        // If we were able to successfully update a Post, send it back to the client
        console.log("post hit", dbPost);

        res.json(dbPost);
      })
      .catch((err) => {
        // If an error occurred, send it to the client
        res.status(422).json(err);
      });
  },
  remove: function (req, res) {
    db.Comment.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
