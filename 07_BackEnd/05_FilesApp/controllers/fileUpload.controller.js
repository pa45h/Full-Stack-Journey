const File = require("../models/File.model");

exports.locallyFileUpload = async (req, res) => {
  try {
    const file = req.files.file;
    console.log("File -> ", file);

    const path =
      __dirname +
      "/files/" +
      file.name +
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
