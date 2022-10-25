const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const courses = require("./data/courses.json");

// server running
app.get("/", (req, res) => {
  res.send("server running");
});

// get all courses
app.get("/courses", (req, res) => {
  res.send(courses);
});

// app listening
app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
