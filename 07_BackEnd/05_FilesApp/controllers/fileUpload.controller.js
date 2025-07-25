const { response } = require("express");
const File = require("../models/File.model");
const cloudinary = require("cloudinary").v2;

exports.locallyFileUpload = async (req, res) => {
  try {
    const file = req.files.file;
    console.log("File -> ", file);

    const path =
      __dirname +
      "/files/" +
      file.name.split(".")[0] +
      "-" +
      Date.now() +
      "." +
      file.name.split(".")[1];

    file.mv(path, (error) => {
      if (error) console.log("error during mv : ", error);
    });

    res.status(200).json({
      success: true,
      message: "File Uploaded Successfully!",
      file: file,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error occurred During Locally File Upload!",
      error: error.message,
    });
  }
};

function isFileTypeSupported(currFileType, supportedFileType) {
  return supportedFileType.includes(currFileType);
}

async function uploadToCloudinary(file, folder, quality) {
  options = { folder };
  if (quality) options.quality = quality;
  options.resource_type = "auto";
  return await cloudinary.uploader.upload(file.tempFilePath, options);
}

exports.imageUpload = async (req, res) => {
  try {
    const { name, tags, email } = req.body;
    console.log("Req Body -> ", name, tags, email);

    const file = req.files.imageFile;
    console.log("Req File -> ", file);

    const supportedFileType = ["jpg", "jpeg", "png"];
    const currFileType = file.name.split(".")[1];
    console.log("currFileType -> ", currFileType);

    if (!isFileTypeSupported(currFileType, supportedFileType)) {
      res.status(400).json({
        success: false,
        message: "File Type Not Supported!",
      });
    }

    const response = await uploadToCloudinary(file, "FilesApp");
    console.log("response -> ", response);

    await File.create({
      name,
      tags,
      email,
      url: response.secure_url,
    });

    res.status(200).json({
      success: true,
      imageUrl: response.secure_url,
      message: "Image Uploaded Successfully!",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error occurred During Image Upload!",
      error: error.message,
    });
  }
};

exports.videoUpload = async (req, res) => {
  try {
    const { name, tags, email } = req.body;
    console.log("Req Body -> ", name, tags, email);

    const file = req.files.videoFile;
    console.log("Req File -> ", file);

    const supportedFileType = ["mp4", "mkv", "mov"];
    const currFileType = file.name.split(".")[1];

    if (!isFileTypeSupported(currFileType, supportedFileType)) {
      res.status(400).json({
        success: false,
        message: "File Type Not Supported!",
      });
    }

    const response = await uploadToCloudinary(file, "FilesApp");
    console.log("response -> ", response);

    await File.create({
      name,
      tags,
      email,
      url: response.secure_url,
    });

    res.status(200).json({
      success: true,
      imageUrl: response.secure_url,
      message: "Video Uploaded Successfully!",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error occurred During Video Upload!",
      error: error.message,
    });
  }
};

exports.imageUploadReduced = async (req, res) => {
  try {
    const { name, tags, email } = req.body;
    console.log("Req Body -> ", name, tags, email);

    const file = req.files.imageFile;
    console.log("Req File -> ", file);

    const supportedFileType = ["jpg", "jpeg", "png"];
    const currFileType = file.name.split(".")[1];
    console.log("currFileType -> ", currFileType);

    if (!isFileTypeSupported(currFileType, supportedFileType)) {
      res.status(400).json({
        success: false,
        message: "File Type Not Supported!",
      });
    }

    const response = await uploadToCloudinary(file, "FilesApp", 50);
    console.log("response -> ", response);

    await File.create({
      name,
      tags,
      email,
      url: response.secure_url,
    });

    res.status(200).json({
      success: true,
      imageUrl: response.secure_url,
      message: "Reduced Image Uploaded Successfully!",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error occurred During Reduced Video Upload!",
      error: error.message,
    });
  }
};

exports.videoUploadReduced = async (req, res) => {
  try {
    const { name, tags, email } = req.body;
    console.log("Req Body -> ", name, tags, email);

    const file = req.files.videoFile;
    console.log("Req File -> ", file);

    const supportedFileType = ["mp4", "mkv", "mov"];
    const currFileType = file.name.split(".")[1];

    if (!isFileTypeSupported(currFileType, supportedFileType)) {
      res.status(400).json({
        success: false,
        message: "File Type Not Supported!",
      });
    }

    const response = await uploadToCloudinary(file, "FilesApp", 50);
    console.log("response -> ", response);

    await File.create({
      name,
      tags,
      email,
      url: response.secure_url,
    });

    res.status(200).json({
      success: true,
      imageUrl: response.secure_url,
      message: "Reduced Video Uploaded Successfully!",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error occurred During Reduced Video Upload!",
      error: error.message,
    });
  }
};
