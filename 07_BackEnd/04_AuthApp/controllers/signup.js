const User = require("../models/userModel");

exports.signup = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const bcrypt = require("bcrypt");
    let hashedPassword = await bcrypt.hash(password, 10);

    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({
        success: false,
        message: `${email} Exist In DB!`,
      });
    }

    const signupData = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    });

    res.status(200).json({
      success: true,
      userData: signupData,
      message: "User Created Successfully!",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
