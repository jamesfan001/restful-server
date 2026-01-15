// import rootRouter from "./routes/root";
// import testRouter from "./routes/test";
import { Router } from "express";
import userRoutes from "./routes/userRoutes"; // Import user routes
const router = Router();

router.use("/users", userRoutes); // Use the user routes for all requests to /api/users{

router.get("/test", (req, res) => {
  res.status(200).json({ message: "**** O N L I N E ****" });
  // res.status(200).json({ message: "API server is still working!!!!" })
});

export default router;
// This file serves as the main router for the application, combining all route modules into a single router.
// It imports the root and test routers and uses them to define the application's routes.

// // Use the separated route files

// router.use("/", rootRouter);
// router.use("/", testRouter);
// router.get("/mongoose", (req, res) => {
//   res.status(200).json({ message: `API/CONTROLER: mongoose test` });
// });

// router.get("/random.text", (req, res) => {
//   res.status(200).json({ message: `API/CONTROLER: RANDOM.TEXT test` });
// });
// router.get("/goals", async (req, res) => {
//   try {
//     const goals = await Goal.find(); // Fetch all goals from the database
//     res.status(200).json(goals);
//   } catch (error) {
//     console.error("Error fetching goals:", error);
//     res.status(500).json({ message: "Failed to fetch goals" });
//   }
// });
