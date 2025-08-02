const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;

const userRoutes = require("./routes/User.route");
const courseRoutes = require("./routes/Course.route");
const profileRoutes = require("./routes/Profile.route");
const paymentRoutes = require("./routes/Payments.route");

const database = require("./config/database.config");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const cloudinary = require("./config/cloudinary.config");
const fileUpload = require("express-fileupload");
require("dotenv").config();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/temp",
  })
);

app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/course", courseRoutes);
app.use("/api/v1/profile", profileRoutes);
app.use("/api/v1/payment", paymentRoutes);

database.connectDB();
cloudinary.connectCloudinary();

app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "Server is up and running...",
  });
});

app.listen(PORT, () => {
  console.log(`App is running at :- http://localhost:${PORT}`);
});
