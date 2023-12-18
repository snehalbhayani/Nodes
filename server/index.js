const path = require("path");
const express = require("express");
const app = express(); // create express app

// add middlewares
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("../app_1/public"));

// start express server on port 5000
app.listen(8080, () => {
  console.log("server started on port 8080");
});