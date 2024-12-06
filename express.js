const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
const port = 3000;

// Enable CORS
app.use(cors());

// Serve static files (HTML, CSS, JS)
app.use(express.static("public"));

// API to serve hero section data
app.get("/api/hero", (req, res) => {
  fs.readFile("./hero.json", "utf-8", (err, data) => {
    if (err) {
      res.status(500).send("Error loading hero data");
    } else {
      res.send(JSON.parse(data));
    }
  });
});

// API to serve menu section data
app.get("/api/menu", (req, res) => {
  fs.readFile("./menu.json", "utf-8", (err, data) => {
    if (err) {
      res.status(500).send("Error loading menu data");
    } else {
      res.send(JSON.parse(data));
    }
  });
});

// API to serve footer section data
app.get("/api/footer", (req, res) => {
  fs.readFile("./footer.json", "utf-8", (err, data) => {
    if (err) {
      res.status(500).send("Error loading footer data");
    } else {
      res.send(JSON.parse(data));
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
