const express = require("express");
const router = express.Router();

const {
  sendOtp,
  signUp,
  login,
  changePassword,
} = require("../controllers/Auth.controller");

const {
  resetPasswordToken,
  resetPassword,
} = require("../controllers/ResetPassword.controller");

const { auth } = require("../middlewares/auth.middleware");

router.post("/sendotp", sendOtp);
router.post("/signup", signUp);
router.post("/login", login);
router.post("/changePassword", auth, changePassword);

router.post("/resetPasswordToken", resetPasswordToken);
router.post("/resetPassword", resetPassword);

module.exports = router;
