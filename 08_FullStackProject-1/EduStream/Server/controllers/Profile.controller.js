const Course = require("../models/Course.model");
const Profile = require("../models/Profile.model");
const User = require("../models/User.model");
const { uploadToCloudinary } = require("../utils/cloudinary.util");

exports.updateProfile = async (req, res) => {
  try {
    const {
      gender = "",
      dateOfBirth = "",
      about = "",
      contactNo = "",
    } = req.body;

    const userId = req.user.id;

    const userDetails = await User.findById(userId);
    const profileId = userDetails.additionalDetails;
    const profileDetails = await Profile.findById(profileId);

    if (gender) profileDetails.gender = gender;
    if (dateOfBirth) profileDetails.dateOfBirth = dateOfBirth;
    if (about) profileDetails.about = about;
    if (contactNo) profileDetails.contactNo = contactNo;

    await profileDetails.save();

    return res.status(200).json({
      success: true,
      profileDetails,
      message: "Profile Updated Successfully!",
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      success: false,
      message: "Could Not Update Profile, Please Try Again Later!",
      error: error.message,
    });
  }
};

exports.deleteAccount = async (req, res) => {
  try {
    const userId = req.user.id;
    const userDetails = await User.findById(userId);

    if (!userDetails) {
      return res.status(404).json({
        success: false,
        message: "User Not Found!",
      });
    }

    await Profile.findByIdAndDelete(userDetails.additionalDetails);

    await Course.updateMany(
      { studentEnrolled: userId },
      {
        $pull: {
          studentEnrolled: userId,
        },
      }
    );

    await User.findByIdAndDelete(userId);

    return res.status(200).json({
      success: true,
      message: "Account Deleted Successfully!",
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      success: false,
      message: "Could Not Delete Account, Please Try Again Later!",
      error: error.message,
    });
  }
};

exports.getAllUserDetails = async (req, res) => {
  try {
    const id = req.user.id;

    const userDetails = await User.findById(id)
      .populate("additionalDetails")
      .exec();
    console.log(userDetails);
    
    return res.status(200).json({
      success: true,
      message: "User Data Fetched Successfully",
      data: userDetails,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.updateDisplayPicture = async (req, res) => {
  try {
    const displayPicture = req.files.displayPicture;
    const userId = req.user.id;
    const image = await uploadToCloudinary(
      displayPicture,
      process.env.FOLDER_NAME,
      1000,
      1000
    );
    console.log(image);
    const updatedProfile = await User.findByIdAndUpdate(
      { _id: userId },
      { image: image.secure_url },
      { new: true }
    );
    res.send({
      success: true,
      message: `Image Updated Successfully`,
      data: updatedProfile,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getEnrolledCourses = async (req, res) => {
  try {
    const userId = req.user.id;
    const userDetails = await User.findOne({
      _id: userId,
    })
      .populate("courses")
      .exec();

    if (!userDetails) {
      return res.status(400).json({
        success: false,
        message: `Could Not Find User With Id: ${userDetails}`,
      });
    }
    return res.status(200).json({
      success: true,
      data: userDetails.courses,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
