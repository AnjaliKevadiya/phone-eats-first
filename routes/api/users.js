const router = require("express").Router();
const usersController = require("../../controllers/usersController");
var passport = require("../../config/passport");

// signup endpoint "/api/user/singup"
router.route("/signup").post(usersController.register);

// login endpoint /api/user/login
router.post("/login", passport.authenticate("local"), function (req, res) {
  console.log("Requested User: ", req.user);
  if (!req.user) {
    console.log("User not logged in");
    res.json({});
  } else {
    console.log("Loging in ", req.user.email);
    res.setHeader("content-type", "text/plain");
    res.json(req.user);
  }
});

//endpoint /api/user/auth/google
router.route("/google").get(
  passport.authenticate("google", {scope: "profile"})
 
  );

router.route("/google/callback").get(
  passport.authenticate(("google"),
  (req, res) => {
    console.log(res);
    res.redirect("/home");
  })
)

// router.use("/auth/google"),
// passport.authenticate("google", {scope: "profile"});

// router.use("/auth/google/callback"),
// (req, res) => {
//   console.log("HIT GOOGLE");
//   res.redirect("/home");
// };

router.route("/auth/facebook", passport.authenticate("facebook"));

router.route ("/auth/facebook/callback",
  passport.authenticate(("facebook"),
  (req, res) => {
    res.redirect("/home");
  })
)

// endpoint /api/user/userdata
router.route("/userdata").get(usersController.checkUserLogin);

// //google login endpoint "/api/user/googlelogin"
// router.route("/googlelogin").post(usersController.googlelogin);

// //facebook login endpoint "/api/user/facebooklogin"
// router.route("/facebooklogin").post(usersController.facebooklogin);

//Matches with "/api/user/:id"
router.route("/:id").get(usersController.findById).put(usersController.update);

module.exports = router;
