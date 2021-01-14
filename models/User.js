const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var bcrypt = require("bcryptjs");

const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
  },
  password: String,
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

//Validate hashed password
UserSchema.methods.comparePassword = function (plaintext) {
  console.log("checking password");
  return bcrypt.compareSync(plaintext, this.password);
};

// //Before a User is created, automatically hash their password
// UserSchema.pre("create", function (next) {
//   if (!this.isModified("password")) {
//     return next();
//   }
//   this.password = bcrypt.hashSync(this.password, 10);
//   next();
// });

const User = mongoose.model("User", UserSchema);

module.exports = User;
