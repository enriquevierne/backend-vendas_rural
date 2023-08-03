import { Router } from "express";
import middlewares from "../middlewares";
import { categoryCreateSchema } from "../schemas";
import { categoriesController } from "../controllers";

const categoriesRoute: Router = Router();

categoriesRoute.post(
  "",
  middlewares.verifyToken,
  middlewares.isAdmin,
  middlewares.validateBody(categoryCreateSchema),
  middlewares.uniqueNameCategory,
  categoriesController.create
);
categoriesRoute.get("", categoriesController.read);
categoriesRoute.get("/:categoryId/realEstate",middlewares.categoryIdExists, categoriesController.retrieve);

export default categoriesRoute;
