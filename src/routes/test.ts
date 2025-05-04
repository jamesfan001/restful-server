import { Router, Request, Response } from "express";

const testRouter = Router();

testRouter.get("/test", (req: Request, res: Response) => {
  res
    .status(200) // Set the response status code to 200 (OK)
    .json({ message: `API: Testing!!!` });
});

testRouter.get("/test2", (req: Request, res: Response) => {
  res
    .status(200) // Set the response status code to 200 (OK)
    .json({ message: `API: Testing 2!!!` });
});

export default testRouter;