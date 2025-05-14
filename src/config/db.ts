import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors"; // Import colors for colored console output

dotenv.config(); // Load environment variables from .env file

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URI || ""; // Get MongoDB URI from environment variables

    if (!mongoURI) {
      throw new Error("MongoDB URI is not defined in environment variables");
    }

    const conn = await mongoose.connect(mongoURI, {
      // Optional: Add any additional options you need for your connection
    });
    console.log(
      colors.cyan.underline(`MongoDB Connected: ${conn.connection.host}`)
    ); // Log success message in green
  } catch (error) {
    console.error(colors.yellow(""+error)); // Log the error message
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
