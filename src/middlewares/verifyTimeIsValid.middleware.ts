import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";

export const verifyTimeIsValid = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { date, hour } = req.body;

  const dayResult = new Date(date).getDay();
  if (dayResult === 0 || dayResult === 6) {
    throw new AppError("Invalid date, work days are monday to friday", 400);
  }

  const hourResult = hour.slice(0, 2);

  if (hourResult < 8 || hourResult > 18)
    throw new AppError("Invalid hour, available times are 8AM to 18PM", 400);

  return next();
};
