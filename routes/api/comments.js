const router = require("express").Router();
const commentsController = require("../../controllers/commentsController");

// Matches with "/api/comments"
router
  .route("/")
  .get(commentsController.findAll)
  .post(commentsController.create);

//Matches with "/api/comments/:id"
router.route("/:id").delete(commentsController.remove);

module.exports = router;
