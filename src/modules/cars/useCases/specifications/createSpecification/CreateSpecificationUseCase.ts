import {ISpecificationRepository} from "../../../repositories/ISpecificationsRepository";
import {AppError} from "../../../../../errors/AppError";

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationUseCase {

    constructor(private specificationsRepository: ISpecificationRepository) {
    }

    async execute({name, description}: IRequest): Promise<void> {
        const specificationAlreadyExists = await this.specificationsRepository.findByName(name)
        if(specificationAlreadyExists) throw new AppError("Specification already exists!", 400)

        await this.specificationsRepository.create({
            name,
            description
        })
    }
}

export default CreateSpecificationUseCase