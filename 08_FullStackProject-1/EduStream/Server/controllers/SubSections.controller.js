const Section = require("../models/Section.model");
const SubSection = require("../models/SubSection.model");
const Course = require("../models/Course.model");
const {
  uploadToCloudinary,
  deleteFromCloudinary,
} = require("../utils/cloudinary.util");
const { extractPublicId } = require("cloudinary-build-url");
require("dotenv").config();

exports.createSubSection = async (req, res) => {
  try {
    const { sectionId, title, description, timeDuration } = req.body;
    const videoFile = req.files?.video;

    if (!sectionId || !title || !description) {
      return res.status(400).json({
        success: false,
        message: "All Fields Are Required!",
      });
    }

    const videoUrl = await uploadToCloudinary(
      videoFile,
      process.env.FOLDER_NAME
    );

    const newSubSection = await SubSection.create({
      title: title,
      description: description,
      timeDuration: timeDuration,
      videoUrl: videoUrl.secure_url,
    });

    const updatedSection = await Section.findByIdAndUpdate(
      sectionId,
      {
        $push: {
          subSection: newSubSection._id,
        },
      },
      { new: true }
    ).populate("subSection");

    return res.status(200).json({
      success: true,
      newSubSection,
      updatedSection,
      message: "Sub-Section Created Successfully!",
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      success: false,
      message: "Could Not Create Sub-Section, Please Try Again Later!",
      error: error.message,
    });
  }
};

exports.updateSubSection = async (req, res) => {
  try {
    const { subSectionId, title, description, timeDuration, courseId } =
      req.body;
    const videoFile = req.files?.video;

    const subSection = await SubSection.findById(subSectionId);
    if (!subSection) {
      return res.status(400).json({
        success: false,
        message: "Sub-Section not found!",
      });
    }

    if (title) subSection.title = title;
    if (description) subSection.description = description;
    if (timeDuration) subSection.timeDuration = timeDuration;

    if (videoFile) {
      const odlVideoPublicId = extractPublicId(subSection.videoUrl);
      await deleteFromCloudinary(odlVideoPublicId);

      const videoUrl = await uploadToCloudinary(
        videoFile,
        process.env.FOLDER_NAME
      );

      subSection.videoUrl = videoUrl.secure_url;
    }

    await subSection.save();

    const updatedCourse = await Course.findById(courseId)
      .populate({
        path: "courseContent",
        populate: {
          path: "subSection",
        },
      })
      .exec();

    return res.status(200).json({
      success: true,
      subSection,
      updatedCourse,
      message: "Sub-Section Updated Successfully!",
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      success: false,
      message: "Could Not Update Sub-Section, Please Try Again Later!",
      error: error.message,
    });
  }
};

exports.deleteSubSection = async (req, res) => {
  try {
    const { sectionId, subSectionId } = req.body;
    const subSection = await SubSection.findById(subSectionId);
    // const videoUrl = subSection.videoUrl;
    // const videoPublicId = extractPublicId(videoUrl);

    // await deleteFromCloudinary(videoPublicId);

    await SubSection.findByIdAndDelete(subSectionId);

    const updatedSection = await Section.findByIdAndUpdate(
      sectionId,
      {
        $pull: {
          subSection: subSection._id,
        },
      },
      { new: true }
    );

    return res.status(200).json({
      success: true,
      updatedSection,
      message: "Sub-Section Deleted Successfully!",
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      success: false,
      message: "Could Not Delete Sub-Section, Please Try Again Later!",
      error: error.message,
    });
  }
};
