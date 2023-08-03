import { Request, Response } from "express";
import { scheduleService } from "../services";

const create = async (req: Request, res: Response): Promise<Response> => {
  const payload = req.body;
  await scheduleService.create(payload);

  return res.status(201).json({ message: "Schedule created" });
};

const read = async (req: Request, res: Response): Promise<Response> => {
  const { sub } = res.locals.decoded;
  const schedules = await scheduleService.read(sub);

  return res.status(200).json(schedules);
};

export default { create, read };
