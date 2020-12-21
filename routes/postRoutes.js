const router = require("express").Router();
const verifyToken = require("../middlewares/verifyToken");
const postController = require("../controllers/postController");
const {
  validateCreate,
  validateUpdate
} = require("../middlewares/postMiddleware");

router.get("/all", postController.getPosts);
router.post("/create", verifyToken, validateCreate, postController.createPost);
router.get("/:id", postController.getPost);
router.put("/:id/edit", verifyToken, validateUpdate, postController.updatePost);
router.delete("/:id/delete", verifyToken, postController.deletePost);

module.exports = router;
