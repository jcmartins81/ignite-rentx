import IUserRepository from "../../repositories/IUserRepository";
import ICreateUserDTO from "../../dtos/ICreateUserDTO";
import CategoriesRepository from "../../../cars/repositories/implementations/CategoriesRepository";


class CreateUserUseCase {

    constructor(private userRepository: CategoriesRepository) {
    }

    async execute(data: ICreateUserDTO): Promise<void> {
        const {name, driver_license, username, email, password} = data
        await this.userRepository.create({
            name, driver_license, username, email, password
        })


    }
}

export default CreateUserUseCase