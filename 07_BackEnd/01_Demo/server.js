// Instantiate Express and App
const express = require("express");
const app = express();
const PORT = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Start the server and listen on port 3000
app.listen(PORT, () => {
  console.log("Server started at port no 3000");
});

// Route: GET request at "/" — responds with a simple message
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Route: POST request at "/users/user1"
// Expects JSON body with 'id' and 'name' keys
app.post("/users/user1", (req, res) => {
  const { id, name } = req.body; // Destructure data from request body
  console.log(id);
  console.log(name);
  res.send("Post Request Succeeded!"); // Send response back to client
});

// Import mongoose to connect to MongoDB
const mongoose = require("mongoose");

// Connect to MongoDB database named 'myDB' running locally
mongoose
  .connect("mongodb://localhost:27017/myDB")
  .then(() => {
    console.log("DB Connected!");
  })
  .catch(() => {
    console.log("error");
  });
