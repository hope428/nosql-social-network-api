const router = require("express").Router();

// require controllers here
const {
  getThoughts,
  createThought,
  getThoughtById,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction
} = require("../../controllers/thoughtController");

// /api/thoughts
router.route("/").get(getThoughts).post(createThought);

// /api/thoughts/:id
router
  .route("/:id")
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

// /api/thoughts/:thoughtid/reactions
router.route("/:thoughtid/reactions").post(addReaction)
router.route("/:thoughtid/reactions/:reactionid").delete(removeReaction)

module.exports = router;
