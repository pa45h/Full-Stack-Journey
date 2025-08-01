const OTP = require("../models/OTP");
const User = require("../models/User");
const otpGenerator = require("otp-generator");
const bcrypt = require("bcrypt");
const Profile = require("../models/Profile");
const jwt = require("jsonwebtoken");
require("dotenv").config();

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

    const isUserExist = await User.findOne({ email });
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
    } else if (otp !== recentOtp[0].otp) {
      return res.status(400).json({
        success: false,
        message: "Invalid OTP!",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

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

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Enter All Fields Properly!",
      });
    }

    const user = await User.findOne({ email }).populate("additionalDetails");
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User Is Not Registered, Plaese Sign Up First!",
      });
    }

    if (await bcrypt.compare(password, user.password)) {
      const payload = {
        email: user.email,
        password: user.password,
        accountType: user.accountType,
      };
      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "2h",
      });
      user.token = token;
      user.password = undefined;

      const option = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };
      res.cookie("token", token, option).status(200).json({
        success: true,
        user,
        token,
        message: "User Logged In Successfully!",
      });
    } else {
      res.status(400).json({
        success: false,
        message: "Incorrect Password!",
      });
    }
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      success: false,
      message: "User Could Not Log In, Please Try Again Later!",
      error: error.message,
    });
  }
};

exports.changePassword = async (req, res) => {
  try {
    const { email, oldPassword, newPassword, confirmNewPassword } = req.body;
    const user = await User.findOne({ email });

    if (!oldPassword || !newPassword || !confirmNewPassword) {
      return res.status(400).json({
        success: false,
        message: "Enter All Fields Properly!",
      });
    }

    if (newPassword !== confirmNewPassword) {
      return res.status(400).json({
        success: false,
        message: "New passwords do not match!",
      });
    }

    if (!(await bcrypt.compare(oldPassword, user.password))) {
      return res.status(400).json({
        success: false,
        message: "Incorrect old password!",
      });
    }

    const hashedNewPassword = await bcrypt.hash(newPassword, 10);

    user.password = hashedNewPassword;
    await user.save();

    res.status(200).json({
      success: true,
      user,
      message: "Password Changed Successfully!",
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      success: false,
      message: "User Could Not Change Password, Please Try Again Later!",
      error: error.message,
    });
  }
};
