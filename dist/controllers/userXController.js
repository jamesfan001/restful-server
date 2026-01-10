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
exports.deleteUser = exports.updateUser = exports.getProfile = exports.loginUser = exports.registerUser = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const userXModel_1 = __importDefault(require("../models/userXModel"));
// @desc    Delete user
// @route   DELETE /api/users/profile/delete
// @access  Public
const deleteUser = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.body.userId; // Get userId from request body
    if (!userId) {
        res.status(400);
        throw new Error("User ID is required");
    }
    // Find user by ID
    const user = yield userXModel_1.default.findById(userId);
    if (!user) {
        res.status(404);
        throw new Error("User not found");
    }
    // Delete user
    yield userXModel_1.default.findByIdAndDelete(userId);
    res.status(200).json({ message: "User deleted successfully" });
}));
exports.deleteUser = deleteUser;
// @desc    Update user
// @route   PUT /api/users/profile/update
// @access  Public
const updateUser = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, remarks, userId } = req.body;
    if (!name || !email || !remarks) {
        res.status(400);
        throw new Error("Please add all fields");
    }
    const user = yield userXModel_1.default.findById(userId);
    if (!user) {
        res.status(404);
        throw new Error(`User not found userId: ${userId}`);
    }
    const updatedUser = yield userXModel_1.default.findByIdAndUpdate(userId, req.body, { new: true } // Return the updated user
    );
    if (!updatedUser) {
        res.status(404);
        throw new Error("Update failed");
    }
    res.status(200).json({ name, email, remarks });
}));
exports.updateUser = updateUser;
// @desc    Register new user
// @route   POST /api/users
// @access  Public
const registerUser = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        res.status(400);
        throw new Error("Please add all fields");
    }
    // Check if user exists
    const userExists = yield userXModel_1.default.findOne({ email });
    if (userExists) {
        res.status(400);
        throw new Error("User already exists");
    }
    // Hash password
    const salt = yield bcryptjs_1.default.genSalt(10);
    const hashedPassword = yield bcryptjs_1.default.hash(password, salt);
    // Create user
    const user = yield userXModel_1.default.create({
        name,
        email,
        remarks: "New user created",
        password: hashedPassword,
    });
    if (user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            remarks: user.remarks,
        });
    }
    else {
        res.status(400);
        throw new Error("Invalid user data");
    }
}));
exports.registerUser = registerUser;
// @desc    Authenticate a user
// @route   POST /api/users/login
// @access  Public
const loginUser = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    // Check for user email
    const user = yield userXModel_1.default.findOne({ email });
    if (user && (yield bcryptjs_1.default.compare(password, user.password))) {
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        });
    }
    else {
        res.status(400);
        throw new Error("Unauthorized");
    }
}));
exports.loginUser = loginUser;
// @desc    Get user profile
// @route   GET /api/users/profile/:id
// @access  Private
const getProfile = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params.id;
    // Find user by ID
    const user = yield userXModel_1.default.findById(userId).select("-password"); // Exclude password from the response
    if (user) {
        res.status(200).json(user);
    }
    else {
        res.status(404);
        throw new Error("User not found");
    }
}));
exports.getProfile = getProfile;
// Generate JWT
const generateToken = (id) => {
    return jsonwebtoken_1.default.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: "30d",
    });
};
// export default { registerUser, loginUser, getProfile, updateUser, deleteUser };
