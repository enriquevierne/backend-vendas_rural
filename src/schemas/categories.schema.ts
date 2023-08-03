import { z } from "zod";
import { realEstateSchema } from "./realEstate.schema";

const categorySchema = z.object({
  id: z.number(),
  name: z.string().max(45),
});
const categoryCreateSchema = categorySchema.omit({ id: true});
const categoryReadSchema = categorySchema.array();
const categoryRetrieveResult = categorySchema.extend({
  realEstate: realEstateSchema.array()
})

export { categoryReadSchema, categorySchema, categoryCreateSchema, categoryRetrieveResult };
