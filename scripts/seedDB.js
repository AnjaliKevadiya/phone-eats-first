const mongoose = require("mongoose");
const db = require("../models");

//This file empties the Post

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/phone-eats-first"
);

const userSeed = [
  {
    email: "arthur.hoffman@example.com",
    first_name: "Arthur",
    last_name: "Hoffman",
    profile_url: "",
    posts: [
      {
        image: "https://images.app.goo.gl/qNpdxJGiJUHo9kJCA",
        restaurant_name: "Chipotle",
        rating: 5,
        caption: "chicken burrito bowl",
        number_of_likes: 10,
        comments: [
          {
            username: "Cody Collins",
            comment: "Delicious!",
          },
        ],
      },
    ],
  },
  {
    email: "cody.collins@example.com",
    first_name: "Cody",
    last_name: "Collins",
    profile_url: "",
    posts: [
      {
        image: "https://images.app.goo.gl/QmLhidh65s97g2b49",
        restaurant_name: "Sushi Palace",
        rating: 5,
        caption: "sushi rolls",
        number_of_likes: 100,
        comments: [
          {
            username: "Debbie Jensen",
            comment: "Yumm!!",
          },
        ],
      },
    ],
  },
];

db.User.remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
