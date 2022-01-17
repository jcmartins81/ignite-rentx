import CreateUserController from "./CreateUserController";
import UsersRepository from "../../repositories/implementations/UsersRepository";
import CreateUserUseCase from "./CreateUserUseCase";
import categoriesRepository from "../../../cars/repositories/implementations/CategoriesRepository";


export default (): CreateUserController => {
    const usersRepository = new UsersRepository()
    const createUserUseCase = new CreateUserUseCase(categoriesRepository)
    return new CreateUserController(createUserUseCase)
}