import { z } from "zod";
import { realEstateCreateSchema, realEstateReadSchema, realEstateSchema } from "../schemas";

type RealEstate = z.infer<typeof realEstateSchema>;
type RealEstateCreate = z.infer<typeof realEstateCreateSchema>;
type RealEstateRead = z.infer<typeof realEstateReadSchema>;

export { RealEstate, RealEstateCreate, RealEstateRead };
