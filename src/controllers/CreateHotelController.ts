import { Request, Response } from "express";
import { CreateHotelService } from "../services/CreateHotelService";


class CreateHotelController {

	async handle(request: Request, response: Response) {
		const { name, email, assessment, address } = request.body;

		const createHotelService = new CreateHotelService();
		
		const hotel = await createHotelService.execute({
			name,
			email,
			assessment,
			address
		});

		
		return response.json(hotel);
	}
}

export { CreateHotelController }

