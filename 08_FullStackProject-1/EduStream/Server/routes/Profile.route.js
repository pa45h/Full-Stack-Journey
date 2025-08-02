const express = require("express");
const router = express.Router();

const {
  updateProfile,
  deleteAccount,
  getAllUserDetails,
  updateDisplayPicture,
  getEnrolledCourses,
} = require("../controllers/Profile.controller");

const {
  auth,
  isStudent,
} = require("../middlewares/auth.middleware");

router.put("/updateProfile", auth, isStudent, updateProfile);
router.delete("/deleteAccount", auth, isStudent, deleteAccount);
router.get("/getAllUserDetails", auth, isStudent, getAllUserDetails);
router.put("/updateDisplayPicture", auth, isStudent, updateDisplayPicture);
router.get("/getEnrolledCourses", auth, isStudent, getEnrolledCourses);

module.exports = router;
