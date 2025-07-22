const express = require("express");
const router = express.Router();

const { signup } = require("../controllers/signup");
const { login } = require("../controllers/login");
const { auth, isStudent, isAdmin } = require("../middlewares/auth");

router.post("/signup", signup);
router.post("/login", login);

router.get("/student", auth, isStudent, (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome Student, into the protected student route!",
  });
});
router.get("/admin", auth, isAdmin, (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome Admin, into the protected admin route!",
  });
});

module.exports = router;
