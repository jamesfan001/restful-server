import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import asyncHandler from "express-async-handler";
import { Request, Response } from "express";
import User from "../models/userXModel";

interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    name: string;
    email: string;
    remarks?: string;
  };
}

// @desc    Delete user
// @route   DELETE /api/users/profile/delete
// @access  Public

const deleteUser = asyncHandler(
  async (req: Request, res: Response): Promise<void> => { 
    const userId = req.body.userId; // Get userId from request body
    if (!userId) {
      res.status(400);
      throw new Error("User ID is required");
    }

    // Find user by ID
    const user = await User.findById(userId);
    if (!user) {    
      res.status(404);
      throw new Error("User not found");
    }
    // Delete user
    await User.findByIdAndDelete(userId);
    res.status(200).json({ message: "User deleted successfully" });
  } 
);

// @desc    Update user
// @route   PUT /api/users/profile/update
// @access  Public
const updateUser = asyncHandler(
  async (req,res): Promise<void> => {
    const { name, email, remarks, userId } = req.body;
    if (!name || !email || !remarks) {
      res.status(400);
      throw new Error("Please add all fields");
    }

    const user = await User.findById(userId);
    if (!user) {
      res.status(404);
      throw new Error(`User not found userId: ${userId}`);
    }

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      req.body,{ new: true } // Return the updated user
    );

    if (!updatedUser) {
      res.status(404);
      throw new Error("Update failed");
    }
    res.status(200).json( { name, email, remarks },
    );
} );

// @desc    Register new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      res.status(400);
      throw new Error("Please add all fields");
    }

    // Check if user exists
    const userExists = await User.findOne({ email });

    if (userExists) {
      res.status(400);
      throw new Error("User already exists");
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const user = await User.create({
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
    } else {
      res.status(400);
      throw new Error("Invalid user data");
    }
  }
);

// @desc    Authenticate a user
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(
  async (req: AuthenticatedRequest, res: Response): Promise<void> => {
    const { email, password } = req.body;

    // Check for user email
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      res.json({
        _id: user.id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      });
    } else {
      res.status(400);
      throw new Error("Unauthorized");
    }
  }
);

// @desc    Get user profile
// @route   GET /api/users/profile/:id
// @access  Private
const getProfile = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const userId = req.params.id;

    // Find user by ID
    const user = await User.findById(userId).select("-password"); // Exclude password from the response

    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404);
      throw new Error("User not found");
    }
  }
);

// Generate JWT
const generateToken = (id: string): string => {
  return jwt.sign({ id }, process.env.JWT_SECRET as string, {
    expiresIn: "30d",
  });
};

export { registerUser, loginUser, getProfile, updateUser, deleteUser };
// export default { registerUser, loginUser, getProfile, updateUser, deleteUser };
