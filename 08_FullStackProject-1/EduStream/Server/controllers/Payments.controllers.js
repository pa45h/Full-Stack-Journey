const { instance } = require("../config/razorpay.config");
const Course = require("../models/Course.model");
const User = require("../models/User.model");
const mailSender = require("../utils/mailSender.util");
const { courseEnrollmentEmail } = require("../mails/courseEnrollment.mail");
const { default: mongoose } = require("mongoose");

exports.capturePayment = async (req, res) => {
  try {
    const userId = req.user.id;
    const { courseId } = req.body;

    if (!courseId) {
      return res.status(400).json({
        success: false,
        message: "Please Provide Valid Course Id!",
      });
    }

    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(400).json({
        success: false,
        message: "Course Not Found!",
      });
    }

    const uid = new mongoose.Types.ObjectId(userId);
    if (course.studentEnrolled.includes(uid)) {
      return res.status(400).json({
        success: false,
        message: "Student Is Already Enrolled!",
      });
    }

    const amount = course.price;
    const currency = "INR";

    const options = {
      amount: amount * 100,
      currency: currency,
      receipt: `${Date.now()}`,
      notes: {
        courseId: courseId,
        userId: userId,
      },
    };

    const paymentResponse = await instance.orders.create(options);
    console.log(paymentResponse);

    return res.status(200).json({
      success: true,
      courseName: course.courseName,
      paymentResponse: paymentResponse,
      courseDescription: course.courseDescription,
      orderId: paymentResponse.id,
      currency: paymentResponse.currency,
      amount: paymentResponse.amount,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.verifySignature = async (req, res) => {
  try {
    const webhookSectret = "0987654321";

    const signature = req.headers["x-razorpay-signature"];

    const shasum = crypto.createHmac("sha256", webhookSectret);
    shasum.update(JSON.stringify(req.body));
    const digest = shasum.digest("hex");

    if (digest === signature) {
      console.log("Payment Is Authorized!");

      const { userId, courseId } = req.body.payload.payment.entity.notes;

      const enrolledCourse = await Course.findOneAndUpdate(
        { _id: courseId },
        {
          $push: {
            studentEnrolled: userId,
          },
        },
        { new: true }
      );

      if (!enrolledCourse) {
        return res.status(500).json({
          success: false,
          message: "Course Not Found",
        });
      }
      console.log("enrolledCourse :- ", enrolledCourse);

      const enrolledStudent = await User.findOneAndUpdate(
        { _id: userId },
        {
          $push: {
            course: courseId,
          },
        },
        { new: true }
      );
      console.log("enrolledStudent :- ", enrolledStudent);

      const emailResponse = await mailSender(
        enrolledStudent.email,
        "Congratulations, You are onboard into new course",
        courseEnrollmentEmail(
          enrolledCourse.courseName,
          enrolledStudent.firstName
        )
      );
      console.log("emailResponse :- ", emailResponse);

      return res.status(200).json({
        success: true,
        message: "Signature Verified And Course Added!",
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Invalid Request!",
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
