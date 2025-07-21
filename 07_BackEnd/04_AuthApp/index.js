const express = require("express");
const app = express();

require("dotenv").config();

app.listen(process.env.PORT, () => {
  console.log(`Server Is Running on PORT ${process.env.PORT}}`);
});

require("./config/database").connectDB();

app.use(express.json());

const users = require("./routes/users");
app.use("/api/v1/users", users);

app.get("/", (req, res) => {
  res.send(`<h1>Welcome to my AuthApp!</h1>`);
});
