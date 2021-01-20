const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  image: String,
  restaurant_name: String,
  rating: Number,
  caption: String,
  number_of_likes: { type: Number, default: 0 },
  username: String,
  date: { type: Date, default: Date.now },
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
});

var Post = mongoose.model("Post", PostSchema);

module.exports = Post;
