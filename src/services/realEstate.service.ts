import { RealEstate } from "../entities";
import { RealEstateCreate } from "../interfaces";
import {
  addressRepository,
  categoriesRepository,
  realEstatesRepository,
} from "../repositories";

const create = async (payload: RealEstateCreate): Promise<any> => {
  const { address, categoryId, ...body } = payload;
  const foundAddress = addressRepository.create(address);
  await addressRepository.save(foundAddress);

  const foundCategory: any = await categoriesRepository.findOneBy({
    id: Number(categoryId),
  });
  
  const realEstate: RealEstate = realEstatesRepository.create({
    ...body,
    address: foundAddress,
    category: foundCategory,
  });
  await realEstatesRepository.save(realEstate);

  return realEstate;
};

const read = async (): Promise<any> => {
  const realEstate = await realEstatesRepository.find({
    relations: {
      address: true,
    },
  });

  return realEstate;
};

export default { create, read };
