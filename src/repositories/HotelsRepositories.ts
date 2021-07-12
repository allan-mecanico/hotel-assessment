import { EntityRepository, Repository } from "typeorm"
import { Hotel } from "../entities/Hotel";

@EntityRepository(Hotel)
class HotelsRepositories extends Repository<Hotel>{}


export { HotelsRepositories }