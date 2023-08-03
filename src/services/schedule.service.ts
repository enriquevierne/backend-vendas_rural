import { AppError } from "../errors";
import { realEstatesRepository, schedulesRepository } from "../repositories";

const create = async (payload: any): Promise<any> => {
  const schedule = schedulesRepository.create(payload);
  await schedulesRepository.save(schedule);
  return schedule;
};

const read = async (realEstateId: number): Promise<any> => {
  const scheduleResult = await realEstatesRepository.findOne({
    where: {id: realEstateId},
    relations: { schedules: {user: true}, address: true, category: true}
  });
  if(!scheduleResult) {
    throw new AppError("RealEstate not found", 404)
  }
  return scheduleResult
};

export default { create, read };
