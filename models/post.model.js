const mongoose = require('mongoose');

// Define the Post schema
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true, // Removes any leading or trailing spaces
    },
    content: {
        type: String,
        required: true,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the User model (assumes you have a User model for authors)
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now, // Automatically sets the current date/time when the post is created
    },
    updatedAt: {
        type: Date,
        default: Date.now, // Automatically sets the current date/time when the post is created
    },
});

// Optionally, you can add a "timestamps" option to automatically track createdAt and updatedAt fields
// postSchema.set('timestamps', true);

// Create the Post model based on the schema
const Post = mongoose.model('Post', postSchema);

module.exports = Post;
