import { z } from "zod";
import { categoryCreateSchema, categoryRetrieveResult, categorySchema } from "../schemas";

type Category = z.infer<typeof categorySchema>;
type CategoryCreate = z.infer<typeof categoryCreateSchema>;
type CategoryRetrieveResult = z.infer<typeof categoryRetrieveResult>;
type CategoryRead = Array<Category>;


export { Category, CategoryRead, CategoryCreate, CategoryRetrieveResult };
