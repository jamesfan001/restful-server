"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var dotenv_1 = require("dotenv");
var cors_1 = require("cors");
dotenv_1.default.config(); // Load environment variables from .env file
// Create a new express application instance
var app = (0, express_1.default)();
app.use((0, cors_1.default)()); // Enable CORS for all routes
app.use(express_1.default.json()); // Parse JSON request bodies
app.use(express_1.default.urlencoded({ extended: true })); // Parse URL-encoded request bodies
// Set the network port
var port = process.env.PORT || 3000;
// Define the root path with a greeting message
app.get("/", function (req, res) {
    res
        .status(200) // Set the response status code to 200 (OK)
        .json({ message: "Welcome to the Express + TypeScript Server! PORT:".concat(port) });
});
app.get("/test", function (req, res) {
    res
        .status(200) // Set the response status code to 200 (OK)
        .json({ message: "Testing!!!" });
});
// Start the Express server
app.listen(port, function () {
    console.log("The server is running at http://localhost:".concat(port));
});
