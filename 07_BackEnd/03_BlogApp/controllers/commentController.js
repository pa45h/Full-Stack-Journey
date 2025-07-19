const mongoose = require("mongoose");

exports.createComments = async (req, res) => {
  try {

    

  } catch (error) {
    return res.status(400).json({
      error: "Error while creating Comments!",
    });
  }
};
