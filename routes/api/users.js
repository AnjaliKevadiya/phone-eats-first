const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/user"
router.route("/").get(usersController.findAll).post(usersController.register);

// login api route
router.route("/login").post(usersController.login);

//Matches with "/api/user/:id"
router.route("/:id").get(usersController.findById).put(usersController.update);

module.exports = router;
