import { Router } from "express";
import { getTestMessage, getTest2Message } from "../controllers/testController";

const userRouter = Router();

userRouter.get("/user", 
  (req, res) => {
    res.status(200).json({ message: `API/CONTROLER: user test` });
  }
);



export default userRouter;