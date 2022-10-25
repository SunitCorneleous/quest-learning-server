const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const courses = require("./data/courses.json");
const categories = require("./data/categories.json");

// server running
app.get("/", (req, res) => {
  res.send("server running");
});

// get all courses
app.get("/courses", (req, res) => {
  res.send(courses);
});

// get single course by id
app.get("/courses/:id", (req, res) => {
  const id = req.params.id;

  const course = courses.find(course => course.id === id);

  res.send(course);
});

// get all categories
app.get("/categories", (req, res) => {
  res.send(categories);
});

// app listening
app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
