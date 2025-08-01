const Tag = require("../models/Tag");

exports.createTag = async (req, res) => {
  try {
    const { name, description } = req.body;

    if (!name || !description) {
      return res.status(400).json({
        success: false,
        message: "All Fields Are Required!",
      });
    }

    const tagDetails = await Tag.create({
      name: name,
      description: description,
    });
    console.log(tagDetails);

    res.status(200).json({
      success: true,
      tagDetails,
      message: "Tag Created Successfully!",
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

exports.getAllTags = async (req, res) => {
  try {
    const allTags = await Tag.find({}, { name: true, description: true });

    res.status(200).json({
      success: true,
      allTags,
      message: "Got All Tag Successfully!",
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
