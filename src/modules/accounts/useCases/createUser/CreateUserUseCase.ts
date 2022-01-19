import IUserRepository from "../../repositories/IUserRepository";
import ICreateUserDTO from "../../dtos/ICreateUserDTO";
import { hash } from 'bcrypt'
import UsersRepository from "../../repositories/implementations/UsersRepository";


class CreateUserUseCase {

    constructor(private userRepository: UsersRepository) {
    }

    async execute(data: ICreateUserDTO): Promise<void> {

        const passwordHash = await hash(password, 8)
        const {name, driver_license, email, password} = data
        await this.userRepository.create({
            name, driver_license, email, password: passwordHash
        })

    }
}

export default CreateUserUseCase