const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 3000;

// Load the data from data.json
const data = require("./data.json");

// Enable CORS for all routes
app.use(cors());

// Parse JSON data in the request body
app.use(bodyParser.json());

// Route to get the data in JSON format
app.get("/", (req, res) => {
  res.send("<h3>Welcome to my api [!!!] Api running on port " + PORT + "</h3>");
});
app.get("/api", (req, res) => {
  res.json(data);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
