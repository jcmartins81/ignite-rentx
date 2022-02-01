import IUserRepository from "../../repositories/IUserRepository";


interface IRequest {
    user_id: string
    avatar_file: string
}



class UpdateUserAvatarUseCase {

    constructor(private usersRepository: IUserRepository) {
        this.usersRepository = usersRepository
    }
    async execute({user_id, avatar_file}: IRequest): Promise<voide>{
        const user = await this.usersRepository.findById(user_id)
        user.avatar = avatar_file
        await this.usersRepository.create(user)
    }
}

export {UpdateUserAvatarUseCase}