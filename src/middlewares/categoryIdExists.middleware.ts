import { NextFunction, Request, Response } from "express";
import { categoriesRepository } from "../repositories";
import { Category } from "../entities";
import { AppError } from "../errors";

export const categoryIdExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const id: number = Number(req.params.categoryId) || req.body.category;

  const foundCategory: Category | null = await categoriesRepository.findOneBy({ id });
  if (!foundCategory) throw new AppError("Category not found", 404);

  res.locals = { ...res.locals, foundCategory };
  return next();
};