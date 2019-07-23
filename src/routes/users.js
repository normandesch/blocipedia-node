const express = require("express");
const router = express.Router();
const validation = require("./validation");
const User = require("../../src/db/models").User;
const userController = require("../controllers/userController");

router.get("/users/upgrade", userController.upgrade);
router.post("/users/:id/upgrade", userController.payment);
router.post("/users/:id/downgrade", userController.downgrade);

router.get("/users/sign_up", userController.signUp);
router.get("/users/sign_in", userController.signInForm);
router.post("/users/sign_up", validation.validateUsers, userController.create);
router.post(
  "/users/sign_in",
  validation.validateUsersSignIn,
  userController.signIn
);
router.get("/users/sign_out", userController.signOut);

module.exports = router;
