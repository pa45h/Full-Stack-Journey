const express = require("express");
const router = express.Router();

const { createCategory } = require("../controllers/Categories.controller");
const { auth, isAdmin } = require("../middlewares/auth.middleware");
const { adminLogin } = require("../controllers/Auth.controller");
const { fetchAllData } = require("../controllers/Profile.controller");

// ==================== ROUTES FOR ADMIN: ====================
router.post("/adminLogin", adminLogin);
router.get("/fetchAllData", auth, isAdmin, fetchAllData);
router.post("/createCategory", auth, isAdmin, createCategory);

module.exports = router;
