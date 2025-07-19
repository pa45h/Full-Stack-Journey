const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT;

app.use(express.json());

const { dbConnect } = require("./config/database");
dbConnect();

const blog = require("./routes/blog");
app.use("/api/v1", blog);

app.listen(PORT, () => {
  console.log(`Server Started As Port ${PORT}!`);
});

app.get("/", (req, res) => {
  res.send("<h1>Welcome To My Blog Server!</h1>");
});
