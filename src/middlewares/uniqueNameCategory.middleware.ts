import { NextFunction, Request, Response } from "express";
import { categoriesRepository, usersRepository } from "../repositories";
import { AppError } from "../errors";
import { Category } from "../entities";

export const uniqueNameCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const name: string = req.body.name

  const foundName: Category | null = await categoriesRepository.findOneBy({ name });
  if (foundName) throw new AppError("Category already exists", 409);

  return next();
};