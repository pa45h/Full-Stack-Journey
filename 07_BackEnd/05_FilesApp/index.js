const express = require("express");
const app = express();
const fileupload = require("express-fileupload");
const database = require("./config/database");
const cloudinary = require("./config/cloudinary");
const Upload = require("./routes/fileUpload.route");
require("dotenv").config();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(
  fileupload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

database.connectDataBase();
cloudinary.connectCloudinary();

app.use("/api/v1/upload", Upload);

app.listen(PORT, () => {
  console.log(`Server is live -> http://localhost:${PORT}`);
});
