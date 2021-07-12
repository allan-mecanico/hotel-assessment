import { HotelsRepositories } from "../repositories/HotelsRepositories";
import { getCustomRepository } from "typeorm";

interface IHotelRequest {
	name: string;
  email: string;
  address: string;
  assessment: string;

}

class CreateHotelService {

  async execute({ name, email, assessment, address} : IHotelRequest) {
    const hotelsRepository = getCustomRepository(HotelsRepositories);

    if(!email) {
      throw new Error("Email incorrect");
    }

    const hotelAlreadyExists = await hotelsRepository.findOne({ 
      email
    });


  if(hotelAlreadyExists) {
    throw new Error("Hotel already exists");
  }


  const hotel = hotelsRepository.create({
     name,
     email,
     assessment,
     address

  });

  await hotelsRepository.save(hotel);

  return hotel;

  }
}

export { CreateHotelService };
