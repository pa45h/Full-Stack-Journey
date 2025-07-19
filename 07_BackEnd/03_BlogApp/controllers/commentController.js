const mongoose = require("mongoose");
const Comment = require("../models/commentModel");
const Post = require("../models/postModel");

exports.createComments = async (req, res) => {
  try {
    const { post, user, body } = req.body;

    const comment = new Comment({ post, user, body });

    const savedComment = await comment.save();

    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $push: { comments: savedComment._id } },
      { new: true }
    ).populate("comments");

    res.json({ post: updatedPost });
  } catch (error) {
    return res.status(400).json({
      error: "Error while creating Comments!",
      message: error.message,
    });
  }
};

exports.removeComments = async (req, res) => {
  try {
    const { post, comment } = req.body;

    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $pull: { comments: comment } },
      { new: true }
    ).populate("comments");

    res.json({ post: updatedPost });
  } catch (error) {
    return res.status(400).json({
      error: "Error while removing Comments!",
      message: error.message,
    });
  }
};
