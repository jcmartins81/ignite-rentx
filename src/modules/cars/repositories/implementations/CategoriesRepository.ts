import Category from "../../entities/Category";
import {ICategoriesRepository, ICreateCategoryDTO} from "../ICategoriesRepository";
import {getRepository, Repository} from "typeorm"

class CategoriesRepository implements ICategoriesRepository{
    private repository: Repository<Category>
    private static INSTANCE: CategoriesRepository

    private constructor() {
        this.repository = getRepository("categories")
    }

    public static getInstance(): CategoriesRepository {
        if(!CategoriesRepository.INSTANCE) CategoriesRepository.INSTANCE = new CategoriesRepository()
        return CategoriesRepository.INSTANCE
    }

    async create({name, description}:ICreateCategoryDTO): Promise<void> {
        const category = this.repository.create({
            description,
            name
        })
        await this.repository.save(category)
    }

    async list(): Promise<Category[]> {
        return await this.repository.find()
    }

    async findByName(name: string): Promise<Category> {
        return await this.repository.findOne({name})
    }
}

export default CategoriesRepository