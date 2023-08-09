const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs"); // Import the fs module
const app = express();
const PORT = process.env.PORT || 3000;

// Load the data from data.json
const data = require("./data.json");

// Enable CORS for all routes
app.use(cors());

// Parse JSON data in the request body
app.use(bodyParser.json());

// Route to get the data in JSON format
app.get("/info", (req, res) => {
  res.send("<h3>Welcome to my api [!!!] Api running on port " + PORT + "</h3>");
});
app.get("/", (req, res) => {
  res.json(data);
});
// POST endpoint
// POST endpoint to add data
app.post("/add", (req, res) => {
  const newData = req.body;
  data.push(newData); // Append new data to the existing data array
  fs.writeFileSync("./data.json", JSON.stringify(data, null, 2));
  res.json({ message: "Data added successfully!" });
});
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
