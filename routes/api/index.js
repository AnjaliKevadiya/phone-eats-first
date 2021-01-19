const router = require("express").Router();
const userRoutes = require("./users");
const postRoutes = require("./posts");
const commentRoutes = require("./comments");
const usersController = require("../../controllers/usersController");

// User routes /api/user
router.use("/user", userRoutes);

// Post routes
router.use("/posts", postRoutes);

// Comment routes
router.use("/comments", commentRoutes);

//logout endpoint "/api/logout"
router.route("/logout").get(usersController.logout);

module.exports = router;
