import UsersRepository from '../../repositories/implementations/UsersRepository'
import AuthenticateUserController from './AuthenticateUserController'
import AuthenticateUserUseCase from './AuthenticateUserUseCase'

export default (): AuthenticateUserController => {
  const usersRepository = new UsersRepository()
  const authenticateUSeCase = new AuthenticateUserUseCase(usersRepository)
  return new AuthenticateUserController(authenticateUSeCase)
}
