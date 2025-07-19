const express = require("express");
const router = express.Router();

const { createPost, getAllPosts } = require("../controllers/postController");
const { likePost, dislikePost } = require("../controllers/likeController");
const {
  createComments,
  removeComments,
} = require("../controllers/commentController");

router.post("/createPost", createPost);
router.get("/getAllPosts", getAllPosts);
router.post("/likePost", likePost);
router.post("/dislikePost", dislikePost);
router.post("/createComments", createComments);
router.post("/removeComments", removeComments);

module.exports = router;
