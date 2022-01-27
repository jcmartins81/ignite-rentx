import IUserRepository from "../IUserRepository";
import ICreateUserDTO from "../../dtos/ICreateUserDTO";
import Users from "../../entities/Users";
import {getRepository, Repository} from "typeorm"


class UsersRepository implements IUserRepository {

    private repository: Repository<Users>
    private static INSTANCE: UsersRepository

    constructor() {
        this.repository = getRepository("users")
    }

    public static getInstance(): UsersRepository{
        if(!UsersRepository.INSTANCE) UsersRepository.INSTANCE = new UsersRepository()
        return UsersRepository.INSTANCE
    }

    async create(data: ICreateUserDTO): Promise<void> {
        const {name, email, driver_license, password} = data
        const user = this.repository.create({
            name, email, driver_license, password
        })

        await this.repository.save(user)
    }

}

export default UsersRepository