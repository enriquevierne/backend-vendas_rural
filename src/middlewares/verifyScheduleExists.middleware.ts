import { NextFunction, Request, Response } from "express";
import { schedulesRepository } from "../repositories";
import { AppError } from "../errors";

export const verifyScheduleExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const userId = res.locals.decoded.sub;
  const { date, hour, realEstateId } = req.body;

  const scheduleFound = await schedulesRepository
    .createQueryBuilder("sch")
    .where("sch.date = :date", { date })
    .andWhere("sch.hour = :hour", { hour })
    .andWhere("sch.realEstateId = :realEstateId", { realEstateId })
    .getOne();

  if (scheduleFound) {
    throw new AppError(
      "Schedule to this real estate at this date and time already exists",
      409
    );
  }

  const userSchedules = await schedulesRepository
  .createQueryBuilder("sch")
  .where("sch.date = :date", { date })
  .andWhere("sch.hour = :hour", { hour })
  .andWhere("sch.userId = :userId", { userId })
  .getOne();

  if (userSchedules) {
    throw new AppError(
      "User schedule to this real estate at this date and time already exists",
      409
    );
  }
  return next();
};
