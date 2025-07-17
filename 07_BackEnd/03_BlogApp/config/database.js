const mongoose = require("mongoose");

require("dotenv").config();

exports.dbConnect = () => {
  mongoose
    .connect(process.env.DB_URL)
    .then(() => {
      console.log("DB Connected Successfully!");
    })
    .catch((error) => {
      console.log(error);
      console.error(error);
      process.exit(1);
    });
};
