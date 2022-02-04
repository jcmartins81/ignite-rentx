import IUserRepository from '../../repositories/IUserRepository'
import { deleteFile } from '../../../../utils/file'

interface IRequest {
  user_id: string
  avatar_file: string
}

class UpdateUserAvatarUseCase {
  constructor(private usersRepository: IUserRepository) {
    this.usersRepository = usersRepository
  }
  async execute({ user_id, avatar_file }: IRequest): Promise<void> {
    const user = await this.usersRepository.findById(user_id)

    if (user.avatar) await deleteFile(`./tmp/avatar/${user.avatar}`)
    user.avatar = avatar_file
    await this.usersRepository.create(user)
  }
}

export { UpdateUserAvatarUseCase }
