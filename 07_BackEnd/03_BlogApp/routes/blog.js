const express = require("express");
const router = express.Router();

const {createPost,getAllPosts} = require("../controllers/postController");
const {likePost} = require("../controllers/likeController");

router.post("/createPost",createPost);
router.get("/getAllPosts",getAllPosts);
router.post("/likePost",likePost);

module.exports = router;
