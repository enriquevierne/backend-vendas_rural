import { Router } from "express";
import middlewares from "../middlewares";
import { scheduleController } from "../controllers";
import { scheduleCreateSchema } from "../schemas";

const schedulesRoute: Router = Router();

schedulesRoute.post(
  "",
  middlewares.verifyToken,
  middlewares.validateBody(scheduleCreateSchema),
  middlewares.verifyRealEstateIdExists,
  middlewares.verifyTimeIsValid,
  middlewares.verifyScheduleExists,
  scheduleController.create
);
schedulesRoute.get(
  "/realEstate/:realEstateId",
  middlewares.verifyToken,
  middlewares.isAdmin,
  middlewares.verifyRealEstateIdExists,
  scheduleController.read
);

export default schedulesRoute;
