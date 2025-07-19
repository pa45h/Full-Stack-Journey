const Like = require("../models/LikeModel");
const Post = require("../models/postModel");

exports.likePost = async (req, res) => {
  try {
    const { post, user } = req.body;

    const like = new Like({ post, user });

    const savedLike = await like.save();

    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $push: { likes: savedLike._id } },
      { new: true }
    ).populate("likes");

    res.json({
      post: updatedPost,
    });
  } catch (error) {
    return res.status(400).json({
      error: "Error while Liking!",
      message: error.message,
    });
  }
};

exports.dislikePost = async (req, res) => {
  try {
    const { post, like } = req.body;

    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $pull: { likes: like } },
      { new: true }
    ).populate("likes");

    res.json({
      post: updatedPost,
    });
  } catch (error) {
    return res.status(400).json({
      error: "Error while Dis-Liking!",
      message: error.message,
    });
  }
};
