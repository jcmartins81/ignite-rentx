import IUserRepository from "../IUserRepository";
import ICreateUserDTO from "../../dtos/ICreateUserDTO";
import Users from "../../entities/Users";
import {getRepository, Repository} from "typeorm"


class UsersRepository implements IUserRepository {

    private repository: Repository<Users>

    constructor() {
        this.repository = getRepository(Users)
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