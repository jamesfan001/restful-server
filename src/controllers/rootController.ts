import { Request, Response } from "express";

export const getRootMessage = (req: Request, res: Response) => {
  res.status(200).json({ message: `API/CONTROLER: H E L L O  A G A I N  W O R L D !!!!!` });
};