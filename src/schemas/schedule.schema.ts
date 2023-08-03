import { z } from "zod";

const scheduleSchema = z.object({
  id: z.number().positive(),
  date: z.string(),
  hour: z.string(),
  realEstateId: z.number().int().positive(),
  userId: z.number().int().positive().nullable(),
});

const scheduleCreateSchema = scheduleSchema.omit({
  id: true,
  userId: true,
});

const scheduleReadSchema = scheduleSchema.array()

export { scheduleCreateSchema, scheduleSchema, scheduleReadSchema };
