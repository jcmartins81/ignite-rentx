import CategoriesRepository from "../../../repositories/implementations/CategoriesRepository";
import CreateCategoryUseCase from "./CreateCategoryUseCase";
import CreateCategoryController from "./CreateCategoryController";

export default (): CreateCategoryController => {
    const categoriesRepository = new CategoriesRepository();
    const createCategoryUSeCase = new CreateCategoryUseCase(categoriesRepository)
    return new CreateCategoryController(createCategoryUSeCase)
}



