import CreateUserController from "./CreateUserController";
import UsersRepository from "../../repositories/implementations/UsersRepository";
import CreateUserUseCase from "./CreateUserUseCase";


export default (): CreateUserController => {
    const usersRepository = new UsersRepository()
    const createUserUseCase = new CreateUserUseCase(usersRepository)
    return new CreateUserController(createUserUseCase)
}