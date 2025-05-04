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
//app.use('/api', require()); // Use the router for API routes

// Define the root path with a greeting message
app.get("/", (req: Request, res: Response) => {
  res
    .status(200) // Set the response status code to 200 (OK)
    // .json({ message: `Welcome to the Express + TypeScript Server! PORT:${port}` });
    .json({ message: `H E L L O   W O R L D !!!!!` });
});

app.get("/test", (req: Request, res: Response) => {
  res
    .status(200) // Set the response status code to 200 (OK)
    .json({ message: `Testing!!!` });
});

app.get("/test2", (req: Request, res: Response) => {
  res
    .status(200) // Set the response status code to 200 (OK)
    .json({ message: `Testing 2!!!` });
});

// Start the Express server
app.listen(port, () => {
  console.log(`The server is running at http://localhost:${port}`);
});
