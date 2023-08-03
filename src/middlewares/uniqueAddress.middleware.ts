import { NextFunction, Request, Response } from "express";
import { addressRepository } from "../repositories";
import { Address } from "../entities";
import { AppError } from "../errors";

export const uniqueAddress = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const address = req.body.address;
  if (!address) next();

  const foundAddress: Address | null = await addressRepository.findOneBy(
    address
  );
  if (foundAddress) throw new AppError("Address already exists", 409);
  return next();
};
