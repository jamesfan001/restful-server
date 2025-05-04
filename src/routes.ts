import { Router, Request, Response } from "express";

const router = Router();

// Define the root path with a greeting message
router.get("/", (req: Request, res: Response) => {
  res
    .status(200) // Set the response status code to 200 (OK)
    .json({ message: `H E L L O  A G A I N  W O R L D !!!!!` });
});

router.get("/test", (req: Request, res: Response) => {
  res
    .status(200) // Set the response status code to 200 (OK)
    .json({ message: `Testing!!!` });
});

router.get("/test2", (req: Request, res: Response) => {
  res
    .status(200) // Set the response status code to 200 (OK)
    .json({ message: `Testing 2!!!` });
});

export default router;