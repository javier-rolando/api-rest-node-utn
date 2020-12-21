const router = require("express").Router();
const userController = require("../controllers/userController");
const {
  validateLogin,
  validateRegister
} = require("../middlewares/userMiddleware");

router.get("/all", userController.getAllUsers);
router.post("/register", validateRegister, userController.register);
router.post("/login", validateLogin, userController.login);
router.get("/:id", userController.getUser);

module.exports = router;
