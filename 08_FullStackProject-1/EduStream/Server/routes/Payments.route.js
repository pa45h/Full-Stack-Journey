const express = require("express");
const router = express.Router();

const {
  capturePayment,
  verifySignature,
} = require("../controllers/Payments.controllers");

const { auth, isStudent } = require("../middlewares/auth.middleware");

router.post("/capturePayment", auth, isStudent, capturePayment);
router.post("/verifySignature", auth, isStudent, verifySignature);

module.exports = router;
