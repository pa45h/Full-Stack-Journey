const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please Fill Details Properly!",
      });
    }

    let userExist = await User.findOne({ email });

    if (!userExist) {
      res.status(400).json({
        success: false,
        message: "Please Sign Up First!",
      });
    }

    const payload = {
      id: userExist._id,
      email: userExist.email,
      role: userExist.role,
    };

    if (await bcrypt.compare(password, userExist.password)) {
      const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
        expiresIn: "2h",
      });

      userExist = userExist.toObject();
      userExist.token = token;
      userExist.password = undefined;

      const option = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };

      res.cookie("token", token, option).status(200).json({
        success: true,
        token,
        userExist,
        message: "User Logged in Successfully!",
      });
    } else {
      res.status(400).json({
        success: false,
        message: "Password Incorrect!",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Login Failed, Try again later!",
    });
  }
};
