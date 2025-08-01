const mongoose = require("mongoose");
const mailSender = require("../utils/mailSender.util");

const otpSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    otp: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      expires: 5 * 60,
    },
  },
  { timestamps: true }
);

async function sendVerificationEmail(email, otp) {
  try {
    const mailResponse = await mailSender(
      email,
      "Verification Email From EduStream",
      `<h1>Your OTP is: ${otp}</h1><p>It expires in 5 minutes.</p>`
    );
    console.log(mailResponse);
  } catch (error) {
    console.log("Error Occured While Sending Verification Email!");
    console.error(error.message);
  }
}

otpSchema.pre("save", async function (next) {
  sendVerificationEmail(this.email, this.otp);
  next();
});

module.exports = mongoose.model("OTP", otpSchema);
