const router = require("express").Router();
const postsController = require("../../controllers/postsController");

//Matches with "/api/posts"
router.route("/")
    .get(postsController.findAll)
    .post(booksController.create);

    