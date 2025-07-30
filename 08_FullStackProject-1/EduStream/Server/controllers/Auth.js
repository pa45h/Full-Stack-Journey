const OTP = require("../models/OTP");
const User = require("../models/User");
const otpGenerator = require("otp-generator");
const bcrypt = require("bcrypt");
const Profile = require("../models/Profile");

exports.sendOtp = async (req, res) => {
  try {
    const { email } = req.body;

    const isUserRegistered = await User.findOne({ email });

    if (isUserRegistered) {
      return res.status(400).json({
        success: false,
        message: "User Already Registered!",
      });
    }

    let otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });
    console.log("Generated OTP: ", otp);

    let isOtp = await OTP.findOne({ otp });

    while (isOtp) {
      otp = otpGenerator.generate(6, {
        upperCaseAlphabets: false,
        lowerCaseAlphabets: false,
        specialChars: false,
      });
      isOtp = await OTP.findOne({ otp });
    }

    const otpPayload = { email, otp };

    const otpBody = await OTP.create(otpPayload);
    console.log(otpBody);

    res.status(200).json({
      success: true,
      message: "OTP Sent Successfully!",
      OTP: otpBody,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      success: false,
      message: "Error While Sending OTP!",
      error: error.message,
    });
  }
};

exports.signUp = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      accountType,
      contactNo,
      otp,
    } = req.body;

    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !confirmPassword ||
      !otp
    ) {
      return res.status(400).json({
        success: false,
        message: "Enter All Fields Properly!",
      });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Password Value Does Not Match, Please Try Again!",
      });
    }

    const isUserExist = User.findOne({ email });
    if (isUserExist) {
      return res.status(400).json({
        success: false,
        message: "User Already Registered!",
      });
    }

    const recentOtp = await OTP.find({ email })
      .sort({ createdAt: -1 })
      .limit(1);
    console.log("recentOtp : ", recentOtp);

    if (!recentOtp.length) {
      return res.status(400).json({
        success: false,
        message: "OTP Not Found!",
      });
    } else if (otp !== recentOtp.otp) {
      return res.status(400).json({
        success: false,
        message: "Invalid OTP!",
      });
    }

    const hashedPassword = bcrypt.hash(password, 10);

    const profileData = await Profile.create({
      gender: null,
      dateOfBirth: null,
      about: null,
      contactNo: null,
    });

    const userData = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      accountType,
      contactNo,
      additionalDetails: profileData._id,
      image: `https://api.dicebear.com/9.x/initials/svg?${firstName} ${lastName}`,
    });

    return res.status(200).json({
      success: true,
      message: " User Registered Successfully!",
      userData,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      success: false,
      message: "User Could Not Registered, Please Try Again Later!",
      error: error.message,
    });
  }
};
