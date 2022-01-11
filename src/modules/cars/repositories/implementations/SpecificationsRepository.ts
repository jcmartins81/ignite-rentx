import {ICreateSpecificationDTO, ISpecificationRepository} from "../ISpecificationsRepository";
import Specification from "../../entities/Specification";
import {getRepository, Repository} from "typeorm";

class SpecificationsRepository implements ISpecificationRepository{

    private repository: Repository<Specification>

    private static INSTANCE: SpecificationsRepository

    private constructor() {
        this.repository = getRepository(Specification)
    }

    public static getInstance(): SpecificationsRepository {
        if(!SpecificationsRepository.INSTANCE) SpecificationsRepository.INSTANCE = new SpecificationsRepository()
        return SpecificationsRepository.INSTANCE
    }

    async create({name, description}: ICreateSpecificationDTO): Promise<void> {
        const specification = this.repository.create({
            name,
            description
        })

        await this.repository.save(specification)

    }

    async findByName(name: string): Promise<Specification> {
        return this.repository.findOne({
            name
        })

    }
}

export default SpecificationsRepository