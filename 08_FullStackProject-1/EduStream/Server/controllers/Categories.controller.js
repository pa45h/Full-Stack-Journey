const Category = require("../models/Category.model");

exports.createCategory = async (req, res) => {
  try {
    const { name, description } = req.body;

    if (!name || !description) {
      return res.status(400).json({
        success: false,
        message: "All Fields Are Required!",
      });
    }

    const categoryDetails = await Category.create({
      name: name,
      description: description,
    });
    console.log(categoryDetails);

    res.status(200).json({
      success: true,
      categoryDetails,
      message: "Category Created Successfully!",
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

exports.getAllCategories = async (req, res) => {
  try {
    const allCategories = await Category.find({}, { name: true, description: true });

    res.status(200).json({
      success: true,
      allCategories,
      message: "Got All Categories Successfully!",
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
