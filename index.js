const express = require("express");
const app = express();
const postRoutes = require("./routes/post"); // Import the post routes

app.use(express.json());

// Use the post routes under the /api/posts endpoint
app.use("/api/posts", postRoutes);

// Other routes and configurations...

app.listen(3000, () => {
  console.log("Server is running on PORT 3000...");
});
