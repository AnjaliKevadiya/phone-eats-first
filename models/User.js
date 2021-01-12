const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
  },
  first_name: String,
  last_name: String,
  profile_url: String,
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
