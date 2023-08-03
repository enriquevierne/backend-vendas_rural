import { z } from "zod";
import { addressCreateSchema, addressSchema } from "../schemas";

type Address = z.infer<typeof addressSchema>
type AddressCreate = z.infer<typeof addressCreateSchema>
type AddressRead = Array<Address>

export {
  Address, AddressCreate, AddressRead
}