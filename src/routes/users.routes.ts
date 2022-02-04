import { Router, Request, Response, request } from 'express'
import CreateUserController from '../modules/accounts/useCases/createUser'
import UpdateUserAvatarController from '../modules/accounts/useCases/updateUserAvatar'

const usersRoutes = Router()

usersRoutes.post('/', (request: Request, response: Response) => {
  return CreateUserController().handle(request, response)
})

usersRoutes.patch('/avatar', (request: Request, response: Response) => {
  return UpdateUserAvatarController().handle(request, response)
})

export default usersRoutes
