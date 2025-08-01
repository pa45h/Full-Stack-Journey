const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.auth = async (req, res, next) => {
  try {
    const token =
      req.cookies.token ||
      req.body.token ||
      req.header("Authorization").replace("Bearer ", "");

    if (!token) {
      return res.status(500).json({
        success: false,
        message: "Token Missing!",
      });
    }

    const decode = await jwt.verify(token, process.env.JWT_SECRET);
    console.log(decode);
    req.user = decode;
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      success: false,
      message: "Something Went Wrong While Token Varification!",
      error: error.message,
    });
  }
  next();
};

exports.isStudent = async (req, res, next) => {
  try {
    if (req.user.accountType != "student") {
      return res.status(400).json({
        success: false,
        message: "This Is The Authrorized Route For Student Only!",
      });
    }
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      success: false,
      message: "Something Went Wrong While Student Authorization!",
      error: error.message,
    });
  }
  next();
};

exports.isInstructor = async (req, res, next) => {
  try {
    if (req.user.accountType != "instructor") {
      return res.status(400).json({
        success: false,
        message: "This Is The Authrorized Route For Instructor Only!",
      });
    }
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      success: false,
      message: "Something Went Wrong While Instructor Authorization!",
      error: error.message,
    });
  }
  next();
};

exports.isAdmin = async (req, res, next) => {
  try {
    if (req.user.accountType != "admin") {
      return res.status(400).json({
        success: false,
        message: "This Is The Authrorized Route For Admin Only!",
      });
    }
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      success: false,
      message: "Something Went Wrong While Admin Authorization!",
      error: error.message,
    });
  }
  next();
};
