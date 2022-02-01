import ICreateUserDTO from "../../dtos/ICreateUserDTO";
import { hash } from 'bcrypt'
import UsersRepository from "../../repositories/implementations/UsersRepository";
import {AppError} from "../../../../errors/AppError";


class CreateUserUseCase {

    constructor(private userRepository: UsersRepository) {
    }

    async execute(data: ICreateUserDTO): Promise<void> {

        const {name, driver_license, email, password} = data

        const userAlreadyExists = await this.userRepository.findByEmail(email)

        if(userAlreadyExists) {
            throw new AppError("User already exists")
        }

        const passwordHash = await hash(password, 8)

        await this.userRepository.create({
            name, driver_license, email, password: passwordHash
        })

    }
}

export default CreateUserUseCase