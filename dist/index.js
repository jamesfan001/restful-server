"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const db_1 = __importDefault(require("./config/db"));
const routes_1 = __importDefault(require("./routes")); // Import the router module
const errorMiddleware_1 = require("./middleware/errorMiddleware"); // Import the error handler middleware
dotenv_1.default.config(); // Load environment variables from .env file
(0, db_1.default)(); // Connect to MongoDB
// Create an Express application
const app = (0, express_1.default)();
app.use((0, cors_1.default)()); // Enable CORS for all routes
app.use(express_1.default.json()); // Parse JSON request bodies
app.use(express_1.default.urlencoded({ extended: true })); // Parse URL-encoded request bodies
app.use('/api', routes_1.default);
//Ensure the error handler is placed after all routes and other middleware:
app.use(errorMiddleware_1.errorHandler); // Use the error handler middleware
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
