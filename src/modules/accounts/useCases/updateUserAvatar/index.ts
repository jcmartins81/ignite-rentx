import { UpdateUserAvatarController } from './UpdateUserAvatarController'
import UsersRepository from '../../repositories/implementations/UsersRepository'
import { UpdateUserAvatarUseCase } from './UpdateUserAvatarUseCase'

export default (): UpdateUserAvatarController => {
  const usersRepository = new UsersRepository()
  const updateUserAvatarUseCase = new UpdateUserAvatarUseCase(usersRepository)
  return new UpdateUserAvatarController(updateUserAvatarUseCase)
}
