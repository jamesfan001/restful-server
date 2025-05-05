import express, {Router, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes";


dotenv.config(); // Load environment variables from .env file

// Create a new express application instance
const app = express();

app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded request bodies

// Set the network port
const port = process.env.PORT || 3000;

app.use('/api',router)

// Start the Express server
app.listen(port, () => {
  console.log(`The server is running at http://localhost:${port}`);
});
