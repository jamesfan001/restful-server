import { Request, Response } from "express";

export const getTestMessage = (req: Request, res: Response) => {
  res.status(200).json({ message: `API/CONTROLER: Testing1!!!` });
};

export const getTest2Message = (req: Request, res: Response) => {
  res.status(200).json({ message: `API/CONTROLER: Testing 2!!!` });
};