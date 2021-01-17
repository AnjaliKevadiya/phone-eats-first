const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  image: {
    data: Buffer,
    contentType: String,
  },
  restaurant_name: String,
  rating: Number,
  caption: String,
  number_of_likes: Number,
  username: String,
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
});

var Post = mongoose.model("Post", PostSchema);

module.exports = Post;
