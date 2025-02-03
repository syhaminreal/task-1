const express = require("express");
const { createPost, getAllPosts } = require("../controllers/postController");
const protect = require("../middlewares/authMiddleware"); // Protect routes using authentication middleware
const router = express.Router();

// Route to create a post (requires authentication)
router.post("/", protect, createPost);

// Route to get all posts (public or authenticated, depending on your use case)
router.get("/", getAllPosts);

module.exports = router;
