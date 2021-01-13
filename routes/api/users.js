const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/user"
router.route("/").post(usersController.register);

// router.route("/").get(usersController.findAll).post(usersController.register);

//Matches with "/api/user/:id"
router.route("/:id").get(usersController.findById).put(usersController.update);

module.exports = router;
