const router = require("express").Router();
const userRoutes = require("./users");
const postRoutes = require("./posts");
const commentRoutes = require("./comments");

// User routes /api/user
router.use("/user", userRoutes);

// Post routes
router.use("/posts", postRoutes);

// Comment routes
router.use("/comments", commentRoutes);

module.exports = router;
