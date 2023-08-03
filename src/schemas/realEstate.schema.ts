import { z } from "zod";
import { addressCreateSchema, addressSchema } from "./address.schema";
import { categorySchema } from "./categories.schema";

const realEstateSchema = z.object({
  id: z.number().positive(),
  code: z.string().max(12),
  sold: z.boolean().default(false),
  rented: z.boolean().default(false),
  value: z.number().or(z.string()).default(0),
  size: z.number().int().positive(),
  createdAt: z.string().or(z.date()),
  updatedAt: z.string().or(z.date()),
  category: categorySchema,
  address: addressSchema,
});

const realEstateCreateSchema = realEstateSchema
  .omit({
    id: true,
    sold: true,
    createdAt: true,
    updatedAt: true,
    category: true,
    address: true,
  })
  .extend({ categoryId: z.number(), address: addressCreateSchema });

const realEstateReadSchema = realEstateSchema
  .omit({
    address: true,
    category: true,
  })
  .extend({ address: addressSchema })
  .array();

const realEstateUpdateSchema = realEstateCreateSchema
  .omit({ address: true, category: true })
  .partial();
export {
  realEstateCreateSchema,
  realEstateReadSchema,
  realEstateSchema,
  realEstateUpdateSchema,
};
