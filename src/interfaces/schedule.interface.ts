import { z } from "zod";
import { scheduleCreateSchema, scheduleSchema } from "../schemas";

type Schedule = z.infer<typeof scheduleSchema>;
type ScheduleCreate = z.infer<typeof scheduleCreateSchema>;
type ScheduleRead = Array<Schedule>;

export { Schedule, ScheduleCreate, ScheduleRead };
