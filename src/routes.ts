import rootRouter from "./routes/root";
import testRouter from "./routes/test";
import { Router } from "express";

const router = Router();

// Use the separated route files
router.use("/", rootRouter);
router.use("/", testRouter);

export default router;