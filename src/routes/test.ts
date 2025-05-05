import { Router } from "express";
import { getTestMessage, getTest2Message } from "../controllers/testController";

const testRouter = Router();

testRouter.get("/test", getTestMessage);

testRouter.get("/test2", getTest2Message);

export default testRouter;