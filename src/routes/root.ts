import { Router } from "express";
import { getRootMessage } from "../controllers/rootController";

const rootRouter = Router();

// Define the root path with a greeting message
rootRouter.get("/", getRootMessage);

export default rootRouter;