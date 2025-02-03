const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Register route
router.post("/register", async (req, res) => {
  // Register logic here
});

// Login route
router.post("/login", async (req, res) => {
  // Login logic here
});

module.exports = router;
