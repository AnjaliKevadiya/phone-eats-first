const router = require("express").Router();
const usersController = require("../../controllers/usersController");
var passport = require("../../config/passport");

// Matches with "/api/user"
router.route("/").get(usersController.findAll).post(usersController.register);

// login api route
// router.route("/login").post(usersController.login);
router.post("/login", passport.authenticate("local"), function (req, res) {
  console.log("Loging in ", req.body.email);
  res.setHeader("content-type", "text/plain");
  res.json(req.user);
});

//Matches with "/api/user/:id"
router.route("/:id").get(usersController.findById).put(usersController.update);

module.exports = router;
