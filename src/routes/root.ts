import { Router, Request, Response } from "express";

const rootRouter = Router();

// Define the root path with a greeting message
rootRouter.get("/", (req: Request, res: Response) => {
  res
    .status(200) // Set the response status code to 200 (OK)
    .json({ message: `API: H E L L O  A G A I N  W O R L D !!!!!` });
});

export default rootRouter;