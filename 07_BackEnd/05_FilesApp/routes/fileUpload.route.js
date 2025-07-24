const express = require("express");
const router = express.Router();

const { locallyFileUpload } = require("../controllers/fileUpload.controller");

router.post("/locallyFileUpload", locallyFileUpload);

module.exports = router;
