import CreateCategoryUseCase from "./CreateCategoryUseCase";
import {CategoriesRepositoryInMemory} from "../../../repositories/in_memory/CategoriesRepositoryInMemory";

import category from "../../../entities/Category";
import {AppError} from "../../../../../errors/AppError";

let createCategoryUseCase: CreateCategoryUseCase
let categoriesRepositoryInMemory: CategoriesRepositoryInMemory

describe("Create Category", () => {

    beforeEach(() => {
        categoriesRepositoryInMemory = new CategoriesRepositoryInMemory()
        createCategoryUseCase = new CreateCategoryUseCase(categoriesRepositoryInMemory)

    })

    it("should be able to create a new category", async () => {
        const category = {
            name: "test",
            description: "test desc"
        }
        await createCategoryUseCase.execute({ name: category.name, description: category.description,})
        const result = await categoriesRepositoryInMemory.findByName(category.name)

        expect(result).toHaveProperty("id")

    })

    it("should be able to create a new category with name exists", async () => {
        const category = {
            name: "test",
            description: "test desc"
        }
        await createCategoryUseCase.execute({ name: category.name, description: category.description,})


        await expect(async () => {
            await createCategoryUseCase.execute({ name: category.name, description: category.description,})
            await createCategoryUseCase.execute({ name: category.name, description: category.description,})
        }).rejects.toBeInstanceOf(AppError)
    })
})