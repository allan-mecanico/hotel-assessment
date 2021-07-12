import { Router } from "express";
import { CreateHotelController } from "./controllers/CreateHotelController";

const router = Router();

const createHotelController = new CreateHotelController();

router.post("/hotels", createHotelController.handle);


export { router };


