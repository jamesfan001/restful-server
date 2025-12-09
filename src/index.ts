
import express, {Router, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db";
import router from "./routes"; // Import the router module
import { errorHandler } from "./middleware/errorMiddleware"; // Import the error handler middleware

dotenv.config(); // Load environment variables from .env file

connectDB();// Connect to MongoDB

// Create an Express application
const app = express(); 

app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded request bodies
app.use('/api',router)

//Ensure the error handler is placed after all routes and other middleware:
app.use(errorHandler); // Use the error handler middleware

// app.get("/api", (req, res) => {
//   res.status(200).json({ message: "API server is working!!!!" })
//   });

// app.use('/api/goals', require('./routes/goalRoutes'));
// app.use('/api/users', require('./routes/userRoutes'));
 

// Set the network port
const port = process.env.PORT || 3000;

// app.use('/api',router)
// app.use('/api/users', require('./routes/userRoutes'));

// Start the Express server
app.listen(port, () => {
  console.log(`The server is running at http://localhost:${port}`);
});
