import { z } from "zod";

const addressSchema = z.object({
  id: z.number().positive(),
  street: z.string().max(45),
  complement: z.string().max(45),
  reference: z.string().max(45),
  zipCode: z.string().max(8),
  number: z.string().max(7).or(z.null().optional()),
  city: z.string().max(20),
  state: z.string().max(2)
});

const addressCreateSchema = addressSchema.omit({id:true})
const addressReadSchema = addressSchema.array()

export {addressCreateSchema, addressReadSchema, addressSchema }