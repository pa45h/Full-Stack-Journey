const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
require("dotenv").config();

const fileSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  url: {
    type: String,
  },
  tags: {
    type: String,
  },
  email: {
    type: String,
  },
});

fileSchema.post("save", async (doc) => {
  try {
    console.log("Doc ->", doc);

    let transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    let info = await transporter.sendMail({
      from: `Parth Katariya`,
      to: doc.email,
      subject: "New File Uploaded On Cloudinary!",
      html: `<h2>Hello Mr.${doc.name},</h2> <p>Your File Uploaded Successfully On Cloudinary!</p> <p>Here Is The File: ${doc.url}</p>`,
    });

    console.log(info);
  } catch (error) {
    console.error(error.message);
  }
});

module.exports = mongoose.model("File", fileSchema);
