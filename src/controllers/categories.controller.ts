import { Request, Response } from "express";
import { Category } from "../entities";
import { categoriesService } from "../services";
import { CategoryRead } from "../interfaces";

const create = async (req: Request, res: Response): Promise<Response> => {
  const category: Category = await categoriesService.create(req.body);

  return res.status(201).json(category);
};

const read = async (req: Request, res: Response): Promise<Response> => {
  const categories: CategoryRead = await categoriesService.read();

  return res.status(200).json(categories);
};

const retrieve = async (req: Request, res: Response): Promise<Response> => {
  const categories: Category = await categoriesService.retrieve(
    Number(res.locals.foundCategory.id)
  );

  return res.status(200).json(categories);
};

export default { create, read, retrieve };
