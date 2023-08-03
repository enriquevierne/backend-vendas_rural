import { NextFunction, Request, Response } from "express";
import { realEstatesRepository } from "../repositories";
import { RealEstate } from "../entities";
import { AppError } from "../errors";

export const verifyRealEstateIdExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const id: number = Number(req.params.realEstateId) || req.body.realEstateId;

  const foundRealEstate: RealEstate | null = await realEstatesRepository.findOneBy({ id });
  if (!foundRealEstate) throw new AppError("RealEstate not found", 404);

  res.locals = { ...res.locals, foundRealEstate };
  return next();
};