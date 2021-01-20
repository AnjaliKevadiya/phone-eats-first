const router = require("express").Router();
const postsController = require("../../controllers/postsController");

//Matches with "/api/posts/"
router.route("/all").get(postsController.findAll);

// endpoint /api/posts/create
router.route("/create").post(postsController.create);

//Matches with "/api/posts/:id"
router
  .route("/:id")
  .get(postsController.findById)
  .put(postsController.update)
  .delete(postsController.remove);

// endpoint "/api/posts/updateLike"
router.route("/updateLike").post(postsController.updateLike);

module.exports = router;
