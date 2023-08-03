import { z } from "zod";
import { userSchema } from "./users.schema";

const sessionSchema = userSchema.pick({email: true, password: true});

export { sessionSchema };
