import { User } from "../entities";
import { UserCreate, UserRead, UserReturn, UserUpdate } from "../interfaces";
import { usersRepository } from "../repositories";
import { userReadSchema, userReturnSchema } from "../schemas";

const create = async (payload: UserCreate): Promise<UserReturn> => {
  const user: User = usersRepository.create(payload);
  await usersRepository.save(user);

  return userReturnSchema.parse(user);
};

const read = async (): Promise<UserRead> => {
  return userReadSchema.parse(await usersRepository.find());
};

const update = async (user: User, payload: UserUpdate): Promise<UserReturn> => {
  const userUpdated: User = usersRepository.create({...user, ...payload});
  await usersRepository.save(userUpdated);

  return userReturnSchema.parse(userUpdated)
};

const destroy = async (user: User): Promise<void> => {
  await usersRepository.softRemove(user);
};

export default { create, read, update, destroy };
