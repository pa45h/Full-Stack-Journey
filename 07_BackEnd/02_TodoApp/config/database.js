const mongoose = require("mongoose");

require("dotenv").config();

const dbConnect = () => {
  mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => {
      console.log("DB Connected!");
    })
    .catch((error) => {
      console.log("DB could not Connect!");
      console.error(error.message);
      process.exit(1);
    });
};

module.exports = dbConnect;
