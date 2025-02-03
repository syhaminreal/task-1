const Post = require("../models/Post");

const createPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const userId = req.user.id; // Get the user ID from the JWT (assuming user is authenticated)

    // Create a new post
    const newPost = new Post({
      title,
      content,
      author: userId, // Link the post to the user who created it
    });

    // Save the post to the database
    await newPost.save();

    res.status(201).json({
      message: "Post created successfully!",
      post: newPost,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating the post",
      error: error.message,
    });
  }
};

module.exports = { createPost };
