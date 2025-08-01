const User = require("../models/User.model");
const Course = require("../models/Course.model");
const Category = require("../models/Category.model");
const { uploadToCloudinary } = require("../utils/cloudinary.util");
require("dotenv").config();

exports.createCourse = async (req, res) => {
  try {
    const {
      courseName,
      courseDescription,
      whatYouWillLearn,
      price,
      category,
      tags,
    } = req.body;

    const thumbnail = req.files.thumbnailImage;

    if (
      !courseName ||
      !courseDescription ||
      !whatYouWillLearn ||
      !price ||
      !category ||
      !tags ||
      !thumbnail
    ) {
      return res.status(400).json({
        success: false,
        message: "All Fields Are Required!",
      });
    }

    const userId = req.user.id;
    const instructorDetails = await User.findById(userId);
    console.log("Instructor Details : ", instructorDetails);
    if (!instructorDetails) {
      return res.status(404).json({
        success: false,
        message: "Instructor Not Found!",
      });
    }

    const categoryDetails = await Category.findById(category);
    if (!categoryDetails) {
      return res.status(404).json({
        success: false,
        message: "Category Not Found!",
      });
    }

    const thumbnailImageUrl = await uploadToCloudinary(
      thumbnail,
      process.env.FOLDER_NAME
    );

    const newCourse = await Course({
      courseName,
      courseDescription,
      instructor: instructorDetails,
      whatYouWillLearn: whatYouWillLearn,
      price,
      category: categoryDetails._id,
      tags,
      thumbnail: thumbnailImageUrl.secure_url,
    });

    await User.findByIdAndUpdate(
      { _id: instructorDetails._id },
      { $push: { courses: newCourse._id } },
      { new: true }
    );

    await Category.findByIdAndUpdate(
      { _id: categoryDetails._id },
      { $push: { courses: newCourse._id } },
      { new: true }
    );

    return res.status(200).json({
      success: true,
      data: newCourse,
      message: "Course Created Successfuly!",
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      success: false,
      message:"Could Not Create Course, Please Try Again Later!",
      error: error.message,
    });
  }
};

exports.getAllCourses = async (req, res) => {
  try {
    const allCourses = Course.find(
      {},
      {
        courseName: true,
        instructor: true,
        price: true,
        studentEnrolled: true,
        thumbnail: true,
        ratingAndReviews: true,
      }
    )
      .populate()
      .exec();
    return res.status(200).json({
      success: true,
      data: allCourses,
      message: "Got Courses Successfuly!",
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      success: false,
      message:"Could Not Fetch All Courses, Please Try Again Later!",
      error: error.message,
    });
  }
};
