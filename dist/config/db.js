"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const colors_1 = __importDefault(require("colors")); // Import colors for colored console output
dotenv_1.default.config(); // Load environment variables from .env file
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const mongoURI = process.env.MONGO_URI || ""; // Get MongoDB URI from environment variables
        if (!mongoURI) {
            throw new Error("MongoDB URI is not defined in environment variables");
        }
        const conn = yield mongoose_1.default.connect(mongoURI, {
        // Optional: Add any additional options you need for your connection
        });
        console.log(colors_1.default.cyan.underline(`MongoDB Connected: ${conn.connection.host}`)); // Log success message in green
    }
    catch (error) {
        console.error(colors_1.default.yellow("" + error)); // Log the error message
        process.exit(1); // Exit process with failure
    }
});
exports.default = connectDB;
