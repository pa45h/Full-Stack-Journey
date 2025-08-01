const User = require("../models/User");
const Course = require("../models/Course");
const Tag = require("../models/Tag");
const { uploadImageToCloudinary } = require("../utils/imageUploader");
require("dotenv").config();

exports.createCourse = async (req, res) => {
  try {
    const { courseName, courseDescription, whatYouWillLearn, price, tag } =
      req.body;

    const thumbnail = req.files.thumbnailImage;

    if (
      !courseName ||
      !courseDescription ||
      !whatYouWillLearn ||
      !price ||
      !tag ||
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

    const tagDetails = await Tag.findById(tag);
    if (!tagDetails) {
      return res.status(404).json({
        success: false,
        message: "Tag Not Found!",
      });
    }

    const thumbnailImageUrl = await uploadImageToCloudinary(
      thumbnail,
      process.env.FOLDER_NAME
    );

    const newCourse = await Course({
      courseName,
      courseDescription,
      instructor: instructorDetails,
      whatYouWillLearn: whatYouWillLearn,
      price,
      tag: tagDetails._id,
      thumbnail: thumbnailImageUrl.secure_url,
    });

    await User.findByIdAndUpdate(
      { _id: instructorDetails._id },
      { $push: { courses: newCourse._id } },
      { new: true }
    );

    await Tag.findByIdAndUpdate(
      { _id: tagDetails._id },
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
      error: error.message,
    });
  }
};
