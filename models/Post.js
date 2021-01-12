const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    image: String,
    restaurant_name: String,
    rating: Number,
    caption: String,
    number_of_likes: Number,
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment'}]
});

var Post = mongoose.model('Post', PommentSchema);