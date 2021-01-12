const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  username: String,
  comment: String,
});

const Comment = mongoose.model("Comment", CommentSchema);

module.exports = Comment;
