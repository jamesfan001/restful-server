"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config(); // Load environment variables from .env file
// Create a new express application instance
const app = (0, express_1.default)();
app.use((0, cors_1.default)()); // Enable CORS for all routes
app.use(express_1.default.json()); // Parse JSON request bodies
app.use(express_1.default.urlencoded({ extended: true })); // Parse URL-encoded request bodies
// Set the network port
const port = process.env.PORT || 3000;
// Define the root path with a greeting message
app.get("/", (req, res) => {
    res
        .status(200) // Set the response status code to 200 (OK)
        .json({ message: `Welcome to the Express + TypeScript Server! PORT:${port}` });
});
app.get("/test", (req, res) => {
    res
        .status(200) // Set the response status code to 200 (OK)
        .json({ message: `Testing!!!` });
});
// Start the Express server
app.listen(port, () => {
    console.log(`The server is running at http://localhost:${port}`);
});
