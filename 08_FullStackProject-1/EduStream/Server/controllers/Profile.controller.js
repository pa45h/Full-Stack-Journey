const Course = require("../models/Course.model");
const Profile = require("../models/Profile.model");
const User = require("../models/User.model");

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
