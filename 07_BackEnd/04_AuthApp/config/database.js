const { default: mongoose } = require("mongoose");

require("dotenv").config();

exports.connectDB = () => {
  mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => {
      console.log("DB Connected Successfully!");
    })
    .catch((error) => {
      console.log("DB Connection Error!");
      console.error(error);
      process.exit(1);
    });
};