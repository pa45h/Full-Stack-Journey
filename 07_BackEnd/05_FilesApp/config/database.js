const mongoose = require("mongoose");
require("dotenv").config();

exports.connectDataBase = () => {
  try {
    mongoose.connect(process.env.DATABASE_URL);
    console.log("DB Connected Successfully!");
  } catch (error) {
    console.log("DB Could Not Connect!");
    console.error(error.message);
    process.exit(1);
  }
};
