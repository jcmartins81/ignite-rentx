import CategoriesRepository from "../../../repositories/implementations/CategoriesRepository";
import {ICategoriesRepository} from "../../../repositories/ICategoriesRepository";
import {AppError} from "../../../../../errors/AppError";

interface IRequest {
    name: string;
    description: string
}

class CreateCategoryUseCase {

    constructor(private categoriesRepository: ICategoriesRepository) { }

    async execute({name, description}: IRequest): Promise<void> {
        const categoryAlreadyExists = await this.categoriesRepository.findByName(name)

        if(categoryAlreadyExists) throw  new  AppError("Category already exists!", 400)

        await this.categoriesRepository.create({name, description})
    }
}

export default CreateCategoryUseCase