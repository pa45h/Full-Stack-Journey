const express = require("express");
const app = express();
const PORT = 3000;
app.use(express.json());

app.listen(PORT, () => {
  console.log("Server started at port no 3000");
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/users/user1", (req, res) => {
  const { id, name } = req.body;
  console.log(id);
  console.log(name);
  res.send("Post Request Succeeded!");
});

const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/myDB")
  .then(() => {
    console.log("DB Connected!");
  })
  .catch(() => {
    console.log("error");
  });
