import { Router, response } from "express";
import middlewares from "../middlewares";
import { realEstateCreateSchema } from "../schemas";
import { realEstateController } from "../controllers";

const realEstateRoute: Router = Router();

realEstateRoute.post(
  "",
  middlewares.verifyToken,
  middlewares.isAdmin,
  middlewares.validateBody(realEstateCreateSchema),
  middlewares.uniqueAddress,
  middlewares.categoryIdExists,
  realEstateController.create
);
realEstateRoute.get("", realEstateController.read);

export default realEstateRoute;
