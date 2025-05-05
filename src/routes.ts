import rootRouter from "./routes/root";
import testRouter from "./routes/test";
import { Router } from "express";

const router = Router();

// Use the separated route files
router.use("/", rootRouter);
router.use("/", testRouter);
router.get("/mongoose", (req, res) => {
  res.status(200).json({ message: `API/CONTROLER: mongoose test` });    
})

export default router;
// This file serves as the main router for the application, combining all route modules into a single router.
// It imports the root and test routers and uses them to define the application's routes.
