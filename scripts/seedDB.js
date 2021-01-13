const mongoose = require("mongoose");
const db = require("../models");

//This file empties the Post

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/phone-eats-first");

const userSeed = [
    {
        email: "arthur.hoffman@example.com",
        first_name: "Arthur",
        last_name: "Hoffman",
        profile_url: "",
        posts: [
            {
                type: Schema.Types.ObjectId,
                ref: "Post"
            }
        ]
    },
    {
        email: "cody.collins@example.com",
        first_name: "Cody",
        last_name: "Collins",
        profile_url: "",
        posts: [
            {
                type: Schema.Types.ObjectId,
                ref: "Post"
            }
        ]
    },
    {
        email: "deanna.morris@example.com",
        first_name: "Deanna",
        last_name: "Morris",
        profile_url: "",
    },
    {
        email: "debbie.jensen@example.com",
        first_name: "Debbie",
        last_name: "Jensen",
        profile_url: "",
    },
    {
        email: "dwayne.gardner@example.com",
        first_name: "Dwayne",
        last_name: "Gardner",
        profile_url: "",
    }
];

const postSeed = [
    {
        image: "https://images.app.goo.gl/QmLhidh65s97g2b49",
        restaurant_name: "Sushi Palace",
        rating: 5,
        caption: "sushi rolls",
        number_of_likes: 100,
        comments: [
            {
                type: Schema.Types.ObjectId, 
                ref: "Comment"
            }
        ]
    },
    {image: "https://images.app.goo.gl/QmLhidh65s97g2b49",
        restaurant_name: "Sushi Palace",
        rating: 5,
        caption: "sushi rolls",
        number_of_likes: 100,
        comments: [
            {
                type: Schema.Types.ObjectId, 
                ref: "Comment"
            }
                ],
    }
];

const commentSeed = [
    {
        username: "Debbie Jensen",
        comment: "Yumm!!"
    },
    {
        username: "Debbie Jensen",
        comment: "Yumm!!"
    }
];



db.User.remove({})
    .then(() => db.User.collection.insertMany(userSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

    db.Post.remove({})
    .then(() => db.Post.collection.insertMany(postSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

    db.Comment.remove({})
    .then(() => db.Comment.collection.insertMany(commentSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });