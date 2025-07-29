const OTP = require("../models/OTP");
const User = require("../models/User");
const otpGenerator = require("otp-generator");

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
