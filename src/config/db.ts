import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URI || ""; // Get MongoDB URI from environment variables

    if (!mongoURI) {
      throw new Error("MongoDB URI is not defined in environment variables");
    }

    await mongoose.connect(mongoURI, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });

    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB: "+error); // Log the error message
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;

