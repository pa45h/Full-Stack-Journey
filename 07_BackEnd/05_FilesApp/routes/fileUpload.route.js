const express = require("express");
const router = express.Router();

const {
  locallyFileUpload,
  imageUpload,
  videoUpload,
  imageUploadReduced,
  videoUploadReduced
} = require("../controllers/fileUpload.controller");

router.post("/locallyFileUpload", locallyFileUpload);
router.post("/imageUpload", imageUpload);
router.post("/videoUpload", videoUpload);
router.post("/imageUploadReduced", imageUploadReduced);
router.post("/videoUploadReduced", videoUploadReduced);

module.exports = router;
